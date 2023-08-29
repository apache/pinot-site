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

import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import ReactPlayer from "react-player/youtube";
import Head from '@docusaurus/Head';

const AnchoredH2 = Heading("h2");


const features = [
    {
        title: "Fast queries",
        icon: "zap",
        description: (
            <>
                Pinot can filter and aggregate petabyte data sets with P90 latencies in the tens of milliseconds—fast enough to return live results interactively in the UI.
            </>
        ),
    },
    {
        title: "High concurrency",
        icon: "cpu",
        description: (
            <>
                With user-facing applications querying Pinot directly, it can serve 100,000s of concurrent queries per second.
            </>
        ),
    },
    {
        title: "Batch and streaming ingest",
        icon: "corner-down-right",
        description: (
            <>
                Ingest from <Link to="https://kafka.apache.org/">Apache Kafka</Link>, <Link to="https://pulsar.apache.org/">Apache Pulsar</Link>, and <Link to="https://aws.amazon.com/kinesis/">AWS Kinesis</Link> in real time. Batch ingest from Hadoop, Spark, AWS S3, and more. Combine batch and streaming sources into a single table for querying.
            </>
        ),
    },
    {
        title: "Upserts",
        icon: "arrow-up",
        description: (
            <>
                Ingest the same record many times, but see only the latest value at query time. Upserts are built-in and production-tested since version 0.6.
            </>
        ),
    },

    {
        title: "Versatile joins",
        icon: "shuffle",
        description: (
            <>
                Perform arbitrary fact/dimension and fact/fact joins on petabyte data sets.
            </>
        ),
    },

    {
        title: "Rich indexing options",
        icon: "layers",
        description: (
            <>
                Choose from pluggable indexes including <Link to="https://docs.pinot.apache.org/basics/indexing/timestamp-index">Timestamp</Link>, <Link to="https://docs.pinot.apache.org/basics/indexing/inverted-index">Inverted</Link>, <Link to="https://docs.pinot.apache.org/basics/indexing/star-tree-index">Star-Tree</Link>, <Link to="https://docs.pinot.apache.org/basics/indexing/bloom-filter">Bloom Filter</Link>, <Link to="https://docs.pinot.apache.org/basics/indexing/range-index">Range</Link>, <Link to="https://docs.pinot.apache.org/basics/indexing/text-search-support">Text</Link>, <Link to="https://docs.pinot.apache.org/basics/indexing/json-index">JSON</Link>, and <Link to="https://docs.pinot.apache.org/basics/indexing/geospatial-support">Geospatial</Link> options.
            </>
        ),
    },

    {
        title: "Built for scale",
        icon: "cloud",
        description: <>
            Pinot is horizontally scalable and fault-tolerant, adaptable to workloads across the storage and throughput spectrum.
        </>,
    },

    {
        title: "SQL query interface",
        icon: "database",
        description: (
            <>
                The highly standard SQL query interface is accessible through a built-in query editor and a REST API.
            </>
        ),
    },

    {
        title: "Built-in multitenancy",
        icon: "grid",
        description: (
            <>
                Manage and secure data in isolated logical namespaces for cloud-friendly resource management.
            </>
        ),
    }
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
                            url={"https://www.youtube.com/watch?v=L5b_OJVOJKo&t=575s"}
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
                    Trino/Presto(supports Joins)
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
                    Pinot can be installed using docker with Trino/Presto
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
                            {`helm repo add pinot https://raw.githubusercontent.com/apache/pinot/master/kubernetes/helm\nkubectl create ns pinot\nhelm install pinot pinot/pinot -n pinot --set cluster.name=pinot`}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="binary">
                        <CodeBlock className="language-bash">
                            {`VERSION=0.12.1\nwget https://downloads.apache.org/pinot/apache-pinot-$VERSION/apache-pinot-$VERSION-bin.tar.gz\ntar vxf apache-pinot-*-bin.tar.gz\ncd apache-pinot-*-bin\nbin/quick-start-batch.sh`}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="github">
                        <CodeBlock className="language-bash">
                            {`# Clone a repo\ngit clone https://github.com/apache/pinot.git\ncd pinot\n\n# Build Pinot\nmvn clean install -DskipTests -Pbin-dist\n\n# Run the Quick Demo\ncd pinot-distribution/target/apache-pinot-*-SNAPSHOT-bin/apache-pinot-*-SNAPSHOT-bin\nbin/quick-start-batch.sh`}
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
                        to="https://docs.pinot.apache.org/basics/releases/0.12.1"
                        className={styles.indexAnnouncement}
                    >
                        <span className="badge badge-primary">release</span>
                        v0.12.1 has been released! Check the release notes
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
                            to="https://join.slack.com/t/apache-pinot/shared_invite/zt-5z7pav2f-yYtjZdVA~EDmrGkho87Vzw"
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
                    <div className="container">
                        <p align="center">
                            <h3 className={styles.installSubTitle}>What is Apache Pinot?</h3>
                            <div>
                                <ReactPlayer
                                    url={"https://www.youtube.com/embed/_lqdfq2c9cQ"}
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
                        </p>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length && (
                    <Features features={features} />
                )}
                <Usage />
                <UserFacingAnalytics />
                <Installation />

            </main>
        </Layout>
    );
}

Home.description = "Who Uses Apache Pinot?"

export default Home;
