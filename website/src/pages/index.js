// /**
//  * Copyright (c) 2017-present, Facebook, Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  */

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
import Head from '@docusaurus/Head';

const companiesData = require(`../data/companies-data.js`);
const companiesList = companiesData.getCompaniesList();
const AnchoredH2 = Heading("h2");

const WhoUsesPinotSEO = () => (
  <Head>
    <meta property="og:description" content="Who used Apache Pinot?" />
    <meta property="og:description" content="Who used Pinot?" />
    <meta property="og:description" content="Companies using Pinot?" />
    <meta property="og:description" content="Companies using Apache Pinot?" />
    <meta charSet="utf-8" />
    <title>Who used Apache Pinot?</title>
    <link rel="canonical" href="http://mysite.com/example" />
  </Head>
);

const features = [
    {
        title: "Blazing Fast",
        icon: "zap",
        description: (
            <>
                Pinot is designed to answer OLAP queries with low latency on
                immutable data
            </>
        ),
    },
    {
        title: "Pluggable indexing",
        icon: "unlock",
        description: (
            <>
                Pluggable indexing technologies - Sorted Index, Bitmap Index,
                Inverted Index
            </>
        ),
    },
    {
        title: "Near Real time ingestion",
        icon: "rss",
        description: (
            <>
                Near Realtime ingestion with{" "}
                <Link to="https://kafka.apache.org/">Apache Kafka</Link>{" "}
                supports StringSerializer or{" "}
                <Link to="https://avro.apache.org/">Avro</Link> formats
            </>
        ),
    },
    {
        title: "Horizontally scalable",
        icon: "code",
        description: <>Horizontally scalable and fault tolerant</>,
    },
    {
        title: "Joins using PrestoDB",
        icon: "shuffle",
        description: (
            <>
                Joins are currently not supported, but this problem can be
                overcome by using{" "}
                <Link to="https://prestodb.io/">PrestoDB</Link> for querying
            </>
        ),
    },
    {
        title: "SQL-like Query Interface (PQL)",
        icon: "search",
        description: (
            <>
                SQL like language that supports selection, aggregation,
                filtering, group by, order by, distinct queries on data
            </>
        ),
    },
    {
        title: "Hybrid tables",
        icon: "list",
        description: (
            <>
                Consist of of{" "}
                <Link to="http://pinot.apache.org/img/dynamic-table.png">
                    both offline and realtime table
                </Link>
                . Use realtime table only to cover segments for which offline
                data may not be available yet
            </>
        ),
    },
    {
        title: "Anomaly Detection",
        icon: "bar-chart",
        description: (
            <>
                Run ML Algorithms to detect Anomalies on the data stored in
                Pinot. Use{" "}
                <Link to="https://docs.pinot.apache.org/integrations/thirdeye">
                    ThirdEye
                </Link>{" "}
                with Pinot for Anomaly Detection and Root Cause Analysis
            </>
        ),
    },
    {
        title: "Smart Alerts in ThirdEye",
        icon: "bell",
        description: (
            <>
                Detect the right anomalies by customizing anomaly detect flow
                and notification flow
            </>
        ),
    },
];

function Features({ features }) {
    let rows = [];

    let i,
        j,
        temparray,
        chunk = 3;
    for (i = 0, j = features.length; i < j; i += chunk) {
        let featuresChunk = features.slice(i, i + chunk);

        rows.push(
            <div key={`features${i}`} className="row">
                {featuresChunk.map((props, idx) => (
                    <Feature key={idx} {...props} />
                ))}
            </div>
        );
    }

    return (
        <section className={styles.features}>
            <div className="container">
                <AnchoredH2 id="features">Features</AnchoredH2>
                {rows}
            </div>
        </section>
    );
}

function Feature({ icon, title, description }) {
    return (
        <div className={classnames("col col--4", styles.feature)}>
            <div className={styles.featureIcon}>
                <i className={classnames("feather", `icon-${icon}`)}></i>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function UserFacingAnalytics() {
    return (
        <section className="topologies">
            <div className="container">
                <AnchoredH2 id="user-facing-analytics">
                    User-Facing Analytics
                </AnchoredH2>
                <p align="center">
                    <h3 className={styles.installSubTitle}>Building Latency Sensitive User Facing Analytics via Apache Pinot</h3>
                    <div>
                        <ReactPlayer
                            url={"https://www.youtube.com/embed/JV0WxBwJqKE&hd=1"}
                            light={true}
                            width={"720px"}
                            height={"480px"}
                            style={{ border: "1px solid white" }}
                            playing={true}
                            volume={1}
                            pip={true}
                            controls={true}
                            loop={false}
                            stopOnUnmount={true}
                        />
                    </div>

                    <h3 className={styles.installSubTitle}>Using Apache Kafka and Apache Pinot for User-Facing Analytics</h3>
                    <div>
                        <ReactPlayer
                            url={"https://www.youtube.com/watch?v=qL_t19QfrpY"}
                            light={true}
                            width={"720px"}
                            height={"480px"}
                            style={{ border: "1px solid white" }}
                            playing={true}
                            volume={1}
                            pip={true}
                            controls={true}
                            loop={false}
                            stopOnUnmount={true}
                        />
                    </div>
                    <div className="hero--buttons">
                        <Link
                            to="https://docs.pinot.apache.org/community-1/videos"
                            className="button button--primary button--highlight">
                            More Videos
                        </Link>
                    </div>
                </p>
            </div>
        </section>
    );
}

function Usage() {
    return (
        <section className="topologies">
            <div className="container">
                <AnchoredH2 id="ingest-query">
                    Ingest and Query Options
                </AnchoredH2>

                <div className="sub-title">
                    Ingest with Kafka, Spark, HDFS or Cloud Storages
                </div>
                <div className="sub-title">
                    Query using PQL(Pinot Query Language ), SQL or
                    Presto(supports Joins)
                </div>

                <PinotQuery title="PinotOverview" className="svg image-overview figure" />
                {/* <SVG
                    src="/img/ingest-query.svg"
                    className="svg image-overview figure"
                /> */}
            </div>
        </section>
    );
}

function Installation() {
    return (
        <section className={styles.installation}>
            <div className="container">
                <AnchoredH2 id="installation">Installs Everywhere</AnchoredH2>
                <div className="sub-title">
                    Pinot can be installed using docker with presto
                </div>

                <div className={styles.installationChecks}>
                    <div>
                        <i className="feather icon-package"></i> Helm or K8s
                        crds
                    </div>
                    <div>
                        <i className="feather icon-cpu"></i> On-Premise
                    </div>
                    <div>
                        <i className="feather icon-zap"></i> Public Cloud
                    </div>
                    <div>
                        <i className="feather icon-feather"></i> Locally
                    </div>
                </div>

                <h3 className={styles.installSubTitle}>Install:</h3>

                <Tabs
                    className="mini"
                    defaultValue="helm"
                    values={[
                        {
                            label: (
                                <>
                                    <i className="feather icon-download-cloud"></i>{" "}
                                    Using Helm
                                </>
                            ),
                            value: "helm",
                        },
                        {
                            label: (
                                <>
                                    <i className="feather icon-download"></i>{" "}
                                    Using Binary
                                </>
                            ),
                            value: "binary",
                        },
                        {
                            label: (
                                <>
                                    <i className="feather icon-github"></i>{" "}
                                    Build From Source
                                </>
                            ),
                            value: "github",
                        },
                    ]}
                >
                    <TabItem value="helm">
                        <CodeBlock className="language-bash">
                            {`helm repo add pinot https://raw.githubusercontent.com/apache/incubator-pinot/master/kubernetes/helm\nkubectl create ns pinot\nhelm install pinot pinot/pinot -n pinot --set cluster.name=pinot`}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="binary">
                        <CodeBlock className="language-bash">
                            {`VERSION=0.7.1\nwget https://downloads.apache.org/incubator/pinot/apache-pinot-incubating-$VERSION/apache-pinot-incubating-$VERSION-bin.tar.gz\ntar vxf apache-pinot-incubating-*-bin.tar.gz\ncd apache-pinot-incubating-*-bin\nbin/quick-start-batch.sh`}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="github">
                        <CodeBlock className="language-bash">
                            {`# Clone a repo\ngit clone https://github.com/apache/incubator-pinot.git\ncd incubator-pinot\n\n# Build Pinot\nmvn clean install -DskipTests -Pbin-dist\n\n# Run the Quick Demo\ncd pinot-distribution/target/apache-pinot-incubating-*-SNAPSHOT-bin/apache-pinot-incubating-*-SNAPSHOT-bin\nbin/quick-start-batch.sh`}
                        </CodeBlock>
                    </TabItem>
                </Tabs>

                <h3 className={styles.installSubTitle}>
                    Or choose your preferred method:
                </h3>

                <div className="row">
                    <div className="col">
                        <Jump to="https://docs.pinot.apache.org/getting-started/running-pinot-in-docker">
                            Containers
                        </Jump>
                    </div>
                    <div className="col">
                        <Jump to="https://docs.pinot.apache.org/getting-started/kubernetes-quickstart">
                            Helm
                        </Jump>
                    </div>
                    <div className="col">
                        <Jump to="https://docs.pinot.apache.org/basics/getting-started/public-cloud-examples">
                            Cloud
                        </Jump>
                    </div>
                    <div className="col">
                        <Jump to="https://docs.pinot.apache.org/getting-started/running-pinot-locally">
                            Manual/Local
                        </Jump>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WhoUsesPinot() {
    return (
        <section className="topologies">
            <div className="container">
                <AnchoredH2 id="who-uses">Who Uses Apache Pinot?</AnchoredH2>
                <div className="sub-title">
                    Pinot powers several big players, including LinkedIn, Uber, Microsoft, Walmart, WePay, Factual, Weibo, Slack and more
                </div>

                <div className={styles.installationPlatforms}>
                    {
                        companiesList.map(
                            company => (
                                (() => {
                                    if (company['enable_dark_logo'] == true) {
                                        var title = `apache_pinot_user_${company.name}`
                                        var altText = `Apache Pinot used by ${company.name}`
                                        return <Link class="grid-item" to={company.website} alt={altText} title={title}>
                                                    <CompanyLogo srcLight={company.logo} srcDark={company.darkLogo} title={title} description={altText} />
                                                </Link>
                                    } else {
                                        var title = `apache_pinot_user_${company.name}`
                                        var altText = `Apache Pinot used by ${company.name}`
                                        return <Link class="grid-item" to={company.website} alt={altText} title={title}>
                                                    <SVG src={company.logo} title={title} description={altText} />
                                                </Link>
                                    }
                                })()
                            )
                        )
                    }
                </div>
            </div>
            <p align="center">
            <div className="hero--buttons">
                <Link
                    to="/who_uses"
                    className="button button--primary button--highlight">
                    Read More on use cases..
                </Link>
            </div>
            </p>

        </section>
    );
}

const CompanyLogo = ({srcLight, srcDark, title, description}) => {
    const { isDarkTheme } = useThemeContext();

    return (
        <SVG src={isDarkTheme ? srcDark : srcLight} title={title} description={description} />
    )
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    return (
        <Layout
            title={`${siteConfig.title}: ${siteConfig.tagline}`}
            description={siteConfig.description}
        >
            <header
                className={classnames(
                    "hero",
                    "hero--full-height",
                    styles.indexHeroBanner
                )}
            >
                <div className="container">
                    <Link
                        to="https://docs.pinot.apache.org/basics/releases/0.7.1"
                        className={styles.indexAnnouncement}
                    >
                        <span className="badge badge-primary">release</span>
                        v0.7.1 has been released! Check the release notes
                    </Link>
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">
                        {siteConfig.tagline}, designed to answer OLAP queries
                        with low latency
                        <PinotOverview title="PinotOverview" className="svg image-overview figure" />
                        {/* <SVG
                            src="/img/pinot-overview.svg"
                            fill="#fff"
                            className="svg image-overview figure"
                        /> */}
                    </p>
                    <div className="hero--buttons">
                        <Link
                            to="https://docs.pinot.apache.org/getting-started"
                            className="button button--primary button--highlight"
                        >
                            Getting Started
                        </Link>
                        <Link
                            to="https://communityinviter.com/apps/apache-pinot/apache-pinot"
                            className="button button--primary button--highlight"
                        >
                            Join our Slack
                        </Link>
                    </div>
                    <p className="hero--subsubtitle">
                        Pinot is proven at <strong>scale in LinkedIn</strong>{" "}
                        powers 50+ user-facing apps and serving{" "}
                        <strong>100k+ queries</strong>
                    </p>
                </div>
            </header>
            <main>
                {features && features.length && (
                    <Features features={features} />
                )}
                <Usage />
                <WhoUsesPinot />
                <UserFacingAnalytics />
                <Installation />

            </main>
        </Layout>
    );
}

Home.description = "Who Uses Apache Pinot?"

export default Home;
