import React, { useState } from 'react';

import Header from './components/Header';
import HeaderDesktop from './components/HeaderDesktop';
import Timeline from './components/Timeline';
import Certified from './components/Certified';
import Footer from './components/Footer';

function Services() {
  /*
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  */

  return (
    <div>
      <Header></Header>
      <HeaderDesktop></HeaderDesktop>
      <Footer></Footer>
    </div>
  );
}

export default Services;