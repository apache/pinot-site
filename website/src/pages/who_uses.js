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
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import SwiftSlider from 'react-swift-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import ReactPlayer from "react-player/youtube";
import styled from 'styled-components'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const AnchoredH1 = Heading("h1");
const AnchoredH2 = Heading("h2");

const companiesData = require(`../data/companies-data.js`);
const companiesList = companiesData.getCompaniesList();


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
            <header className="hero">
                <div className="container container--fluid">
                    <AnchoredH1>Who Uses Apache Pinot</AnchoredH1>
                    <div className="hero--subtitle">
                    Collection of stories from Companies using Apache Pinot
                    </div>
                </div>
            </header>
            <main>
            <WhoUsesPinot />

            {/* TODO Add Company quotes */}

            </main>
        </Layout>
    );
}

export default WhoUses;
