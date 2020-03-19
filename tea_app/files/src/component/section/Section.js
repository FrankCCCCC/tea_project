import React from 'react';
import {font_style, title_style, subtitle_style, paragraph_style} from '../theme/font';
import Gallery from '../gallery/Gallery'
import MiniCard from '../card/MiniCard'
import FlexGrid from '../grid/FlexGrid'
import Carousel from '../carousel/Carousel'
import Content from '../content/Content'
import {ButtonPillarBlueDark} from '../button/Button'
import {cartAddItem, cartGetState} from '../redux/action'
import './Section.css';
import Color from '../theme/color'
import Shape from '../theme/Shape'
import ShoppingCart from '../img/shopping_cart.svg'
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

/**
 * @param {Integer} id - The ID of the the section for the list
 * @param {Integer} uuid - The ID of the the section for React to identify
 * @param {String} title - The title of the content in the section
 * @param {String} subtitle - The subtitle of the content in the section
 * @param {String} paragraph - The paragraph of the content in the section
 * @param {String} img - The img of the section
 * @param {Boolean} is_reverse - Whether the content and the image swap
 * @param {Object} extra - The data and index of the content in the section
 */

class Section extends React.Component{
    constructor(props) {
        super(props);
        // this.handleBuyClick = this.handleBuyClick.bind(this);
    }

    // handleBuyClick(){
    //     console.log(cartGetState())
    //     cartAddItem(2, "http://localhost:5000/img/hill2.jpg", "綠蟬招牌紅茶", 2, 350)
    //     console.log(cartGetState())
    // }

    render(){
        let classVar = `row ${this.props.is_reverse? "flex-row-reverse" : "flex-row"} align-items-center`;

        // let data1 = (<div style={{textAlign: "center"}}>
        //     <h4 style={{fontWeight: "bold"}}>發酵溫度</h4>
        //     <h1 style={{color: Color.greenDark, fontSize: '3rem'}}>26.3<span style={{fontSize: '2rem'}}>度</span></h1>
        // </div>)

        // let data2 = (<div style={{textAlign: "center" }}>
        //     <h4 style={{fontWeight: "bold"}}>發酵濕度</h4>
        //     <h1 style={{color: Color.greenDark, fontSize: '3rem'}}>63<span style={{fontSize: '2rem'}}>%</span></h1>
        // </div>)

        // let button = (
        //     <div>
        //         {/* <button onClick={this.handleBuyClick} style={{fontFamily: font_style.fontFamily, fontSize: "1.1rem", color: "white", border: "0px", paddingTop: "0.8rem", paddingBottom: "0.8rem", paddingRight: "1.5rem", paddingLeft: "1.5rem", backgroundColor: Color.blueDark, borderRadius: Shape.half_circle, boxShadow: Shape.box_shadow}}>加入購物車</button> */}
        //         <button onClick={this.handleBuyClick} style={{position: "absolute", transition: "translateY(50%)", color: Color.blueDark, border: `2px solid ${Color.blueDark}`, paddingTop: "0.8rem", paddingBottom: "0.8rem", paddingRight: "1.5rem", paddingLeft: "1.5rem", backgroundColor: "rgba(255, 255, 255, 0)", borderRadius: Shape.half_circle}}>
        //             <div>
        //                 <img style={{width: "1.2rem", marginRight: "0.5rem", marginBottom: "0.3rem"}} src={ShoppingCart} />
        //                 <span style={{fontFamily: font_style.fontFamily, fontWeight: "bold", fontSize: "1.1rem"}}>加入購物車</span>
        //             </div>
        //         </button>
        //     </div>
        // )
        // let data = (
        //     <div style={{color: "grey", fontFamily: font_style.fontFamily, fontWeight: "bold"}}>
        //         {/* <FlexGrid items={[data1, data2]} flex_wrap={"nowrap"} justify_content="space-around"/> */}
        //         {this.props.extra}
        //     </div>
        // )

        return(
            <div>
                <div class={classVar} style={{height:"100%"}}>
                    <div class="col-lg-6" style={{textAlign: "center", verticalAlign: "middle", padding: ""}}>
                        <div style={{textAlign: "left", color: "grey", padding: "3rem"}}>
                            <Content title={this.props.title} subtitle={this.props.subtitle} paragraph={this.props.paragraph}/>
                            <div>
                                {/* {this.props.id == 1? button:data} */}
                                {this.props.extra}
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
                        <div style={{width: "95%", margin: "auto"}}>
                            <MiniCard uuid={this.props.id} background={`url(${this.props.img})`} min_height={"70vh"} min_width={"100%"} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    
}

export default Section;