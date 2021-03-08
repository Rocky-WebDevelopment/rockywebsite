import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HeaderDesktop from '../../components/HeaderDesktop/index';
import Midias from '../Midias/PageMidias'
import Inbound from '../Inbound/PageInbound'
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


  return (
    <div>
      <Header/>

      <HeaderDesktop/>

      <BrowserRouter>
        <Switch>
            <Route exact path="/services" component={Home} />
            <Route path="/services/midias" component={Midias} />

            <Route path="/services/home" component={Home} />
            <Route exact path="/services/inbound" component={Inbound} />
            <Route path="/services/inbound/seo" component={SEO} />
            <Route path="/services/inbound/cro" component={CRO} />
            <Route path="/services/inbound/design" exact={true} component={Design} />
            <Route path="/services/inbound/social" exact={true} component={SocialMedia} />
            <Route path="/services/inbound/conteudo" exact={true} component={Conteudo} />
            <Route path="/services/tecnologias/webdev" component={WebDev} />
            <Route path="/services/tecnologias/webanalytics" component={WebAnalytics} />
    
        </Switch>
      </ BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default Services;