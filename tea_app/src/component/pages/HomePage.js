import React from 'react';

import Slider from '../slider/Slider'
import HeroTitle from '../hero_title/HeroTitle'
import Gallery from '../gallery/Gallery'
import Banner from '../banner/Banner'
import Carousel from '../carousel/Carousel'

import {slide1_caption, slide2_caption, slide3_caption, hero_title_home, hero_paragraph_home} from '../theme/text';

const sliderInput = [{
  id: 1,
  media: "http://192.168.43.203:5000/video/tea_farmer.mp4",
  caption_title: slide2_caption,
  caption_subtitle: slide2_caption,
  link: "http://192.168.43.203:5000/video/tea_farmer.mp4"
},
{
  id: 2,
  media: "http://192.168.43.203:5000/img/hill1.jpg",
  caption_title: slide1_caption,
  caption_subtitle: slide1_caption
},
{
  id: 3,
  media: "http://192.168.43.203:5000/img/tea.jpg",
  caption_title: slide3_caption,
  caption_subtitle: slide3_caption
}];

const galleryInput = [{
  img: "http://192.168.43.203:5000/img/farmer1.jpg",
  caption_title: "陳朝鳳",
  caption_subtitle: "鹿谷 凍頂",
  id: 1
},
{
  img: "http://192.168.43.203:5000/img/farmer2.jpg",
  caption_title: "張大春",
  caption_subtitle: "鹿谷 鳳凰",
  id: 2
},
{
  img: "http://192.168.43.203:5000/img/farmer3.jpg",
  caption_title: "林大宇",
  caption_subtitle: "鹿谷 鳳凰",
  id: 3
},
{
  img: "http://192.168.43.203:5000/img/farmer4.jpg",
  caption_title: "林大宇",
  caption_subtitle: "鹿谷 鳳凰",
  id: 1
},
{
  img: "http://192.168.43.203:5000/img/tea_tree.jpg",
  caption_title: "林大宇",
  caption_subtitle: "鹿谷 鳳凰",
  id: 1
},
{
  img: "http://192.168.43.203:5000/img/child.jpg",
  caption_title: "林大宇",
  caption_subtitle: "鹿谷 鳳凰",
  id: 1
},
{
  img: "http://192.168.43.203:5000/img/farmer7.jpg",
  caption_title: "林大宇",
  caption_subtitle: "鹿谷 鳳凰",
  id: 1
}]

function HomePage() {
  return (
    <div>
      <Slider sliderInput = {sliderInput} is_show_indicator = {true} is_show_control = {true}/>
      {/* <Carousel carouselInput = {sliderInput} is_show_indicator = {true} is_show_control = {true}/> */}
      <Banner/>
      <HeroTitle title={hero_title_home} paragraph={hero_paragraph_home}/>
      <div class="container">
        <Gallery galleryInput={galleryInput} route="farmer"/>
      </div>
    </div>
  );
}

export default HomePage;
