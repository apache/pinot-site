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

import styles from "./who_uses.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function WhoUses() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    return (
        <Layout title="Who Uses" description="Collection of success stories and Companies using Pinot">
            <header className="hero">
                <div className="container container--fluid">
                    <h1>Download</h1>
                    <div className="hero--subtitle">
                    Collection of success stories and Companies using Pinot
                    </div>
                </div>
            </header>

            <main>
                <section>
                    <div>
                        <div>
                            <img
                            alt="Uber"
                            height={360}
                            src="/img/uber.png"
                            width={640}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export default WhoUses;
