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
import React from "react";

import Layout from "@theme/Layout";

import styles from "./download.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Download() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    return (
        <Layout title="Download" description="Download Pinots versions">
            <header className="hero">
                <div className="container container--fluid">
                    <h1>Download</h1>
                    <div className="hero--subtitle">
                        Be sure to verify your downloads by these{" "}
                        <a href="https://www.apache.org/info/verification">
                            procedures
                        </a>{" "}
                        using these{" "}
                        <a href="https://downloads.apache.org/pinot/KEYS">
                            KEYS
                        </a>{" "}
                        for any Apache release.
                    </div>
                </div>
            </header>
            <main>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <a
                                    href="https://downloads.apache.org/pinot/apache-pinot-0.12.1/apache-pinot-0.12.1-bin.tar.gz"
                                    className="panel panel--link text--center"
                                >
                                    <div className="panel--icon">
                                        <i className="feather icon-download"></i>
                                    </div>

                                    <div className="panel--title">0.12.1</div>

                                    <a href="https://downloads.apache.org/pinot/apache-pinot-0.12.1/apache-pinot-0.12.1-src.tar.gz">
                                        <div className="panel--title">
                                            Official source release
                                        </div>
                                    </a>
                                    <a href="https://downloads.apache.org/pinot/apache-pinot-0.12.1/apache-pinot-0.12.1-src.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://downloads.apache.org/pinot/apache-pinot-0.12.1/apache-pinot-0.12.1-src.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC
                                        </div>
                                    </a>

                                    <a href="https://downloads.apache.org/pinot/apache-pinot-0.12.1/apache-pinot-0.12.1-bin.tar.gz">
                                        <div className="panel--title">
                                            Binary download
                                        </div>
                                    </a>
                                    <a href="https://downloads.apache.org/pinot/apache-pinot-0.12.1/apache-pinot-0.12.1-bin.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://downloads.apache.org/pinot/apache-pinot-0.12.1/apache-pinot-0.12.1-bin.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC{" "}
                                        </div>
                                    </a>
                                </a>
                            </div>
                            <div className="col">
                                <a
                                    href="https://archive.apache.org/dist/pinot/apache-pinot-0.12.0/apache-pinot-0.12.0-bin.tar.gz"
                                    className="panel panel--link text--center"
                                >
                                    <div className="panel--icon">
                                        <i className="feather icon-download"></i>
                                    </div>

                                    <div className="panel--title">0.12.0</div>

                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.12.0/apache-pinot-0.12.0-src.tar.gz">
                                        <div className="panel--title">
                                            Official source release
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.12.0/apache-pinot-0.12.0-src.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.12.0/apache-pinot-0.12.0-src.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC
                                        </div>
                                    </a>

                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.12.0/apache-pinot-0.12.0-bin.tar.gz">
                                        <div className="panel--title">
                                            Binary download
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.12.0/apache-pinot-0.12.0-bin.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.12.0/apache-pinot-0.12.0-bin.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC{" "}
                                        </div>
                                    </a>
                                </a>
                            </div>
                            <div className="col">
                                <a
                                    href="https://archive.apache.org/dist/pinot/apache-pinot-0.11.0/apache-pinot-0.11.0-bin.tar.gz"
                                    className="panel panel--link text--center"
                                >
                                    <div className="panel--icon">
                                        <i className="feather icon-download"></i>
                                    </div>

                                    <div className="panel--title">0.11.0</div>

                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.11.0/apache-pinot-0.11.0-src.tar.gz">
                                        <div className="panel--title">
                                            Official source release
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.11.0/apache-pinot-0.11.0-src.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.11.0/apache-pinot-0.11.0-src.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC
                                        </div>
                                    </a>

                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.11.0/apache-pinot-0.11.0-bin.tar.gz">
                                        <div className="panel--title">
                                            Binary download
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.11.0/apache-pinot-0.11.0-bin.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.11.0/apache-pinot-0.11.0-bin.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC{" "}
                                        </div>
                                    </a>
                                </a>
                            </div>
                            <div className="col">
                                <a
                                    href="https://archive.apache.org/dist/pinot/apache-pinot-0.10.0/apache-pinot-0.10.0-bin.tar.gz"
                                    className="panel panel--link text--center"
                                >
                                    <div className="panel--icon">
                                        <i className="feather icon-download"></i>
                                    </div>

                                    <div className="panel--title">0.10.0</div>

                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.10.0/apache-pinot-0.10.0-src.tar.gz">
                                        <div className="panel--title">
                                            Official source release
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.10.0/apache-pinot-0.10.0-src.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.10.0/apache-pinot-0.10.0-src.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC
                                        </div>
                                    </a>

                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.10.0/apache-pinot-0.10.0-bin.tar.gz">
                                        <div className="panel--title">
                                            Binary download
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.10.0/apache-pinot-0.10.0-bin.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.10.0/apache-pinot-0.10.0-bin.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC{" "}
                                        </div>
                                    </a>
                                </a>
                            </div>
                            <div className="col">
                                <a
                                    href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.3/apache-pinot-0.9.3-bin.tar.gz"
                                    className="panel panel--link text--center"
                                >
                                    <div className="panel--icon">
                                        <i className="feather icon-download"></i>
                                    </div>

                                    <div className="panel--title">0.9.3</div>

                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.3/apache-pinot-0.9.3-src.tar.gz">
                                        <div className="panel--title">
                                            Official source release
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.3/apache-pinot-0.9.3-src.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.3/apache-pinot-0.9.3-src.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC
                                        </div>
                                    </a>

                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.3/apache-pinot-0.9.3-bin.tar.gz">
                                        <div className="panel--title">
                                            Binary download
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.3/apache-pinot-0.9.3-bin.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.3/apache-pinot-0.9.3-bin.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC{" "}
                                        </div>
                                    </a>
                                </a>
                            </div>
                            <div className="col">
                                <a
                                    href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.2/apache-pinot-0.9.2-bin.tar.gz"
                                    className="panel panel--link text--center"
                                >
                                    <div className="panel--icon">
                                        <i className="feather icon-download"></i>
                                    </div>

                                    <div className="panel--title">0.9.2</div>

                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.2/apache-pinot-0.9.2-src.tar.gz">
                                        <div className="panel--title">
                                            Official source release
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.2/apache-pinot-0.9.2-src.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.2/apache-pinot-0.9.2-src.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC
                                        </div>
                                    </a>

                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.2/apache-pinot-0.9.2-bin.tar.gz">
                                        <div className="panel--title">
                                            Binary download
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.2/apache-pinot-0.9.2-bin.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.2/apache-pinot-0.9.2-bin.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC{" "}
                                        </div>
                                    </a>
                                </a>
                            </div>
                            <div className="col">
                                <a
                                    href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.1/apache-pinot-0.9.1-bin.tar.gz"
                                    className="panel panel--link text--center"
                                >
                                    <div className="panel--icon">
                                        <i className="feather icon-download"></i>
                                    </div>

                                    <div className="panel--title">0.9.1</div>

                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.1/apache-pinot-0.9.1-src.tar.gz">
                                        <div className="panel--title">
                                            Official source release
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.1/apache-pinot-0.9.1-src.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.1/apache-pinot-0.9.1-src.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC
                                        </div>
                                    </a>

                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.1/apache-pinot-0.9.1-bin.tar.gz">
                                        <div className="panel--title">
                                            Binary download
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.1/apache-pinot-0.9.1-bin.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.1/apache-pinot-0.9.1-bin.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC{" "}
                                        </div>
                                    </a>
                                </a>
                            </div>
                            <div className="col">
                                <a
                                    href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.0/apache-pinot-0.9.0-bin.tar.gz"
                                    className="panel panel--link text--center"
                                >
                                    <div className="panel--icon">
                                        <i className="feather icon-download"></i>
                                    </div>

                                    <div className="panel--title">0.9.0</div>

                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.0/apache-pinot-0.9.0-src.tar.gz">
                                        <div className="panel--title">
                                            Official source release
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.0/apache-pinot-0.9.0-src.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.0/apache-pinot-0.9.0-src.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC
                                        </div>
                                    </a>

                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.0/apache-pinot-0.9.0-bin.tar.gz">
                                        <div className="panel--title">
                                            Binary download
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.0/apache-pinot-0.9.0-bin.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.9.0/apache-pinot-0.9.0-bin.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC{" "}
                                        </div>
                                    </a>
                                </a>
                            </div>
                            <div className="col">
                                <a
                                    href="https://archive.apache.org/dist/pinot/apache-pinot-0.8.0/apache-pinot-0.8.0-bin.tar.gz"
                                    className="panel panel--link text--center"
                                >
                                    <div className="panel--icon">
                                        <i className="feather icon-download"></i>
                                    </div>

                                    <div className="panel--title">0.8.0</div>

                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.8.0/apache-pinot-0.8.0-src.tar.gz">
                                        <div className="panel--title">
                                            Official source release
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.8.0/apache-pinot-0.8.0-src.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.8.0/apache-pinot-0.8.0-src.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC
                                        </div>
                                    </a>

                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.8.0/apache-pinot-0.8.0-bin.tar.gz">
                                        <div className="panel--title">
                                            Binary download
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.8.0/apache-pinot-0.8.0-bin.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/pinot/apache-pinot-0.8.0/apache-pinot-0.8.0-bin.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC{" "}
                                        </div>
                                    </a>
                                </a>
                            </div>
                            <div className="col">
                                <a
                                    href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.7.1/apache-pinot-incubating-0.7.1-bin.tar.gz"
                                    className="panel panel--link text--center"
                                >
                                    <div className="panel--icon">
                                        <i className="feather icon-download"></i>
                                    </div>

                                    <div className="panel--title">0.7.1</div>

                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.7.1/apache-pinot-incubating-0.7.1-src.tar.gz">
                                        <div className="panel--title">
                                            Official source release
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.7.1/apache-pinot-incubating-0.7.1-src.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.7.1/apache-pinot-incubating-0.7.1-src.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC
                                        </div>
                                    </a>

                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.7.1/apache-pinot-incubating-0.7.1-bin.tar.gz">
                                        <div className="panel--title">
                                            Binary download
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.7.1/apache-pinot-incubating-0.7.1-bin.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.7.1/apache-pinot-incubating-0.7.1-bin.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC{" "}
                                        </div>
                                    </a>
                                </a>
                            </div>
                            <div className="col">
                                <a
                                    href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.6.0/apache-pinot-incubating-0.6.0-bin.tar.gz"
                                    className="panel panel--link text--center"
                                >
                                    <div className="panel--icon">
                                        <i className="feather icon-download"></i>
                                    </div>

                                    <div className="panel--title">0.6.0</div>

                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.6.0/apache-pinot-incubating-0.6.0-src.tar.gz">
                                        <div className="panel--title">
                                            Official source release
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.6.0/apache-pinot-incubating-0.6.0-src.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.6.0/apache-pinot-incubating-0.6.0-src.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC
                                        </div>
                                    </a>

                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.6.0/apache-pinot-incubating-0.6.0-bin.tar.gz">
                                        <div className="panel--title">
                                            Binary download
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.6.0/apache-pinot-incubating-0.6.0-bin.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.6.0/apache-pinot-incubating-0.6.0-bin.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC{" "}
                                        </div>
                                    </a>
                                </a>
                            </div>
                            <div className="col">
                                <a
                                    href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.5.0/apache-pinot-incubating-0.5.0-bin.tar.gz"
                                    className="panel panel--link text--center"
                                >
                                    <div className="panel--icon">
                                        <i className="feather icon-download"></i>
                                    </div>

                                    <div className="panel--title">0.5.0</div>

                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.5.0/apache-pinot-incubating-0.5.0-src.tar.gz">
                                        <div className="panel--title">
                                            Official source release
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.5.0/apache-pinot-incubating-0.5.0-src.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.5.0/apache-pinot-incubating-0.5.0-src.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC
                                        </div>
                                    </a>

                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.5.0/apache-pinot-incubating-0.5.0-bin.tar.gz">
                                        <div className="panel--title">
                                            Binary download
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.5.0/apache-pinot-incubating-0.5.0-bin.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.5.0/apache-pinot-incubating-0.5.0-bin.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC{" "}
                                        </div>
                                    </a>
                                </a>
                            </div>
                            <div className="col">
                                <a
                                    href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.4.0/apache-pinot-incubating-0.4.0-bin.tar.gz"
                                    className="panel panel--link text--center"
                                >
                                    <div className="panel--icon">
                                        <i className="feather icon-download"></i>
                                    </div>

                                    <div className="panel--title">0.4.0</div>

                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.4.0/apache-pinot-incubating-0.4.0-src.tar.gz">
                                        <div className="panel--title">
                                            Official source release
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.4.0/apache-pinot-incubating-0.4.0-src.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.4.0/apache-pinot-incubating-0.4.0-src.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC
                                        </div>
                                    </a>

                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.4.0/apache-pinot-incubating-0.4.0-bin.tar.gz">
                                        <div className="panel--title">
                                            Binary download
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.4.0/apache-pinot-incubating-0.4.0-bin.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.4.0/apache-pinot-incubating-0.4.0-bin.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC{" "}
                                        </div>
                                    </a>
                                </a>
                            </div>

                            <div className="col">
                                <a
                                    href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.3.0/apache-pinot-incubating-0.3.0-bin.tar.gz"
                                    className="panel panel--link text--center"
                                >
                                    <div className="panel--icon">
                                        <i className="feather icon-download"></i>
                                    </div>

                                    <div className="panel--title">0.3.0</div>

                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.3.0/apache-pinot-incubating-0.3.0-src.tar.gz">
                                        <div className="panel--title">
                                            Official source release
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.3.0/apache-pinot-incubating-0.3.0-src.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.3.0/apache-pinot-incubating-0.3.0-src.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC
                                        </div>
                                    </a>

                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.3.0/apache-pinot-incubating-0.3.0-bin.tar.gz">
                                        <div className="panel--title">
                                            Binary download
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.3.0/apache-pinot-incubating-0.3.0-bin.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.3.0/apache-pinot-incubating-0.3.0-bin.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC{" "}
                                        </div>
                                    </a>
                                </a>
                            </div>

                            <div className="col">
                                <a
                                    href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.2.0/apache-pinot-incubating-0.2.0-bin.tar.gz"
                                    className="panel panel--link text--center"
                                >
                                    <div className="panel--icon">
                                        <i className="feather icon-download"></i>
                                    </div>

                                    <div className="panel--title">0.2.0</div>

                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.2.0/apache-pinot-incubating-0.2.0-src.tar.gz">
                                        <div className="panel--title">
                                            Official source release
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.2.0/apache-pinot-incubating-0.2.0-src.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.2.0/apache-pinot-incubating-0.2.0-src.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC
                                        </div>
                                    </a>

                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.2.0/apache-pinot-incubating-0.2.0-bin.tar.gz">
                                        <div className="panel--title">
                                            Binary download
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.2.0/apache-pinot-incubating-0.2.0-bin.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.2.0/apache-pinot-incubating-0.2.0-bin.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC{" "}
                                        </div>
                                    </a>
                                </a>
                            </div>

                            <div className="col">
                                <a
                                    href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.1.0/apache-pinot-incubating-0.1.0-bin.tar.gz"
                                    className="panel panel--link text--center"
                                >
                                    <div className="panel--icon">
                                        <i className="feather icon-download"></i>
                                    </div>

                                    <div className="panel--title">0.1.0</div>

                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.1.0/apache-pinot-incubating-0.1.0-src.tar.gz">
                                        <div className="panel--title">
                                            Official source release
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.1.0/apache-pinot-incubating-0.1.0-src.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.1.0/apache-pinot-incubating-0.1.0-src.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC
                                        </div>
                                    </a>

                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.1.0/apache-pinot-incubating-0.1.0-bin.tar.gz">
                                        <div className="panel--title">
                                            Binary download
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.1.0/apache-pinot-incubating-0.1.0-bin.tar.gz.sha512">
                                        <div className="panel--subtitle">
                                            SHA512
                                        </div>
                                    </a>
                                    <a href="https://archive.apache.org/dist/incubator/pinot/apache-pinot-incubating-0.1.0/apache-pinot-incubating-0.1.0-bin.tar.gz.asc">
                                        <div className="panel--subtitle">
                                            ASC
                                        </div>
                                    </a>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export default Download;
