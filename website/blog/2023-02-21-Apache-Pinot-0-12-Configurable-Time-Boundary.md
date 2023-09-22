---
title: Apache Pinot™ 0.12 - Configurable Time Boundary
author: Mark Needham
author_title: Mark Needham
author_url: https://www.linkedin.com/in/markhneedham/
author_image_url: https://www.datocms-assets.com/75153/1661544338-mark-needham.png
description:
 This post will explore the ability to configure the time boundary when working with hybrid tables.

keywords:
    - Apache Pinot
    - Apache Pinot 0.11.0
    - hybrid tables
    - time boundary
tags: [Pinot, Data, Analytics, User-Facing Analytics, hybrid tables, time boundary]
---


[![Watch the video](https://i3.ytimg.com/vi/lB3RaKJ0Hbs/maxresdefault.jpg)](https://youtu.be/lB3RaKJ0Hbs)


The Apache Pinot community recently released version [0.12.0](https://docs.pinot.apache.org/basics/releases/0.12.0), which has lots of goodies for you to play with. This is the first in a series of blog posts showing off some of the new features in this release.

This post will explore the ability to configure the time boundary when working with hybrid tables.

What is a hybrid table?
-----------------------

A hybrid table is the term used to describe a situation where we have an offline and real-time table with the same name. The offline table stores historical data, while the real-time data continuously ingests data from a streaming data platform.

How do you query a hybrid table?
--------------------------------

When you write a query against a hybrid table, the Pinot query engine needs to work out which records to read from the offline table and which to read from the real-time table.

It does this by computing the time boundary, determined by looking at the maximum end time of segments in the offline table and the segment ingestion frequency specified for the offline table.

```
timeBoundary = <Maximum end time of offline segments> - <Ingestion Frequency>
```

The ingestion frequency can either be 1 hour or 1 day, so one of these values will be used.

When a query for a hybrid table is received by a Pinot Broker, the broker sends a time boundary annotated version of the query to the offline and real-time tables. Any records from or before the time boundary are read from the offline table; anything greater than the boundary comes from the real-time table.

![Apache Pinot computing the time boundary](https://www.datocms-assets.com/75153/1676991003-image2.png "Apache Pinot computing the time boundary")  

For example, if we executed the following query:

```sql
SELECT count(*)
FROM events
```


The broker would send the following query to the offline table:

```sql
SELECT count(*)
FROM events_OFFLINE
WHERE timeColumn <= $timeBoundary
```


And the following query to the real-time table:

```sql
SELECT count(*)
FROM events_REALTIME
WHERE timeColumn > $timeBoundary
```


The results of the two queries are merged by the broker before being returned to the client.

So, what’s the problem?
-----------------------

If we have some overlap in the data in our offline and real-time tables, this approach works well, but if we have no overlap, we will end up with unexpected results.

For example, let’s say that the most recent timestamp in the events offline table is 2023-01-09T18:41:17, our ingestion frequency is 1 hour, and the real-time table has data starting from 2023-01-09T18:41:18.

This will result in a boundary time of 2023-01-09T17:41:17, which means that any records with timestamps between 17:41 and 18:41 will be excluded from query results.

And the solution?
-----------------

The 0.12 release sees the addition of the tables/{tableName}/timeBoundary API, which lets us set the time boundary to the maximum end time of all offline segments.

```bash
curl -X POST \
  "http://localhost:9000/tables/{tableName}/timeBoundary" \
  -H "accept: application/json"
```


In this case, that will result in a new boundary time of 2023-01-09T18:41:17, which is exactly what we need.

We’ll then be able to query the events table and have it read the offline table to get all records on or before 2023-01-09T18:41:17 and the real-time table for everything else.

Neat, anything else I should know?
----------------------------------

Something to keep in mind when updating the time boundary is that it’s a one-off operation. It won’t be automatically updated if you add a new, more recent segment to the offline table.

In this scenario, you need to call the tables/{tableName}/timeBoundary API again.

And if you want to revert to the previous behavior where the time boundary is computed by subtracting the ingestion frequency from the latest end time, you can do that too:

```bash
curl -X DELETE \
  "http://localhost:9000/tables/{tableName}/timeBoundary" \
  -H "accept: application/json"
```


Summary
-------

I love this feature, and it solves a problem I’ve struggled with when using my datasets. I hope you’ll find it just as useful.

Give it a try, and let us know how you get on. If you have any questions about this feature, feel free to join us on [Slack](https://stree.ai/slack), where we’ll be happy to help you out.
