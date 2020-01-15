import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom'

import leafhopper_logo from '../img/leafhopper_logo.png';
import Slider from '../slider/Slider'
import HeroTitle from '../hero_title/HeroTitle'
import Gallery from '../gallery/Gallery'
import Footer from '../footer/Footer'
import Post from '../post/Post'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {slide1_caption, slide2_caption, slide3_caption} from '../theme/text';
import slide_pic1 from '../img/slide_pic1.jpg';
import slide_pic2 from '../img/slide_pic2.jpg';
import slide_pic3 from '../img/slide_pic3.jpg';

function App() {
  AOS.init({
    duration: 2000,
  });
  
  return (
    <div className="App">
      <Slider slide_pics = {[slide_pic1, slide_pic2, slide_pic3]} slide_caption_titles = {[slide1_caption, slide2_caption, slide3_caption]} slide_caption_subtitles = {[slide1_caption, slide2_caption, slide3_caption]} is_show_indicator = {true} is_show_control = {true}/>
      <Post/>
      <HeroTitle/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
