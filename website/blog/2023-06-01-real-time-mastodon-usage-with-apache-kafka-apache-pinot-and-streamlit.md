---
title: Real-Time Mastodon Usage with Apache Kafka, Apache Pinot, and Streamlit
author: Mark Needham
author_title: Developer Advocate
author_url: https://pinot.apache.org/
author_image_url: https://pinot.apache.org/authors/pinot_team.jpg
description:
 The blog post discusses analyzing user activity and server popularity on Mastodon using Kafka Connect, Parquet, Seaborn, and DuckDB. It explores the potential of using Apache Pinot for real-time data streaming and creating a dashboard. The post provides instructions on ingesting Apache Avro messages into Pinot, creating a Pinot table, and querying the data.

keywords:
    - Apache Pinot
    - blog post
    - analyzing user activity
    - server popularity
    - Mastodon
    - Kafka Connect
    - Parquet
    - Seaborn
    - DuckDB
    - realtime data streaming
    - dashboard
    - Apache Avro messages
tags: [Pinot, Data, Analytics, User-Facing Analytics, blog post, analyzing user activity, server popularity, Mastodon, Kafka Connect, Parquet, Seaborn, DuckDB, potential, Apache Pinot, realtime data streaming, dashboard, instructions, ingesting, Apache Avro messages, Pinot table, querying data]
---

I recently came across a fascinating blog post written by Simon Aubury that shows [how to analyze user activity, server popularity, and language usage on Mastodon](https://simonaubury.com/posts/202302_mastodon_duckdb/), a decentralized social networking platform that has become quite popular in the last six months. 

The Existing Solution: Kafka Connect, Parquet, Seaborn and DuckDB 
------------------------------------------------------------------

To start, Simon wrote a listener to collect the messages, which he then published into Apache Kafka®. He then wrote a Kafka Connect configuration that consumes messages from Kafka and flushes them after every 1,000 messages into Apache Parquet files stored in an Amazon S3 bucket. 

Finally, he queried those Parquet files using DuckDB and created some charts using the Seaborn library, as reflected in the architecture diagram below:

![Flowchart of data collection to data processing](https://www.datocms-assets.com/75153/1685637607-image1.png "Flowchart of data collection to data processing")

Fig: [Data Collection Architecture](https://simonaubury.com/posts/202302_mastodon_duckdb/)

The awesome visualizations that Simon created make me wonder whether we can change what happens downstream of Kafka to make our queries even more real-time. Let’s find out!

Going Real-Time with Apache Pinot™
----------------------------------

Now [Apache Pinot](https://startree.ai/resources/what-is-apache-pinot) comes into the picture. Instead of using Kafka Connect to batch Mastodon toots into groups of 1,000 messages to generate Parquet files, we can stream the data immediately and directly, toot-by-toot into Pinot and then build a real-time dashboard using Streamlit:

![Data collection in Mastodon, followed by processing in Apache Kafka, Apache Pinot, and Streamlit](https://www.datocms-assets.com/75153/1685637507-image4.png "Data collection in Mastodon, followed by processing in Apache Kafka, Apache Pinot, and Streamlit")

Setup
-----

To follow along, first clone my fork of Simon’s GitHub repository:

```bash
git clone git@github.com:mneedham/mastodon-stream.git
cd mastodon-stream
```

Then launch all of the components using Docker Compose:

```bash
docker-compose up
```

Pinot Schema and Table
----------------------

Similar to what Simon did with DuckDB, we’ll ingest the Mastodon events into a table. Pinot tables have a schema that’s defined in a schema file. 

To come up with a schema file, we need to know the structure of the ingested events. For example:

```json
{
  "m_id": 110146691030544274,
  "created_at": 1680705124,
  "created_at_str": "2023 04 05 15:32:04",
  "app": "",
  "url": "https://mastodon.social/@Xingcat/110146690810165414",
  "base_url": "https://techhub.social",
  "language": "en",
  "favourites": 0,
  "username": "Xingcat",
  "bot": false,
  "tags": 0,
  "characters": 196,
  "words": 36,
  "mastodon_text": "Another, “I don’t know what this is yet,” paintings. Many, many layers that look like distressed metal or some sort of rock crosscut. Liking it so far, need to figure out what it’ll wind up being."
}
```
Mapping these fields directly to columns is easiest and will result in a schema file that looks like this:

```json
{
  "schemaName":"mastodon",
  "dimensionFieldSpecs":[
    {"name":"m_id","dataType":"LONG"},
    {"name":"created_at_str","dataType":"STRING"},
    {"name":"app","dataType":"STRING"},
    {"name":"url","dataType":"STRING"},
    {"name":"base_url","dataType":"STRING"},
    {"name":"language","dataType":"STRING"},
    {"name":"username","dataType":"STRING"},
    {"name":"bot","dataType":"BOOLEAN"},    
    {"name":"mastodon_text","dataType":"STRING"}
  ],
  "metricFieldSpecs":[
    {"name":"favourites","dataType":"INT"},
    {"name":"words","dataType":"INT"},
    {"name":"characters","dataType":"INT"},
    {"name":"tags","dataType":"INT"}
  ],
  "dateTimeFieldSpecs":[
    {
      "name":"created_at",
      "dataType":"LONG",
      "format":"1:MILLISECONDS:EPOCH",
      "granularity":"1:MILLISECONDS"
    }
  ]
}
```

Next up: our table config, shown below:

```json
{
    "tableName": "mastodon",
    "tableType": "REALTIME",
    "segmentsConfig": {
      "timeColumnName": "created_at",
      "timeType": "MILLISECONDS",
      "schemaName": "mastodon",
      "replicasPerPartition": "1"
    },
    "tenants": {},
    "tableIndexConfig": {
      "loadMode": "MMAP",
      "streamConfigs": {
        "streamType": "kafka",
        "stream.kafka.consumer.type": "lowLevel",
        "stream.kafka.topic.name": "mastodon-topic",
        "stream.kafka.decoder.class.name": "org.apache.pinot.plugin.inputformat.avro.confluent.KafkaConfluentSchemaRegistryAvroMessageDecoder",
        "stream.kafka.consumer.factory.class.name": "org.apache.pinot.plugin.stream.kafka20.KafkaConsumerFactory",
        "stream.kafka.decoder.prop.format": "AVRO",
        "stream.kafka.decoder.prop.schema.registry.rest.url": "http://schema-registry:8081",
        "stream.kafka.decoder.prop.schema.registry.schema.name": "mastodon-topic-value",
        "stream.kafka.broker.list": "broker:9093",
        "stream.kafka.consumer.prop.auto.offset.reset": "smallest"
      }
    },
    "metadata": {
      "customConfigs": {}
    },
    "routing": {
      "instanceSelectorType": "strictReplicaGroup"
    }
}
```

The following configs represent the most important ones for ingesting Apache Avro™ messages into Pinot:

```json
"stream.kafka.decoder.class.name": "org.apache.pinot.plugin.inputformat.avro.confluent.KafkaConfluentSchemaRegistryAvroMessageDecoder",
"stream.kafka.decoder.prop.format": "AVRO",
"stream.kafka.decoder.prop.schema.registry.rest.url": "http://schema-registry:8081",
"stream.kafka.decoder.prop.schema.registry.schema.name": "mastodon-topic-value",
```

The KafkaConfluentSchemaRegistryAvroMessageDecoder decoder calls the Schema Registry with the schema name to get back the schema that it will use to decode messages.

We can create the Pinot table by running the following command:

```bash
docker run \
   --network mastodon \
   -v $PWD/pinot:/config \
   apachepinot/pinot:0.12.0-arm64 AddTable \
     -schemaFile /config/schema.json \
     -tableConfigFile /config/table.json \
     -controllerHost "pinot-controller" \
    -exec
```
We can then navigate to the table page of the Pinot UI: 

http://localhost:9000/#/tenants/table/mastodon\_REALTIME

Here, we’ll see the following:

![Apache Pinot table config and schema](https://www.datocms-assets.com/75153/1685637837-image6.png "Apache Pinot table config and schema")

Ingest Data into Kafka
----------------------

Now, we need to start ingesting data into Kafka. Simon created a script that accomplishes this for us, so we just need to indicate which Mastodon servers to query.

```bash
python mastodonlisten.py --baseURL https://data-folks.masto.host \
  --public --enableKafka --quiet
python mastodonlisten.py --baseURL https://fosstodon.org/ \
  --public --enableKafka --quiet
python mastodonlisten.py --baseURL https://mstdn.social/ \
  --public --enableKafka --quiet
```

We can then check the ingestion of messages with the [kcat](https://docs.confluent.io/platform/current/clients/kafkacat-usage.html) command line tool:

```bash
kcat -C -b localhost:9092 -t mastodon-topic \
  -s value=avro -r http://localhost:8081 -e
```

Query Pinot
-----------

Now, let’s go to the Pinot UI to see what data we’ve got to play with:

[http://localhost:9000](http://localhost:9000/)

We’ll see the following preview of the data in the mastodon table:

![SQL Editor, query response stats, and query result in Apache Pinot](https://www.datocms-assets.com/75153/1685637772-image5.png "SQL Editor, query response stats, and query result in Apache Pinot")

We can then write a query to find the number of messages posted in the last five minutes:

```sql
select count(*) as "Num toots"
, count(distinct(username)) as "Num users"
, count(distinct(url)) as "Num urls"
from mastodon
where created_at*1000 > ago('PT1M')
order by 1 DESC;
```

![Query results for toots, users, and urls](https://www.datocms-assets.com/75153/1685637909-image8.png "Query results for toots, users, and urls")

We can also query Pinot via the Python client, which we can install by running the following:

```bash
pip install pinotdb
```

Once we’ve done that, let’s open the Python REPL and run the following code:

```python
from pinotdb import connect
import pandas as pd

conn = connect(host='localhost', port=8099, path='/query/sql', scheme='http')

curs = conn.cursor()

st.header("Daily Mastodon Usage")
query = """
select count(*) as "Num toots"
, count(distinct(username)) as "Num users"
, count(distinct(url)) as "Num urls"
from mastodon
where created_at*1000 > ago('PT1M')
order by 1 DESC;
"""
curs.execute(query)

df = pd.DataFrame(curs, columns=[item[0] for item in curs.description])
```
This produces the resulting DataFrame:

```
   Num toots  Num users  Num urls
0        552        173       192
```
Streamlit
---------

Next, we’ll create a Streamlit dashboard to package up these queries. We’ll visualize the results using Plotly, which you can install using:

pip install streamlit plotly

I’ve created a Streamlit app in the file [app.py](https://github.com/mneedham/mastodon-stream/blob/main/app.py), which you can find in the GitHub repository. Let’s have a look at the kinds of visualizations that we can generate. 

First, we’ll create metrics to show the number of toots, users, and URLs in the last _n_ minutes. _n_ will be configurable from the app as shown in the screenshot below:

![Chart of real-time Mastodon usage](https://www.datocms-assets.com/75153/1685637876-image7.png "Chart of real-time Mastodon usage")

From the screenshot, we can identify mastodon.cloud as the most active server, though it produces only 1,800 messages in 10 minutes or three messages per second. The values in green indicate the change in values compared to the previous 10 minutes.

We can also create a chart showing the number of messages per minute for the last 10 minutes:

![Time of day Mastodon usage](https://www.datocms-assets.com/75153/1685637945-image9.png "Time of day Mastodon usage")

Based on this chart, we can see that we’re creating anywhere from 200–900 messages per second. Part of the reason lies in the fact that the Mastodon servers sometimes disconnect our listener, and at the moment, I have to manually reconnect.

Finally, we can look at the toot length by language:

![Chart of toot length by language usage](https://www.datocms-assets.com/75153/1685637644-image2.png "Chart of toot length by language usage")

We see much bigger ranges here than Simon saw in his analysis. He saw a maximum length of 200 characters, whereas we see some messages of up to 4,200 characters. 

Summary
-------

We hope you enjoyed following along as we explored this fun use case for [real-time analytics](https://startree.ai/resources/what-is-real-time-analytics). As you can see, even though we’re pulling the data from many of the popular Mastodon servers, it’s still not all that much data!

Give the code a try and let us know how it goes. If you have any questions, feel free to [join us on Slack](https://stree.ai/slack), where we’ll gladly do our best to help you out.
