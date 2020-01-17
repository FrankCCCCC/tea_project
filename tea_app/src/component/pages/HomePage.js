import React from 'react';

import Slider from '../slider/Slider'
import HeroTitle from '../hero_title/HeroTitle'
import Gallery from '../gallery/Gallery'
import Post from '../post/Post'

import {slide1_caption, slide2_caption, slide3_caption} from '../theme/text';
import slide_pic1 from '../img/slide_pic1.jpg';
import slide_pic2 from '../img/slide_pic2.jpg';
import slide_pic3 from '../img/slide_pic3.jpg';

function HomePage() {
  return (
    <div>
      <Slider slide_pics = {[slide_pic1, slide_pic2, slide_pic3]} slide_caption_titles = {[slide1_caption, slide2_caption, slide3_caption]} slide_caption_subtitles = {[slide1_caption, slide2_caption, slide3_caption]} is_show_indicator = {true} is_show_control = {true}/>
      {/* <div class="float-left">Float left on all viewport sizes</div><br></br> */}
      {/* <Post/> */}
      <HeroTitle/>
      <Gallery/>
    </div>
  );
}

export default HomePage;
