import React, { useState } from 'react';

import Header from './components/Header';
import Carousel from './components/Carousel';
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
      <Carousel></Carousel>
      <Timeline></Timeline>
      <Certified></Certified>
      <Footer></Footer>
    </div>
  );
}

export default Services;