import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import AppNav from '../nav/AppNav'
import Slider from '../slider/Slider'
import HeroTitle from '../hero_title/HeroTitle'
import Gallery from '../gallery/Gallery'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  AOS.init({
    duration: 2000,
  });
  return (
    <div className="App">
      {/* <AppNav/> */}
      {/* <Slider/> */}
      {/* <HeroTitle/> */}
      <Gallery/>
    </div>
  );
}

export default App;
