import React from 'react';
import Slider from '../slider/Slider'
import HeroTitle from '../hero_title/HeroTitle'
import Gallery from '../gallery/Gallery'
import MiniCard from '../card/MiniCard'
import Section from '../section/Section'
import VideoSlide from '../videoSlide/VideoSlider'
import Banner from '../banner/Banner'
import FlexGrid from '../grid/FlexGrid'
import {slide1_caption, slide2_caption, slide3_caption} from '../theme/text'
import Color from '../theme/color'

var sectionInput1 = {
  id: 1,
  title: "林氏傳統凍頂烏龍茶",
  subtitle: "在瞬息萬變的現代 傳承百年的好味道",
  paragraph: `製茶過程獨特之處在於：
  凍頂烏龍茶的採制工藝十分講究，採摘青心烏龍等良種芽葉，經曬青、涼青、浪青、炒青、揉捻、初烘、多次反復的團揉(包揉)、復烘、再焙火而製成。
  尤其茶葉烘乾後需再重複以布包成球狀揉捻茶葉，使其成半發酵、半球狀，稱為「布揉製茶」或「熱團揉」。揉捻後，茶葉帶有隱隱金黃色。`,
  img: 'http://localhost:5000/img/hill1.jpg',
  is_reverse: true
};
var sectionInput2 = {
  id: 2,
  title: "曬青、涼青",
  subtitle: "在瞬息萬變的現代 傳承百年的好味道",
  paragraph: `製茶過程獨特之處在於：
  凍頂烏龍茶的採制工藝十分講究，採摘青心烏龍等良種芽葉，經曬青、涼青、浪青、炒青、揉捻、初烘、多次反復的團揉(包揉)、復烘、再焙火而製成`,
  img: 'http://localhost:5000/img/tea_tree.jpg',
  is_reverse: false
};
var sectionInput3 = {
  id: 3,
  title: "揉捻、初烘",
  subtitle: "在瞬息萬變的現代 傳承百年的好味道",
  paragraph: `製茶過程獨特之處在於：
  凍頂烏龍茶的採制工藝十分講究，採摘青心烏龍等良種芽葉，經曬青、涼青、浪青、炒青、揉捻、初烘、多次反復的團揉(包揉)、復烘、再焙火而製成。
  尤其茶葉烘乾後需再重複以布包成球狀揉捻茶葉，使其成半發酵、半球狀，稱為「布揉製茶」或「熱團揉」。揉捻後，茶葉帶有隱隱金黃色。`,
  img: 'http://localhost:5000/img/tea.jpg',
  is_reverse: true
};
var sectionInput4 = {
  title: "團揉、復烘、焙火",
  subtitle: "在瞬息萬變的現代 傳承百年的好味道",
  paragraph: `林氏傳統古典凍頂烏龍茶」，歷經無數次高低起伏的炭火淬煉焙製，冰火輪迴、起伏滋味，門外兵馬、壺中水沸。烘焙過程中，稍有閃失，不是炭焦味，就是失去好茶韻味，可謂舉棋，起手無回。其迭有層次的風韻，把杯，無酒也醉，足可讓您拋開人生成敗起伏，休兵楚河漢界。`,
  img: 'http://localhost:5000/img/tea.jpg',
  is_reverse: false
};
var sectionList = [sectionInput1, sectionInput2, sectionInput3, sectionInput4]
var content = []

const sliderInput = [{
  id: 1,
  media: "http://localhost:5000/video/tea_farmer.mp4",
  caption_title: slide2_caption,
  caption_subtitle: slide2_caption,
  link: "http://localhost:5000/video/tea_farmer.mp4"
},
{
  id: 2,
  media: "http://localhost:5000/img/hill1.jpg",
  caption_title: slide1_caption,
  caption_subtitle: slide1_caption
},
{
  id: 3,
  media: "http://localhost:5000/img/tea.jpg",
  caption_title: slide3_caption,
  caption_subtitle: slide3_caption
}];

const certi = [
  <MiniCard uuid={1} background={"url(http://localhost:5000/img/hill2.jpg)"} head={<h1 style={{color: Color.white, letterSpacing: "0.3rem", marginRight: "4rem"}}>SGS</h1>} title={<h5 style={{color: Color.white}}>檢驗合格</h5>} min_width={"10rem"} mask={"rgba(0, 0, 0, 0.3)"}/>,
  <MiniCard uuid={2} background={"url(http://localhost:5000/img/hill1.jpg)"} head={<h1 style={{color: Color.white, letterSpacing: "0.3rem"}}>產地認證</h1>} title={<h5 style={{color: Color.white}}>鹿谷鄉公所</h5>} min_width={"10rem"} mask={"rgba(0, 0, 0, 0.3)"}/>,
  <MiniCard uuid={3} background={"url(http://localhost:5000/img/tea.jpg)"} head={<h1 style={{color: Color.white, letterSpacing: "0.3rem"}}>農殘檢驗</h1>} title={<h5 style={{color: Color.white}}>清大實驗室</h5>} min_width={"10rem"} mask={"rgba(0, 0, 0, 0.3)"}/>,
]

function FarmerPage() {
  for(let i=0; i<sectionList.length; i++){
    // sectionList[i].is_reverse = (i%2 == 1? true : false);
    // console.log(sectionList[i].is_reverse)
    // sectionInput.is_reverse = !sectionInput.is_reverse
    content.push(
      <Section id={sectionList[i].id} title={sectionList[i].title} subtitle={sectionList[i].subtitle} paragraph={sectionList[i].paragraph} img={sectionList[i].img} is_reverse={sectionList[i].is_reverse} />
    )
    // console.log(sectionList[i].is_reverse)
  }
  return (
    <div>
      <Slider sliderInput = {sliderInput} is_show_indicator = {true} is_show_control = {true}/>
      <Banner/>
      <HeroTitle title="林氏傳統凍頂烏龍茶" paragraph="百年來，即使站在時代改變口味的交鋒上，仍然堅持住最古老的味道"/>
      {content}
      <HeroTitle title={"檢驗認證"} paragraph={"我們只給你最好的"}/>
      <div style={{marginRight: "2rem", marginLeft: "2rem"}}>
        <FlexGrid items={certi} justify_content={"left"}/>
      </div>
    </div>
  );
}

export default FarmerPage;
