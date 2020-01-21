import React from 'react';
import AppNav from '../nav/AppNav'
import Slider from '../slider/Slider'
import HeroTitle from '../hero_title/HeroTitle'
import Gallery from '../gallery/Gallery'
import Section from '../section/Section'

var sectionInput1 = {
  title: "林氏傳統凍頂烏龍茶",
  subtitle: "在瞬息萬變的現代 傳承百年的好味道",
  paragraph: `製茶過程獨特之處在於：
  凍頂烏龍茶的採制工藝十分講究，採摘青心烏龍等良種芽葉，經曬青、涼青、浪青、炒青、揉捻、初烘、多次反復的團揉(包揉)、復烘、再焙火而製成。
  尤其茶葉烘乾後需再重複以布包成球狀揉捻茶葉，使其成半發酵、半球狀，稱為「布揉製茶」或「熱團揉」。揉捻後，茶葉帶有隱隱金黃色。
  傳統古典凍頂烏龍茶帶明顯焙火味。
   
  最優秀的凍頂烏龍茶又稱鳳茶，為當地存放十年以上的好茶，在古時最尊貴富人家婚禮上奉獻給父母喝！以表尊敬與地位上的尊貴。
   
  「林氏傳統古典凍頂烏龍茶」，歷經無數次高低起伏的炭火淬煉焙製，冰火輪迴、起伏滋味，門外兵馬、壺中水沸。烘焙過程中，稍有閃失，不是炭焦味，就是失去好茶韻味，可謂舉棋，起手無回。其迭有層次的風韻，把杯，無酒也醉，足可讓您拋開人生成敗起伏，休兵楚河漢界。`,
  img: 'http://192.168.43.203:5000/img/farmer2.jpg',
  is_reverse: true
};
var sectionInput2 = {
  title: "林氏傳統凍頂烏龍茶",
  subtitle: "在瞬息萬變的現代 傳承百年的好味道",
  paragraph: `製茶過程獨特之處在於：
  凍頂烏龍茶的採制工藝十分講究，採摘青心烏龍等良種芽葉，經曬青、涼青、浪青、炒青、揉捻、初烘、多次反復的團揉(包揉)、復烘、再焙火而製成。
  尤其茶葉烘乾後需再重複以布包成球狀揉捻茶葉，使其成半發酵、半球狀，稱為「布揉製茶」或「熱團揉」。揉捻後，茶葉帶有隱隱金黃色。
  傳統古典凍頂烏龍茶帶明顯焙火味。
   
  最優秀的凍頂烏龍茶又稱鳳茶，為當地存放十年以上的好茶，在古時最尊貴富人家婚禮上奉獻給父母喝！以表尊敬與地位上的尊貴。
   
  「林氏傳統古典凍頂烏龍茶」，歷經無數次高低起伏的炭火淬煉焙製，冰火輪迴、起伏滋味，門外兵馬、壺中水沸。烘焙過程中，稍有閃失，不是炭焦味，就是失去好茶韻味，可謂舉棋，起手無回。其迭有層次的風韻，把杯，無酒也醉，足可讓您拋開人生成敗起伏，休兵楚河漢界。`,
  img: 'http://192.168.43.203:5000/img/farmer2.jpg',
  is_reverse: false
};
var sectionInput3 = {
  title: "林氏傳統凍頂烏龍茶",
  subtitle: "在瞬息萬變的現代 傳承百年的好味道",
  paragraph: `製茶過程獨特之處在於：
  凍頂烏龍茶的採制工藝十分講究，採摘青心烏龍等良種芽葉，經曬青、涼青、浪青、炒青、揉捻、初烘、多次反復的團揉(包揉)、復烘、再焙火而製成。
  尤其茶葉烘乾後需再重複以布包成球狀揉捻茶葉，使其成半發酵、半球狀，稱為「布揉製茶」或「熱團揉」。揉捻後，茶葉帶有隱隱金黃色。
  傳統古典凍頂烏龍茶帶明顯焙火味。
   
  最優秀的凍頂烏龍茶又稱鳳茶，為當地存放十年以上的好茶，在古時最尊貴富人家婚禮上奉獻給父母喝！以表尊敬與地位上的尊貴。
   
  「林氏傳統古典凍頂烏龍茶」，歷經無數次高低起伏的炭火淬煉焙製，冰火輪迴、起伏滋味，門外兵馬、壺中水沸。烘焙過程中，稍有閃失，不是炭焦味，就是失去好茶韻味，可謂舉棋，起手無回。其迭有層次的風韻，把杯，無酒也醉，足可讓您拋開人生成敗起伏，休兵楚河漢界。`,
  img: 'http://192.168.43.203:5000/img/farmer2.jpg',
  is_reverse: true
};
var sectionList = [sectionInput1, sectionInput2, sectionInput3]
var content = []
function FarmerPage() {
  for(let i=0; i<sectionList.length; i++){
    // sectionList[i].is_reverse = (i%2 == 1? true : false);
    // console.log(sectionList[i].is_reverse)
    // sectionInput.is_reverse = !sectionInput.is_reverse
    content.push(
      <Section sectionInput={sectionList[i]}/>
    )
    console.log(sectionList[i].is_reverse)
  }
  return (
    <div>
      {content}
    </div>
  );
}

export default FarmerPage;
