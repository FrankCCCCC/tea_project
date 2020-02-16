import React from 'react'
import Carousel from '../carousel/Carousel'
import {font_style} from '../theme/font'
const Color = require('../theme/color')


// @carouselInput = [{
//     media: 'media_url string',
//     backgroundColor: 'color code string',
//     html_content: raw html code
//     link: 'string'
// }];

function Banner(){
    var html_content = (
        <div style={{display: 'table', position: 'absolute', width: '100%', height: '100%'}}>
            <div style={{display: 'table-cell', width: '100%', textAlign: 'center', verticalAlign: 'middle'}}>
                <div class='container' style={{color: Color.colorBlueDark, fontFamily: font_style.fontFamily, fontWeight: "bold"}}>
                    {/* <div class="d-flex justify-content-around align-content-around flex-wrap mb-3">
                        <div>
                            <h4 style={{}}>臺灣茶葉年總消耗量</h4>
                            <h1 style={{fontSize: '6rem'}}>10000<span style={{fontSize: '2rem'}}>頓</span></h1>
                        </div>
                        <div>
                            <h4 style={{}}>凍頂烏龍茶年總產量</h4>
                            <h1 style={{fontSize: '6rem'}}>10000<span style={{fontSize: '2rem'}}>頓</span></h1>
                        </div>
                    </div> */}
                    <h2 style={{color: Color.colorBlueDark, fontSize: '4rem', fontFamily: font_style.fontFamily, fontWeight: "bold"}}>"賣茶葉賺大錢的方法也不是沒有，但是茶葉這東西，生我養我的，我做不到"</h2>
                </div>
            </div>
        </div>
    )
    var carouselInput = [{
        media: "http://192.168.43.203:5000/img/tea_tree.jpg",
        backgroundColor: 'rgba(255,255,255,1)',
        html_content: html_content,
        link: '',
    }]

    return (
        <div style={{}}>
            <Carousel carouselInput = {carouselInput} is_show_indicator = {false} is_show_control = {false} opacity = {1}/>
        </div>
    )
}

export default Banner