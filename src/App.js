import React, { useState } from 'react';

import Header from './components/Header';
import HeaderDesktop from './components/HeaderDesktop';
import CarouselClient from './components/CarouselClient';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Certified from './components/Certified';
import Footer from './components/Footer';
import Forms from './components/Forms';
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
      <CarouselClient></CarouselClient>
      <Timeline></Timeline>
      <Services></Services>
      <Certified></Certified>
      <Forms></Forms>
      <Footer></Footer>
    </div>
  );
}

export default App;
