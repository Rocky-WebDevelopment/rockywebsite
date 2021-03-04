import React, { useState } from 'react';

import Header from '../components/Header';
import HeaderDesktop from '../components/HeaderDesktop';
import Timeline from '../components/Timeline';
import Certified from '../components/Certified';
import Footer from '../components/Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Midias from './PageMidias'
import Inbound from './PageInbound'
import Tecnologias from './PageTech';
import CRO from './PageCro'
import SEO from './PageSeo'

import WebDev from './PageWebDev'
import WebAnalytics from './PageWebAnalytics'
import './pageStyles.css'



function Services() {
  /*
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  */

  return (
    <div>
      <Header/>

      {/* <HeaderDesktop/> */}

      <BrowserRouter>
        <Switch>
            <Route path="/services/midias" component={Midias} />
            <Route path="/services/inbound" component={Inbound} />
            <Route path="/services/seo" component={SEO} />
            <Route path="/services/cro" component={CRO} />
            <Route path="/services/tecnologias" component={Tecnologias} />
            <Route path="/services/webdev" component={WebDev} />
            <Route path="/services/webanalytics" component={WebAnalytics} />

        </Switch>
      </ BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default Services;