import React from 'react';
import {Link, Switch, Route, useParams, useRouteMatch} from 'react-router-dom';
import {font_style} from '../theme/font';

// const galleryInput = [{
//     id: Integer,
//     img: String image url,
//     caption_title: String,
//     caption_subtitle: String
// }]

// const route = String next route path

function Gallery(props){
    if(!Array.isArray(props.galleryInput)){
        console.log("Error GalleryInput is not array")
        throw "Error GalleryInput is not array";
        return -1;
    }
    var content = [];

    let {path, url} = useRouteMatch();
    console.log(`${url}`)
    for(let i=0; i < props.galleryInput.length; i++){
        console.log(`${url}${props.route}/${props.galleryInput[i].id}`)
        content.push(
            <div class="mb-3" data-aos={i % 2? "fade-right" : "fade-left"}>
                
                    <div style={{position: "relative", textAlign: "right", color: "white"}}>
                        <Link to={`${url}${props.route}/${props.galleryInput[i].id}`}>
                            <img class="img-fluid" src={props.galleryInput[i].img} alt="Card image cap" style={{width: "100%"}}/>
                        </Link>
                        <div style={{position: "absolute", bottom: "0rem", right: "0rem", width: "100%", paddingRight: "0.5rem", paddingLeft: "0.5rem", paddingTop: "0.3rem", backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                            <h4>{props.galleryInput[i].caption_title}</h4>
                            <p>{props.galleryInput[i].caption_subtitle}</p>
                        </div>
                    </div>
                
            </div>
        );
    }

    return (
        <div style={font_style}>
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center mb-5">
                    <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="all">All</button>
                    <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="1">Mountains</button>
                    <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="2">Sea</button>
                </div>
            </div>
            
            <div class="gallery" style={{columnCount: "3",columnWidth: "250px"}}>
                {content}
            </div>
        </div>
    );
}

export default Gallery;


        // <div class="section" id="projects">
        //     <div class="container">
        //         <div class="col-md-12">
        //             <h4>03</h4>
        //             <h1 class="size-50">My <br /> Product</h1> 
        //         </div>
        //         {/*<!-- main container -->*/}
        //         <div class="main-container portfolio-inner clearfix">
        //             {/*<!-- portfolio div -->*/}
        //             <div class="portfolio-div">
        //                 <div class="portfolio">
        //                     {/*<!-- portfolio_filter -->*/}
        //                     <div class="categories-grid wow fadeInLeft">
        //                         <nav class="categories">
        //                             <ul class="portfolio_filter">
        //                                 <li><a href="" class="active" data-filter="*">全品項</a></li>
        //                                 <li><a href="" data-filter=".photography">高山茶</a></li>
        //                                 <li><a href="" data-filter=".logo">春茶</a></li>
        //                                 <li><a href="" data-filter=".graphics">夏茶</a></li>
        //                                 <li><a href="" data-filter=".ads">秋茶</a></li>
        //                                 <li><a href="" data-filter=".fashion">冬茶</a></li>
        //                             </ul>
        //                         </nav>
        //                     </div>
        //                     {/*<!-- portfolio_filter -->*/}
                            
        //                     {/*<!-- portfolio_container -->*/}
        //                     <div class="no-padding portfolio_container clearfix" data-aos="fade-up">
        //                         {/*<!-- single work -->*/}
        //                         <div class="col-md-4 col-sm-6  fashion logo">
        //                             <a id="demo01" href="#animatedModal" class="portfolio_item"> <img src={farmer1} alt="image" class="img-responsive" />
        //                                 <div class="portfolio_item_hover">
        //                                     <div class="portfolio-border clearfix">
        //                                         <div class="item_info">
        //                                             <span>茶聖黑茶</span>
        //                                             <em>高山茶 / 黑茶</em> <br/>
        //                                             <button class="btn btn-primary">Buy</button>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </a>
        //                         </div>
        //                         {/*<!-- end single work -->*/}
        //                     {/* </div> */}
                                
        //                         {/*<!-- single work -->*/}
        //                         <div class="col-md-4 col-sm-6 ads graphics">
        //                             <a id="demo02" href="#animatedModal" class="portfolio_item"> <img src={farmer2} alt="image" class="img-responsive" />
        //                                 <div class="portfolio_item_hover">
        //                                     <div class="portfolio-border clearfix">
        //                                         <div class="item_info">
        //                                             <span>茶聖茉莉花茶</span> 
        //                                             <em>高山茶 / 青茶</em> <br/>
        //                                             <button class="btn btn-primary">Buy</button>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </a>
        //                         </div>
        //                         {/*<!-- end single work -->*/}
                                
        //                         {/*<!-- single work -->*/}
        //                         <div class="col-md-4 col-sm-6 photography">
        //                             <a id="demo03" href="#animatedModal" class="portfolio_item"> <img src={child} alt="image" class="img-responsive" />
        //                                 <div class="portfolio_item_hover">
        //                                     <div class="portfolio-border clearfix">
        //                                         <div class="item_info">
        //                                             <span>茶聖鐵觀音</span> 
        //                                             <em>平地茶 / 青茶</em> <br/>
        //                                             <button class="btn btn-primary">Buy</button>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </a>
        //                         </div>
        //                         {/*<!-- end single work -->*/}
        //                     </div>
        //                     {/*<!-- end portfolio_container -->*/}
        //                 </div>
        //                 {/*<!-- portfolio -->*/}
        //             </div>
        //             {/*<!-- end portfolio div -->*/}
        //         </div>
        //         {/*<!-- end main container -->*/}
        //     </div>
        // </div>


