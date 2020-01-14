import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppNav from './component/nav/AppNav'
import Slider from './component/slider/Slider'
import HeroTitle from './component/hero_title/HeroTitle'
import Gallery from './component/gallery/Gallery'

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
      <AppNav/>
      <Slider/>
      <HeroTitle/>
      <Gallery/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" class="btn btn-primary">Primary</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
