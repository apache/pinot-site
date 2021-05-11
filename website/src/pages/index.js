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

const AnchoredH2 = Heading("h2");

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
                <AnchoredH2 id="ingest-query">
                    User-Facing Analytics
                </AnchoredH2>
                <p align="center">
                    <h3 className={styles.installSubTitle}>Building Latency Sensitive User Facing Analytics via Apache Pinot</h3>
                    <div>
                        <iframe className={styles.youtubePlayer}
                            title="Building Latency Sensitive User Facing Analytics via Apache Pinot"
                            src="https://www.youtube.com/embed/JV0WxBwJqKE">
                        </iframe>
                    </div>

                    <h3 className={styles.installSubTitle}>Using Apache Kafka and Apache Pinot for User-Facing Analytics</h3>
                    <div>
                        <iframe className={styles.youtubePlayer}
                            title="Using Apache Kafka and Apache Pinot for User-Facing, Real-Time Analytics"
                            src="https://www.youtube.com/embed/L5b_OJVOJKo">
                        </iframe>
                    </div>
                    <div className="hero--buttons">
                        <Link
                            to="https://docs.pinot.apache.org/community-1/videos"
                            className="button button--primary button--highlight"
                        >
                            More Videos
                        </Link>
                    </div>
                </p>
            </div>
        </section>
    );
}

function WhoUses() {
    return (
        <section className="topologies">
            <div className="container">
                <AnchoredH2 id="who-uses">Who Uses?</AnchoredH2>
                <div className="sub-title">
                    Pinot powers several big players, including LinkedIn, Uber,
                    Microsoft, Walmart, WePay, Factual, Weibo, Slack and more
                </div>

                <div className={styles.installationPlatforms}>
                    <Link class="grid-item" to="https://www.linkedin.com">
                        <SVG src="/img/companies/linkedin.svg" />
                    </Link>
                    <Link class="grid-item" to="https://www.ubereats.com">
                        <SVG src="/img/companies/uber.svg" />
                    </Link>
                    <Link class="grid-item" to="https://teams.microsoft.com">
                        <SVG src="/img/companies/MicrosoftTeamPost2018.svg" />
                    </Link>
                    <Link class="grid-item" to="https://slack.com">
                        <SVG src="/img/companies/slack.svg" />
                    </Link>
                    <Link class="grid-item" to="https://www.factual.com">
                        <SVG src="/img/companies/factual.svg" />
                    </Link>
                    <Link to="https://www.weibo.com">
                        <CompanyLogo srcLight="/img/companies/weibo_light.svg" srcDark="/img/companies/weibo_dark.svg" />
                    </Link>
                    <Link to="https://eero.com/">
                        <CompanyLogo srcLight="/img/companies/eero_light.svg" srcDark="/img/companies/eero_dark.svg" />
                    </Link>
                    <Link to="https://www.confluera.com/">
                        <CompanyLogo srcLight="/img/companies/confluera_light.svg" srcDark="/img/companies/confluera_dark.svg" />
                    </Link>
                    <Link class="grid-item" to="https://stripe.com">
                        <SVG src="/img/companies/stripe.svg" />
                    </Link>
                    <Link class="grid-item" to="https://www.target.com/">
                        <SVG src="/img/companies/target_logo.svg" />
                    </Link>
                    <Link class="grid-item" to="https://www.walmart.com/">
                        <SVG src="/img/companies/walmart_logo.svg" />
                    </Link>
                    <Link class="grid-item" to="https://cloudkitchens.com/">
                        <SVG src="/img/companies/cloudkitchens.svg" />
                    </Link>
                    <Link class="grid-item" to="https://www.guitarcenter.com/">
                        <SVG src="/img/companies/guitarcenter_logo.svg" />
                    </Link>
                    <Link class="grid-item" to="https://www.publicissapient.com/">
                        <SVG src="/img/companies/ps_logo.svg" />
                    </Link>
                    <Link class="grid-item" to="https://www.asurion.com/">
                        <SVG src="/img/companies/asurion.svg" />
                    </Link>
                    <Link class="grid-item" to="https://go.wepay.com/">
                        <SVG src="/img/companies/wepay_logo.svg" />
                    </Link>
                    <Link class="grid-item" to="https://www.traceable.ai">
                        <SVG src="/img/companies/traceableai.svg" />
                    </Link>
                    <Link class="grid-item" to="https://www.adbeat.com">
                        <SVG src="/img/companies/adbeat.svg" />
                    </Link>
                    <Link to="https://razorpay.com/">
                        <CompanyLogo srcLight="/img/companies/razorpay_light.svg" srcDark="/img/companies/razorpay_dark.svg" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

const CompanyLogo = ({srcLight, srcDark}) => {
    const { isDarkTheme } = useThemeContext();

    return (
        <SVG src={isDarkTheme ? srcDark : srcLight} />
    )
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
                <WhoUses />
                <UserFacingAnalytics />
                <Installation />
            </main>
        </Layout>
    );
}

export default Home;
