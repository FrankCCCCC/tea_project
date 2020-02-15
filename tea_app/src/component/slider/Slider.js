import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import {caption_title_style, caption_subtitle_style} from '../theme/font'
import Carousel from '../carousel/Carousel'
import './Slider.css'
import './VideoSlider.css'

// @sliderInput = [{
//     media: 'media_url string',
//     caption_title: 'string',
//     caption_subtitle: 'string'
//     link: 'string'
// }];
// @is_show_indicator = 'boolean';
// @is_show_control = 'boolean';

// function Slider(props){

//     if(!Array.isArray(props.sliderInput)){
//         console.log("Error sliderInput is not array")
//         throw "Error sliderInput is not array";
//         return -1;
//     }

//     var content = []
//     let {path, url} = useRouteMatch();
//     console.log(props.sliderInput)
//     for(let i=0; i<props.sliderInput.length; i++){
//         if(i==0){var classA = "carousel-item active";}
//         else{var classA = "carousel-item";}

//         let spilit_array = props.sliderInput[i].media.split('.')
//         let media_format = spilit_array[spilit_array.length-1];
//         if(media_format === 'jpg' || media_format === 'png' || media_format === 'svg'|| media_format === 'gif'){
//             content.push(
//                 <div class={classA + " slider"} style={{backgroundImage: "url("+ props.sliderInput[i].media +")"}}>
//                     <Link to={`${url}post/${props.sliderInput[i].id}`}>
//                         <div style={{height: "100%", width: "100%", backgroundColor: 'rgb(0, 0, 0)', opacity: '0.5'}}>
//                             <div class="carousel-caption d-md-block" style={{textAlign: "center", position: "absolute", height: "50%"}}>
//                                 <h2 class="display-4" style={caption_title_style}>{props.sliderInput[i].caption_title}</h2>
//                                 <p class="lead" style={caption_subtitle_style}>{props.sliderInput[i].caption_subtitle}</p>
//                             </div>  
//                         </div>
//                     </Link>
//                 </div>
//             );
//         }else if(media_format === 'avi' || media_format === 'mp4'){
//             // console.log('hi')
//             content.push(
//                 <div class={classA + ' video_slider'}>
//                     <a  href={props.sliderInput[i].link}>
//                     {/* style={{width: "100%", height: "100%"}} */}
//                         <div>
//                             <video class="video-fluid" autoPlay loop muted style={{width: "100%"}}>
//                                 <source src={props.sliderInput[i].media} type={`video/${media_format}`}/>
//                             </video>
//                             <div style={{}}>
                            // <div class="carousel-caption d-none d-md-block" style={{textAlign: "left"}}>
                            //     <h2 class="display-4" style={caption_title_style}>{props.sliderInput[i].caption_title}</h2>
                            //     <p class="lead" style={caption_subtitle_style}>{props.sliderInput[i].caption_subtitle}</p>
                            // </div>
//                             </div>
//                         </div>
//                     </a>
//                 </div>
//             )
//         }
//     }



//     return (
//         <div>
//             <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"  style={{height: 'auto', minHeight: 'auto'}}>
//                 {props.is_show_indicator?
//                 <ol class="carousel-indicators">
//                     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//                     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//                     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//                 </ol> : ""}
//                 <div class="carousel-inner" role="listbox">
//                     {content}
//                 {props.is_show_control?
//                 <div>
//                     <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span class="sr-only">Previous</span>
//                     </a>
//                     <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span class="sr-only">Next</span>
//                     </a>
//                 </div>
//                     : ""}
//                 </div>
//             </div>
//         </div>    
//     );
// }

function Slider(props){

    if(!Array.isArray(props.sliderInput)){
        console.log("Error sliderInput is not array")
        throw "Error sliderInput is not array";
        return -1;
    }
    var carouselInput = props.sliderInput.map(
        (item, index, array) => {
            var captions_html = (
                <div class="carousel-caption d-none d-md-block" style={{textAlign: "left"}}>
                    <h2 class="display-4" style={caption_title_style}>{item.caption_title}</h2>
                    <p class="lead" style={caption_subtitle_style}>{item.caption_subtitle}</p>
                </div>)
            return {
                media: item.media,
                backgroundColor: '',
                html_content: captions_html,
                link: item.link
            }
        }
    )

    return <Carousel carouselInput = {carouselInput} is_show_indicator = {props.is_show_indicator} is_show_control = {props.is_show_control} opacity = {props.opacity}/>
}

export default Slider;