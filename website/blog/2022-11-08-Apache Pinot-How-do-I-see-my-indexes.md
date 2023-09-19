---
title: Apache Pinot™ 0.11 - How do I see my indexes?
author: Mark Needham
author_title: Mark Needham
author_url: https://www.linkedin.com/in/lakshmanan-velusamy-a778a517/
author_image_url: https://www.datocms-assets.com/75153/1661544338-mark-needham.png
description:
 How you can work out which indexes are currently defined on a Pinot table

keywords:
    - Apache Pinot
    - Apache Pinot 0.11.0
    - Indexes
tags: [Pinot, Data, Analytics, User-Facing Analytics, Indexes]
---
We recently released [Pinot 0.11.0](https://medium.com/apache-pinot-developer-blog/apache-pinot-0-11-released-d564684df5d4) , which has lots of goodies for you to play with. This is the first in a series of blog posts showing off some of the new features in this release.

A common question from the community is: how can you work out which indexes are currently defined on a Pinot table? This information has always been [available via the REST API](https://docs.pinot.apache.org/users/api/pinot-rest-admin-interface), but sometimes you simply want to see it on the UI and not have to parse your way through a bunch of JSON. Let's see how it works!

Spinning up Pinot
-----------------

We’re going to spin up the Batch [QuickStart](https://docs.pinot.apache.org/basics/getting-started/quick-start) in Docker using the following command:

```bash
docker run \
  -p 8000:8000 \
  -p 9000:9000 \
  apachepinot/pinot:0.11.0 \
  QuickStart -type BATCH
```



Or if you’re on a Mac M1, change the name of the image to have the arm-64 suffix, like this:

```bash
docker run \
  -p 8000:8000 \
  -p 9000:9000 \
  apachepinot/pinot:0.11.0-arm64 \
  QuickStart -type BATCH
```



Once that’s up and running, navigate to [http://localhost:9000/#/](http://localhost:9000/#/) and click on Tables. Under the tables section click on airlineStats\_OFFLINE. You should see a page that looks like this:

![airlineStats_OFFLINE page](https://www.datocms-assets.com/75153/1667915561-image1-edittable.png "airlineStats_OFFLINE page")

Click on Edit Table. This will show a window with the config for this table.

![Window with configuration for airlineStats_OFFLINE table](https://www.datocms-assets.com/75153/1667915654-image3.png "Window with configuration for airlineStats_OFFLINE table")

Indexing Config
---------------

We’re interested in the tableIndexConfig and fieldConfigList sections. These sections are responsible for defining indexes, which are applied to a table on a per segment basis. 

*   tableIndexConfig is responsible for inverted, JSON, range, Geospatial, and StarTree indexes.
    
*   fieldConfigList is responsible for timestamp and text indexes.
    

tableIndexConfig is defined below:

```json
"tableIndexConfig": {
  "rangeIndexVersion": 2,
  "autoGeneratedInvertedIndex": false,
  "createInvertedIndexDuringSegmentGeneration": false,
  "loadMode": "MMAP",
  "enableDefaultStarTree": false,
  "enableDynamicStarTreeCreation": false,
  "aggregateMetrics": false,
  "nullHandlingEnabled": false,
  "optimizeDictionaryForMetrics": false,
  "noDictionarySizeRatioThreshold": 0
},
```



From reading this config we learn that no indexes have been explicitly defined.

Now for fieldConfigList, which is defined below:

```json
"fieldConfigList": [
  {
    "name": "ts",
    "encodingType": "DICTIONARY",
    "indexType": "TIMESTAMP",
    "indexTypes": [
      "TIMESTAMP"
    ],
    "timestampConfig": {
      "granularities": [
        "DAY",
        "WEEK",
        "MONTH"
      ]
    }
  }
],
```



From reading this config we learn that a timestamp index is being applied to the _ts_ column. It is applied at DAY, WEEK, and MONTH granularities, which means that the derived columns $ts$DAY, $ts$WEEK, and $ts$MONTH will be created for the segments in this table.

Viewing Indexes
---------------

Now, close the table config modal, and under the segments section, open airlineStats\_OFFLINE\_16071\_16071\_0 and airlineStats\_OFFLINE\_16073\_16073\_0 in new tabs.

If you look at one of those segments, you’ll see the following grid that lists columns/field names against the indexes defined on those fields.

![Segment grid that lists columns/field names against the indexes defined on those fields](https://www.datocms-assets.com/75153/1667915996-image7.png "Segment grid that lists columns/field names against the indexes defined on those fields")

All the fields on display are persisting their values using the dictionary/forward [index format](https://docs.pinot.apache.org/basics/indexing/forward-index) ). Still, we can also see that the Quarter column is sorted and has an inverted index, neither of which we explicitly defined.

This is because Pinot will automatically create sorted and inverted indexes for columns whose data is sorted when the segment is created. 

So the data for the Quarter column was sorted, and hence it has a sorted index.

I’ve written a couple of blog posts explaining how sorted indexes work on offline and real-time tables:

Adding an Index
---------------

Next, let’s see what happens if we add an explicit index. We’re going to add an inverted index to the FlightNum column. Go to Edit Table config again and update tableIndexConfig to have the following value:

![Inverted index addition](https://www.datocms-assets.com/75153/1667916147-image6.png "Inverted index addition")

If you go back to the page for segment airlineStats\_OFFLINE\_16073\_16073\_0, notice that it does not have an inverted index for this field.

![page for segment airlineStats_OFFLINE_16073_16073_0 without an inverted index](https://www.datocms-assets.com/75153/1667916232-image2.png "page for segment airlineStats_OFFLINE_16073_16073_0 without an inverted index")

This is because indexes are applied on a per segment basis. If we want the inverted index on the FlightNum column in this segment, we can click _Reload Segment_ on this page, or we can go back to the table page and click _Reload All Segments_. 

If we do that, all the segments in the airlineStats\_OFFLINE table will eventually have an inverted index on FlightNum.

Summary
-------

As I mentioned in the introduction, information about the indexes on each segment has always been available via the REST API, but this feature democratizes that information. 

If you have any questions about this feature, feel free to join us on [Slack](https://stree.ai/slack), where we’ll be happy to help you out.
