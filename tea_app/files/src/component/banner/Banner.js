import React from 'react'
import Carousel from '../carousel/Carousel'
import {font_style} from '../theme/font'
import Color from '../theme/color'


// @carouselInput = [{
//     media: 'media_url string',
//     backgroundColor: 'color code string',
//     html_content: raw html code
//     link: 'string'
// }];

/**
 * @param {String} media - Media URL
 * @param {String} backgroundColor - Background color code
 * @param {String} html_content - Raw HTML code
 * @param {String} link - Hyper link activate on click
 */

function Banner(props){
    var html_content = (
        <div style={{display: 'table', position: 'absolute', width: '100%', height: '100%'}}>
            <div style={{display: 'table-cell', width: '100%', textAlign: 'center', verticalAlign: 'middle'}}>
                <div class='container' style={{color: Color.blueDark, fontFamily: font_style.fontFamily, fontWeight: "bold"}}>
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
                    <h2 style={{color: Color.blueDark, fontSize: '4rem', fontFamily: font_style.fontFamily, fontWeight: "bold"}}>"賣茶葉賺大錢的方法也不是沒有，但是茶葉這東西，生我養我的，我做不到"</h2>
                </div>
            </div>
        </div>
    )
    var carouselInput = [{
        media: "http://localhost:5000/img/tea_tree.jpg",
        backgroundColor: 'rgba(150,150,150,1)',
        html_content: html_content,
        link: '',
    }]

    return (
        <div style={{backgroundColor: "white", boxShadow: "1px 1px 5px grey", border: "", borderRadius: '20px', width: "100%", height: "100%", padding: "3rem", display: "table"}}>
            <div style={{display: "table-cell", verticalAlign: "middle", textAlign: "center"}}>
                
                <a href={props.link}>
                    <div style={{fontFamily: font_style.fontFamily, fontWeight: "bold", opacity: props.opacity}}>
                        {props.html_content}
                    </div>
                </a>
                
            </div>
            {/* <Carousel carouselInput = {carouselInput} is_show_indicator = {false} is_show_control = {false} opacity = {1}/> */}
        </div>
    )
}

export default Banner