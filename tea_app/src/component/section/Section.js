import React from 'react';
import {font_style, title_style, subtitle_style, paragraph_style} from '../theme/font';
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
        let classVar = `row ${this.props.sectionInput.is_reverse? "flex-row-reverse" : "flex-row"} align-items-center`;
        // cart_store.dispatch({type: action_add_item, id: 1, name: "Test Oolong", quantity: 2}, {type: action_add_item})
        // console.log("Section", cart_store.getState())

        let button = (
            // <div><ButtonPillarBlueDark text="購買"/></div>
            <button class="btn" onClick={this.handleBuyClick} style={{fontFamily: font_style.fontFamily, fontSize: "1rem" , width: "7rem", color: "white",backgroundColor: Color.blueDark, borderRadius: "20px"}}>加入購物車</button>
        )
        // console.log(this.props.sectionInput.id)
        let data = (
            <div style={{color: "grey", fontFamily: font_style.fontFamily, fontWeight: "bold"}}>
                <div class="d-flex justify-content-around align-content-around flex-wrap mb-3">
                    <div style={{textAlign: "center"}}>
                        <h4 style={{fontWeight: "bold"}}>發酵溫度</h4>
                        <h1 style={{color: Color.greenDark, fontSize: '3rem'}}>26.3<span style={{fontSize: '2rem'}}>度</span></h1>
                    </div>
                    <div style={{textAlign: "center" }}>
                        <h4 style={{fontWeight: "bold"}}>發酵濕度</h4>
                        <h1 style={{color: Color.greenDark, fontSize: '3rem'}}>63<span style={{fontSize: '2rem'}}>%</span></h1>
                    </div>
                </div>
                {/* <h2 style={{color: Color.blueDark, fontSize: '4rem', fontFamily: font_style.fontFamily, fontWeight: "bold"}}>"賺大錢的方法也不是沒有，但是茶葉這東西，生我養我的，我做不到"</h2> */}
            </div>
        )

        return(
            <div>
                <div class={classVar} style={{height:"100%"}}>
                    <div class="col-lg-6" style={{textAlign: "center", verticalAlign: "middle", padding: ""}}>
                    {/* <div style={{color: "grey", position: "relative", left: "-5rem", zIndex: 10, backgroundColor: "white", padding: "3rem", boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px"}}> */}
                        {/* <div style={{color: "grey", position: "relative", left: "-3rem", zIndex: 10, backgroundColor: "white", padding: "3rem", boxShadow: "5px 5px 5px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px"}}> */}
                        {/* <div style={{textAlign: "center", color: "grey", padding: "3rem"}}>
                            <h3 style={{marginBottom: "0rem", fontFamily: font_style.fontFamily, fontWeight: "bold"}}>{this.props.sectionInput.title}</h3>
                            <div style={{marginBottom: "1rem", marginLeft: "auto", marginRight: "auto", height: "0.2rem", width: "5rem", backgroundColor: Color.greenDark}}></div>
                            <h5 style={{marginBottom: "0.3rem", fontFamily: font_style.fontFamily}}>{this.props.sectionInput.subtitle}</h5>
                            <p style={{fontFamily: font_style.fontFamily, fontSize: "1rem"}}>{this.props.sectionInput.paragraph}</p>
                        </div> */}
                        <div style={{textAlign: "left", color: "grey", padding: "3rem"}}>
                            <h3 style={{marginBottom: "0rem", fontFamily: font_style.fontFamily, fontWeight: "bold"}}>{this.props.sectionInput.title}</h3>
                            <div style={{marginBottom: "1rem", height: "0.2rem", width: "5rem", backgroundColor: Color.greenDark}}></div>
                                <h5 style={{marginBottom: "0.3rem", fontFamily: font_style.fontFamily}}>{this.props.sectionInput.subtitle}</h5>
                                <p style={{fontFamily: font_style.fontFamily, fontSize: "1rem"}}>{this.props.sectionInput.paragraph}</p>
                            
                            <div>
                                {this.props.sectionInput.id == 1? button:data}
                                
                                {/* <button class="btn" style={{fontFamily: font_style.fontFamily, fontSize: "1rem" , width: "7rem", color: "white",backgroundColor: Color.blueDark, borderRadius: "20px"}}>購買</button> */}
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-lg-6" style={{height: "100%", padding: 0}}>
                        <div class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active section" style={{backgroundImage: "url("+ this.props.sectionInput.img +")", width: "100%"}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    
}

export default Section;