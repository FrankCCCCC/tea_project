import React from 'react';
import {font_style, title_style, subtitle_style, paragraph_style} from '../theme/font';
import Gallery from '../gallery/Gallery'
import Card from '../card/Card'
import Carousel from '../carousel/Carousel'
import {ButtonPillarBlueDark} from '../button/Button'
import {cartAddItem, cartGetState} from '../redux/action'
import './Section.css';
import Color from '../theme/color'
// const sectionInput = {
//     title: "林氏傳統凍頂烏龍茶",
//     subtitle: "在瞬息萬變的現代 傳承百年的好味道",
//     paragraph: `製茶過程獨特之處在於：
//     凍頂烏龍茶的採制工藝十分講究，採摘青心烏龍等良種芽葉，經曬青、涼青、浪青、炒青、揉捻、初烘、多次反復的團揉(包揉)、復烘、再焙火而製成。
//     尤其茶葉烘乾後需再重複以布包成球狀揉捻茶葉，使其成半發酵、半球狀，稱為「布揉製茶」或「熱團揉」。揉捻後，茶葉帶有隱隱金黃色。
//     傳統古典凍頂烏龍茶帶明顯焙火味。
     
//     最優秀的凍頂烏龍茶又稱鳳茶，為當地存放十年以上的好茶，在古時最尊貴富人家婚禮上奉獻給父母喝！以表尊敬與地位上的尊貴。
     
//     「林氏傳統古典凍頂烏龍茶」，歷經無數次高低起伏的炭火淬煉焙製，冰火輪迴、起伏滋味，門外兵馬、壺中水沸。烘焙過程中，稍有閃失，不是炭焦味，就是失去好茶韻味，可謂舉棋，起手無回。其迭有層次的風韻，把杯，無酒也醉，足可讓您拋開人生成敗起伏，休兵楚河漢界。`,
//     img: 'http://192.168.43.203:5000/img/farmer2.jpg',
//     is_reverse: true
// };

// var props = {
//     sectionInput: sectionInput
// };



class Section extends React.Component{
    constructor(props) {
        super(props);
        this.handleBuyClick = this.handleBuyClick.bind(this);
    }

    handleBuyClick(){
        console.log(cartGetState())
        cartAddItem(2, "http://localhost:5000/img/hill2.jpg", "綠蟬招牌紅茶", 2, 350)
        console.log(cartGetState())
    }

    render(){
        let classVar = `row ${this.props.is_reverse? "flex-row-reverse" : "flex-row"} align-items-center`;

        let button = (
            <button class="btn" onClick={this.handleBuyClick} style={{fontFamily: font_style.fontFamily, fontSize: "1rem" , width: "7rem", color: "white",backgroundColor: Color.blueDark, borderRadius: "20px"}}>加入購物車</button>
        )
        let data = (
            <div style={{color: "grey", fontFamily: font_style.fontFamily, fontWeight: "bold"}}>
                <div class="d-flex justify-content-left align-content-center flex-wrap mb-3">
                    {/* <div style={{textAlign: "center"}}> */}
                        {/* <h4 style={{fontWeight: "bold"}}>發酵溫度</h4>
                        <h1 style={{color: Color.greenDark, fontSize: '3rem'}}>26.3<span style={{fontSize: '2rem'}}>度</span></h1> */}
                        <Card head={<h1 style={{color: Color.white}}>26.3</h1>} title={<h4 style={{fontWeight: "bold", color: Color.white}}>發酵溫度</h4>} background={Color.greenDark} horizontal_align={"center"}/>
                    {/* </div> */}
                    {/* <div style={{textAlign: "center" }}> */}
                        {/* <h4 style={{fontWeight: "bold"}}>發酵濕度</h4>
                        <h1 style={{color: Color.greenDark, fontSize: '3rem'}}>63<span style={{fontSize: '2rem'}}>%</span></h1> */}
                        <Card head={<h1 style={{color: Color.yellowHightLight}}>63%</h1>} title={<h4 style={{fontWeight: "bold", color: Color.white}}>發酵濕度</h4>} background={Color.greenDark} horizontal_align={"center"}/>
                    {/* </div> */}
                </div>
            </div>
        )

        return(
            <div>
                <div class={classVar} style={{height:"100%"}}>
                    <div class="col-lg-6" style={{textAlign: "center", verticalAlign: "middle", padding: ""}}>
                        <div style={{textAlign: "left", color: "grey", padding: "3rem"}}>
                            <h3 style={{marginBottom: "0rem", fontFamily: font_style.fontFamily, fontWeight: "bold"}}>{this.props.title}</h3>
                            <div style={{marginBottom: "1rem", height: "0.2rem", width: "5rem", backgroundColor: Color.greenDark}}></div>
                                <h5 style={{marginBottom: "0.3rem", fontFamily: font_style.fontFamily}}>{this.props.subtitle}</h5>
                                <p style={{fontFamily: font_style.fontFamily, fontSize: "1rem"}}>{this.props.paragraph}</p>
                            <div>
                                {this.props.id == 1? button:data}
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-lg-6" style={{height: "100%", padding: 0}}>
                        {/* <div class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active section" style={{backgroundImage: "url("+ this.props.img +")", width: "100%"}}>
                                </div>
                            </div>
                        </div> */}
                        <div style={{width: "90%"}}>
                            <Gallery id={this.props.id} img={this.props.img}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    
}

export default Section;