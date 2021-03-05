import React, { useState } from 'react';

import Header from '../../components/Header';
import HeaderDesktop from '../../components/HeaderDesktop';
import Timeline from '../../components/Timeline';
import Certified from '../../components/Certified';
import Footer from '../../components/Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Midias from '../Midias/PageMidias'
import Inbound from '../Inbound/PageInbound'
import Tecnologias from '../Tecnologias/PageTech';
import CRO from '../CRO/PageCro';
import SEO from '../SEO/PageSeo';
import Design from '../Design/PageDesign';
import SocialMedia from '../Social/PageSocialMedia';
import Conteudo from '../Conteudo/PageConteudo';
import Home from '../Home/PageServicesHome';
import WebDev from '../WebDev/PageWebDev';
import WebAnalytics from '../WebAnalytics/PageWebAnalytics';
import '../pageStyles.css'



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
            <Route path="/services/home" component={Home} />
            <Route path="/services/inbound" component={Inbound} />
            <Route path="/services/seo" component={SEO} />
            <Route path="/services/cro" component={CRO} />
            <Route path="/services/design" exact={true} component={Design} />
            <Route path="/services/social" exact={true} component={SocialMedia} />
            <Route path="/services/conteudo" exact={true} component={Conteudo} />
            <Route path="/services/webdev" component={WebDev} />
            <Route path="/services/webanalytics" component={WebAnalytics} />
        </Switch>
      </ BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default Services;