---
id: features_of_pinot
title: Features of Pinot
sidebar_label: Features of Pinot
draft: true
---

# Features of Pinot

-   A column-oriented database with various compression schemes such as Run Length, Fixed Bit Length
-   Pluggable indexing technologies - Sorted Index, Bitmap Index, Inverted Index
-   Ability to optimize query/execution plan based on query and segment metadata .
-   Near real time ingestion from streams and batch ingestion from Hadoop
-   Apache Pinot provides SQL interface for querying interactively, as well as programmatically via rest-api.
-   Support for multivalued fields
-   Horizontally scalable and fault tolerant

Because of the design choices we made to achieve these goals, there are certain limitations in Pinot:

Pinot is not a replacement for database i.e it cannot be used as source of truth store, cannot mutate data
Not a replacement for search engine i.e Full text search, relevance not supported
Query cannot span across multiple tables.
Pinot works very well for querying time series data with lots of Dimensions and Metrics. <br />

For example:

```SQL
SELECT distinctCount(advertiserId), daysSinceEpoch FROM AdAnalyticsTable
  WHERE (daysSinceEpoch >= 17849 AND daysSinceEpoch <= 17856)
  GROUP BY daysSinceEpoch
  ORDER BY daysSinceEpoch
  LIMIT 100
```

```SQL
SELECT sum(impressions), daysSinceEpoch, advertiserId FROM AdAnalyticsTable
  WHERE (daysSinceEpoch >= 17824 and daysSinceEpoch <= 17854) AND adveriserId = '1234356789'
  GROUP BY daysSinceEpoch, advertiserId
  ORDER BY sum(impressions) DESC
  LIMIT 100
```

```SQL
SELECT sum(cost), advertiserId FROM AdAnalyticsTable GROUP BY advertiserId ORDER BY sum(cost) DESC LIMIT 50
```
