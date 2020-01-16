import React from 'react';
import {caption_title_style, caption_subtitle_style} from '../theme/font'
import './Slider.css'

function Slider(props){
    // props.slide_pics = [slide_pic1, slide_pic2, slide_pic3];
    // props.slide_caption_titles = [slide1_caption, slide2_caption, slide3_caption];
    // props.slide_caption_subtitles = [slide1_caption, slide2_caption, slide3_caption];
    // props.propsis_show_indicator = true;
    // props.is_show_control = true;

    var is_caption_title = false;
    var is_caption_subtitle = false;

    if(!Array.isArray(props.slide_pics)){
        console.log("Error Slider input slide_pics is not array")
        throw "Error Slider input slide_pics is not array";
    }

    var slide_lenght = props.slide_pics.length;
    var caption_lenght = 0

    if(!Array.isArray(props.slide_caption_titles)){
        console.log("Error Slider input slide_caption_titles is not array")
    }else{
        caption_lenght = props.slide_caption_titles.length;
        if(caption_lenght == slide_lenght){
            is_caption_title = true;
        }
    }
    
    if(!Array.isArray(props.slide_caption_subtitles)){
        console.log("Error Slider input slide_caption_subtitles is not array")
    }else{
        caption_lenght = props.slide_caption_subtitles.length;
        if(caption_lenght == slide_lenght){
            is_caption_subtitle = true;
        }
    }

    // is_caption_title = false;

    let content = [];
    
    for(let i=0; i<props.slide_pics.length; i++){
        if(i==0){var classA = "carousel-item active";}
        else{var classA = "carousel-item";}
        content.push(
            <div class={classA} style={{backgroundImage: "url("+ props.slide_pics[i] +")"}}>
                <div class="carousel-caption d-md-block" style={{textAlign: "left"}}>
                    {is_caption_title? <h2 class="display-4" style={caption_title_style}>{props.slide_caption_titles[i]}</h2> : ""}
                    {is_caption_subtitle? <p class="lead" style={caption_subtitle_style}>{props.slide_caption_subtitles[i]}</p> : ""}
                </div>
            </div>
        );
    }



    return (
        <div data-aos="fade-right">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                {props.is_show_indicator?
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol> : ""}
                <div class="carousel-inner" role="listbox">
                    {content}
                {/* 
                    <div class="carousel-item active" style={{backgroundImage: "url("+ slide_pic1+")"}}>
                        <div class="carousel-caption d-md-block" style={{textAlign: "left"}}>
                            <h2 class="display-4">First Slide</h2>
                            <p class="lead">This is a description for the first slide.</p>
                        </div>
                    </div>
                    
                    <div class="carousel-item" style={{backgroundImage: 'url(https://source.unsplash.com/bF2vsubyHcQ/1920x1080)'}}>
                        <div class="carousel-caption d-none d-md-block">
                            <h2 class="display-4">Second Slide</h2>
                            <p class="lead">This is a description for the second slide.</p>
                        </div>
                    </div>
                    
                    <div class="carousel-item" style={{backgroundImage: 'url(https://source.unsplash.com/szFUQoyvrxM/1920x1080)'}}>
                        <div class="carousel-caption d-none d-md-block">
                            <h2 class="display-4">Third Slide</h2>
                            <p class="lead">This is a description for the third slide.</p>
                        </div>
                    </div> */}
                    {props.is_show_control?
                    <div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                     : ""}
                </div>
            </div>
        </div>
        
    );
}

export default Slider;