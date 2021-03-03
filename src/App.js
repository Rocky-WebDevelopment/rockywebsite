import React, { useState } from 'react';

import Header from './components/Header';
import HeaderDesktop from './components/HeaderDesktop';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Certified from './components/Certified';
import Footer from './components/Footer';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
function App() {
  /*
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  */

  return (
    <div>
      <Header></Header>
      <HeaderDesktop></HeaderDesktop>
      <Timeline></Timeline>
      <Services></Services>
      <Certified></Certified>
      <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/services/midias'} className="nav-link">Services</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
      <Footer></Footer>
    </div>
  );
}

export default App;
