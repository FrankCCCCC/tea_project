import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import {caption_title_style, caption_subtitle_style} from '../theme/font'
import './Slider.css'

// @sliderInput = [{
//     img: 'image_url string',
//     caption_title: 'string',
//     caption_subtitle: 'string'
// }];

function Slider(props){
    // props.slide_imgs = [slide_pic1, slide_pic2, slide_pic3];
    // props.slide_caption_titles = [slide1_caption, slide2_caption, slide3_caption];
    // props.slide_caption_subtitles = [slide1_caption, slide2_caption, slide3_caption];
    // props.propsis_show_indicator = true;
    // props.is_show_control = true;

    if(!Array.isArray(props.sliderInput)){
        console.log("Error sliderInput is not array")
        throw "Error sliderInput is not array";
        return -1;
    }

    var content = []
    let {path, url} = useRouteMatch();
    for(let i=0; i<props.sliderInput.length; i++){
        if(i==0){var classA = "carousel-item active";}
        else{var classA = "carousel-item";}
        content.push(
            <div>
                <Link to={`${url}post/${props.sliderInput[i].id}`}>
                    <div class={classA} style={{backgroundImage: "url("+ props.sliderInput[i].img +")"}}>
                        <div class="carousel-caption d-md-block" style={{textAlign: "left"}}>
                            <h2 class="display-4" style={caption_title_style}>{props.sliderInput[i].caption_title}</h2>
                            <p class="lead" style={caption_subtitle_style}>{props.sliderInput[i].caption_subtitle}</p>
                        </div>
                    </div>
                </Link>
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