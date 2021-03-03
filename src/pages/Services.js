import React, { useState } from 'react';

import Header from '../components/Header';
import HeaderDesktop from '../components/HeaderDesktop';
import Timeline from '../components/Timeline';
import Certified from '../components/Certified';
import Footer from '../components/Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Midias from './Midias'
import Inbound from './Inbound'
import Tecnologias from './Tecnologias';
import './styles.css'


function Services() {
  /*
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  */

  return (
    <div>
      <Header/>

      <HeaderDesktop/>

      <BrowserRouter>
        <Switch>
            <Route path="/services/midias" component={Midias} />
            <Route path="/services/inbound" component={Inbound} />
            <Route path="/services/tecnologias" component={Tecnologias} />
        </Switch>
      </ BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default Services;