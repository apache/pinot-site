/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { useState, useEffect } from "react";

import CodeBlock from "@theme/CodeBlock";
import Heading from "@theme/Heading";
import Jump from "@site/src/components/Jump";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import SVG from "react-inlinesvg";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";

import classnames from "classnames";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useThemeContext from "@theme/hooks/useThemeContext";
import PinotOverview from '@site/static/img/pinot-overview-user.svg';
import PinotQuery from '@site/static/img/ingest-query.svg';

import styles from "./index.module.css";
import "./index.css";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import SwiftSlider from 'react-swift-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import ReactPlayer from "react-player/youtube";
import styled from 'styled-components'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const AnchoredH1 = Heading("h1");
const AnchoredH2 = Heading("h2");

function Official() {

    const a = "https://media.mfbproject.co.za/repos/ARWP_Infra_Desk_1920_1080_Quad.png"
    const b = "https://media.mfbproject.co.za/repos/alfa-romeo-giulia-quadrifoglio-2017-us-wallpapers-and-hd-images-13.jpg"
    const c = "https://media.mfbproject.co.za/repos/2017_alfa-romeo_stelvio_leaked_02.jpg"
    return (
      <section className="topologies">
        <div className="container">
            <AnchoredH2 id="official-dev"><a href="https://medium.com/apache-pinot-developer-blog">
            Official Pinot Developer Blog</a></AnchoredH2>

            <AutoplaySlider
                name="official"
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={4000}
                animation="cubeAnimation"
                buttons={true}
                infinite={true}
                bullets={true}
                className="slide-show"
            >
                <div className="slide-img" style={{ borderRadius: 5 }}
                    data-src={"https://miro.medium.com/max/2776/1*mLfA_squWNDBdKXjq7eUyg.png"}>
                    <div className="slide-caption">
                        <h1><a href="https://medium.com/apache-pinot-developer-blog/introduction-to-geospatial-queries-in-apache-pinot-b63e2362e2a9">
                        Introduction to Geospatial Queries in Apache Pinot</a></h1>
                        <p>
                        Geospatial data has been widely used across the industry,
                        Will discuss the challenges of analyzing geospatial at scale and propose the geospatial support in Pinot.
                        </p>
                    </div>
                </div>

              <div className="slide-img" style={{ borderRadius: 5 }}
                  data-src={"https://miro.medium.com/max/3200/0*2Vorw0A5VEy_U2uz"}>
                  <div className="slide-caption">
                      <h1><a href="https://medium.com/apache-pinot-developer-blog/change-data-analysis-with-debezium-and-apache-pinot-b4093dc178a7">
                      Change Data Analysis with Debezium and Apache Pinot</a></h1>
                      <p>
                       In this blog post, we’re going to explore an exciting new world of real-time analytics based on combining the popular CDC tool, Debezium, with the real-time OLAP datastore, Apache Pinot.
                      </p>
                  </div>
              </div>

              <div className="slide-img" style={{ borderRadius: 5 }}
                  data-src={"https://miro.medium.com/max/1400/1*EtqD0vTPEe569jybXCt69w.png"}>
                  <div className="slide-caption">
                      <h1><a href="https://medium.com/apache-pinot-developer-blog/deploying-apache-pinot-at-a-large-retail-chain-42aed2921a38">
                      Deploying Apache Pinot at a Large Retail Chain</a></h1>
                      <p>
                       Our real-time analytics journey to production
                      </p>
                  </div>
              </div>

            </AutoplaySlider>
        </div>
      </section>
    )
}

function Uber() {

    return (
      <section className="topologies">
        <div className="container">
            <AnchoredH2 id="uber" ><a href="https://eng.uber.com/?s=pinot">
            Uber Engineering Blog</a></AnchoredH2>

            <AutoplaySlider
                name="uber"
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={4000}
                animation="cubeAnimation"
                buttons={true}
                infinite={true}
                bullets={true}
                className="slide-show"
            >

              <div className="slide-img" style={{ borderRadius: 5 }}
                  data-src={"https://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/deliverDoor@3x-768x263.png"}>
                  <div className="slide-caption">
                      <h1><a href="https://eng.uber.com/charon/">
                      Automating Merchant Live Monitoring with Real-Time Analytics: Charon</a></h1>
                      <p>
                      Focus on Uber’s real-time data platform components to build a tool called Charon to reduce impact of poor marketplace reliability on the merchants.
                      </p>
                  </div>
              </div>

              <div className="slide-img" style={{ borderRadius: 5 }}
                  data-src={"https://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/1224-5.png"}>
                  <div className="slide-caption">
                      <h1><a href="https://eng.uber.com/operating-apache-pinot/">
                      Operating Apache Pinot @ Uber Scale</a></h1>
                      <p>
                      Present details of this platform and how it fits in Uber’s ecosystem.
                      Explain how uber scaled from a few use cases to a multi-cluster powering
                      hundreds of use cases for querying terabyte-scale data with millisecond latencies.
                      </p>
                  </div>
              </div>

              <div className="slide-img" style={{ borderRadius: 5 }}
                  data-src={"https://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/image4-2.png"}>
                  <div className="slide-caption">
                      <h1><a href="https://eng.uber.com/restaurant-manager/">
                      Engineering Restaurant Manager our UberEATS Analytics Dashboard </a></h1>
                      <p>
                      Restaurant Manager is a comprehensive analytics dashboard and pipeline for our restaurant partners.
                      In this article, we discuss how we architected this analytics platform and its robust data pipeline.
                      </p>
                  </div>
              </div>

              <div className="slide-img" style={{ borderRadius: 5 }}
                  data-src={"https://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/Header-SQL-768x329.png"}>
                  <div className="slide-caption">
                      <h1><a href="https://eng.uber.com/engineering-sql-support-on-apache-pinot/">
                      Engineering SQL Support on Apache Pinot at Uber</a></h1>
                      <p>
                       Talks about solution that linked Presto, a query engine that supports full ANSI SQL,
                       and Pinot, a real-time OLAP (online analytical processing) datastore.
                      </p>
                  </div>
              </div>

            </AutoplaySlider>
        </div>
      </section>

    )
}

function LinkedIn() {

    return (
      <section className="topologies">
        <div className="container">
            <AnchoredH2 id="linkedin" ><a href="https://engineering.linkedin.com/blog/topic/pinot">
            LinkedIn Engineering  Blog</a></AnchoredH2>

            <AutoplaySlider
                name="uber"
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={4000}
                animation="cubeAnimation"
                buttons={true}
                infinite={true}
                bullets={true}
                className="slide-show"
            >

              <div className="slide-img" style={{ borderRadius: 5 }}
                  data-src={"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2019/03/pinotincubator2.png"}>
                  <div className="slide-caption">
                      <h1><a href="https://engineering.linkedin.com/blog/2020/lambda-to-lambda-less-architecture">
                      From Lambda to Lambda-less: Lessons learned</a></h1>
                      <p>
                      The Lambda architecture has become a popular architectural style that promises
                      both speed and accuracy in data processing by using a hybrid approach of both batch processing and stream processing methods.
                      </p>
                  </div>
              </div>

              <div className="slide-img" style={{ borderRadius: 5 }}
                  data-src={"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2021/04/thetasketches2.png"}>
                  <div className="slide-caption">
                      <h1><a href="https://engineering.linkedin.com/blog/2021/pinot-and-theta-sketches">
                      Solving for the cardinality of set intersection at scale with Pinot and Theta Sketches</a></h1>
                      <p>
                      Focus on using large set intersection cardinality approximations with Apache Pinot and Theta Sketches,
                      which allow us to efficiently figure out the unique size of a targeted audience when factoring in multiple criteria of an advertising campaign.
                      </p>
                  </div>
              </div>

              <div className="slide-img" style={{ borderRadius: 5 }}
                  data-src={"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2020/07/bridging-1.png"}>
                  <div className="slide-caption">
                      <h1><a href="https://engineering.linkedin.com/blog/2020/bridging-batch-and-stream-processing">
                      Bridging batch and stream processing for the Recruiter usage statistics dashboard</a></h1>
                      <p>
                      Batch and streaming computations are often combined together in the Lambda architecture,
                      but carry the cost of maintaining two different code bases for the same logic.
                      </p>
                  </div>
              </div>

              <div className="slide-img" style={{ borderRadius: 5 }}
                  data-src={"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2020/06/lti-1.png"}>
                  <div className="slide-caption">
                      <h1><a href="https://engineering.linkedin.com/blog/2020/building-linkedin-talent-insights">
                      Building LinkedIn Talent Insights to democratize data-driven decision making</a></h1>
                      <p>
                       LinkedIn is a mission-driven organization, and we take our mission of “connecting the world's
                       professionals to make them more productive and successful” very seriously.
                      </p>
                  </div>
              </div>

              <div className="slide-img" style={{ borderRadius: 5 }}
                  data-src={"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2020/06/thirdeye_business_performance-3.png"}>
                  <div className="slide-caption">
                      <h1><a href="https://engineering.linkedin.com/blog/2020/monitoring-business-performance-data-with-thirdeye-smart-alerts">
                      Monitoring business performance data with ThirdEye smart alerts</a></h1>
                      <p>
                       Explain how ThirdEye smart alerts and automated dashboards helped the LinkedIn Premium business operations
                       team monitor key metrics—such as new free trial signups—for the timely detection of outliers in business performance data.
                      </p>
                  </div>
              </div>

              <div className="slide-img" style={{ borderRadius: 5 }}
                  data-src={"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2020/02/datacube-1.png"}>
                  <div className="slide-caption">
                      <h1><a href="https://engineering.linkedin.com/blog/2020/analyzing-anomalies-with-thirdeye">
                      Analyzing anomalies with ThirdEye</a></h1>
                      <p>
                       Focus on the behind-the-scenes functionalities of ThirdEye that analyze the multi-dimensional time series data
                       and help our engineers understand why these anomalies happened through a dimension heatmap
                      </p>
                  </div>
              </div>

              <div className="slide-img" style={{ borderRadius: 5 }}
                  data-src={"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2019/07/pinot1.png"}>
                  <div className="slide-caption">
                      <h1><a href="https://engineering.linkedin.com/blog/2019/auto-tuning-pinot">
                      Auto-tuning Pinot real-time consumption</a></h1>
                      <p>
                       Focus on Auto tuning Pinot, a scalable distributed columnar OLAP data store developed at LinkedIn,
                       delivers real-time analytics for site-facing use cases such as LinkedIn's Who viewed my profile, Talent insights, and more.
                      </p>
                  </div>
              </div>

              <div className="slide-img" style={{ borderRadius: 5 }}
                  data-src={"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2019/06/startree3.png"}>
                  <div className="slide-caption">
                      <h1><a href="https://engineering.linkedin.com/blog/2019/06/star-tree-index--powering-fast-aggregations-on-pinot">
                      Star-tree index: Powering fast aggregations on Pinot</a></h1>
                      <p>
                       Introduced Star-Tree index to utilize the pre-aggregated documents in a smart way that achieves low query latencies,
                       while using the storage space efficiently.
                      </p>
                  </div>
              </div>

              <div className="slide-img" style={{ borderRadius: 5 }}
                  data-src={"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2019/06/smartalerts2.png"}>
                  <div className="slide-caption">
                      <h1><a href="https://engineering.linkedin.com/blog/2019/06/smart-alerts-in-thirdeye--linkedins-real-time-monitoring-platfor">
                      Smart alerts in ThirdEye, LinkedIn’s real-time monitoring platform</a></h1>
                      <p>
                       Focus on smart alerts with LinkedIn’s comprehensive platform for real-time monitoring and root cause analysis
                      </p>
                  </div>
              </div>

              <div className="slide-img" style={{ borderRadius: 5 }}
                  data-src={"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2019/01/thirdeye3.png"}>
                  <div className="slide-caption">
                      <h1><a href="https://engineering.linkedin.com/blog/2019/01/introducing-thirdeye--linkedins-business-wide-monitoring-platfor">
                      Introducing ThirdEye: LinkedIn’s Business-Wide Monitoring Platform</a></h1>
                      <p>
                       ThirdEye is a comprehensive platform for real-time monitoring of metrics that covers a wide variety of use-cases.
                       LinkedIn relies on ThirdEye to monitor site performance, track member growth,  understand adoption of new features,
                       flag sustained attempts to circumvent system security, and many other areas
                      </p>
                  </div>
              </div>

              <div className="slide-img" style={{ borderRadius: 5 }}
                  data-src={"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2020/01/pinot-rhel7-1.png"}>
                  <div className="slide-caption">
                      <h1><a href="https://engineering.linkedin.com/blog/2020/upgrading-to-rhel7-with-minimal-interruptions">
                      Upgrading to RHEL7 with minimal interruptions</a></h1>
                      <p>
                       Review how we upgraded all of our servers to RHEL7 with minimal service interruptions.
                      </p>
                  </div>
              </div>

            </AutoplaySlider>
        </div>
      </section>

    )
}

function PopularBlogs() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    return (
        <Layout title="Who Uses" description="Collection of success stories and Companies using Pinot">
            <header className="hero">
                <div className="container container--fluid">
                    <AnchoredH1>Popular Blogs</AnchoredH1>
                    <div className="hero--subtitle">
                    Collection of popular blogs
                    </div>
                </div>
            </header>

            <main>
              <Uber />
              <LinkedIn />
              <Official />
            </main>
        </Layout>
    );
}

export default PopularBlogs;
