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

import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import SVG from "react-inlinesvg";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useThemeContext from "@docusaurus/theme-common";

import styles from "./index.module.css";
import "./index.css";

import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const companiesData = require(`../data/companies-data.js`);
const companiesList = companiesData.getCompaniesList();


function WhoUsesPinot() {
    return (
        <section className="topologies">
            <div className="container">

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
        </section>
    );
}

const CompanyLogo = ({srcLight, srcDark, title, description}) => {
    const { isDarkTheme } = useThemeContext();

    return (
        <SVG src={isDarkTheme ? srcDark : srcLight} title={title} description={description} />
    )
}

function WhoUses() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    return (
        <Layout title="Who Uses Apache Pinot" description="Collection of Companies using Apache Pinot">
            <header
                className={"hero"}
            >
                <div className="container">
                    <h1 className="hero__title">Who Uses Apache Pinot</h1>
                    <p className="hero__subtitle">
                        Apache Pinot powers a wide variety of real time analytical use cases across several big players, including LinkedIn, Uber, Walmart, WePay, Factual, Weibo and more.
                    </p>
                </div>
            </header>
            <main>
                <WhoUsesPinot />

                {/* TODO add Company quotes */}
            </main>
        </Layout>
    );
}

export default WhoUses;
