import React from 'react';
import {Link, Switch, Route, useParams, useRouteMatch} from 'react-router-dom';
import {font_style} from '../theme/font';
import {} from '../util/config'
const Color = require('../theme/color')

/**
* @param {Object[]} galleryInput[] - The object array of gallery
* @param {integer} galleryInput[].id - The identification number of items
* @param {string} galleryInput[].catergory - The categories of items
* @param {string} galleryInput[].img - The cover image of the item
* @param {string} galleryInput[].caption_title - The title caption of the item
* @param {string} galleryInput[].caption_subtitle - The subtitle caption of the item
* @param {string} route - The URL route that added to current URL and it would direct to the page of link
*/

class Gallery extends React.Component{
    constructor(props){
        super(props);
        if(!Array.isArray(this.props.galleryInput)){
            console.log("Error GalleryInput is not array")
            throw "Error GalleryInput is not array";
            return -1;
        }
        this.state = {
            content: []
        }
    }

    makeItem(i, id, img, caption_title, caption_subtitle, route){
        return (
            // <div key={i} style={{marginBottom: "0rem"}}>
            <div key={i} style={{marginBottom: "1rem"}}>
            <Link to={`${route}/${id}`}>
                <div style={{position: "relative", textAlign: "right", color: "white"}}>
                    <img class="img-fluid" src={img} alt="Card image cap" style={{width: "100%", borderRadius: "4px"}}/>
                    {/* <img class="img-fluid" src={img} alt="Card image cap" style={{width: "100%"}}/> */}

                    {/* <div style={{position: "absolute", bottom: "0rem", right: "0rem", width: "100%", paddingRight: "0.5rem", paddingLeft: "0.5rem", paddingTop: "0.3rem", backgroundColor: "rgba(0, 0, 0, 0.2)"}}> */}
                    <div style={{position: "absolute", bottom: "0rem", right: "0rem", width: "100%", height: "100%", background: "linear-gradient(to top, rgba(0,0,0,0.9), 5rem, rgba(0,0,0,0))", borderRadius: "6px"}}>
                    {/* <div style={{position: "absolute", bottom: "0rem", right: "0rem", width: "100%", height: "100%", background: "linear-gradient(to top, rgba(0,0,0,0.9), 2rem, rgba(0,0,0,0))"}}> */}
                        <div style={{position: "absolute", bottom: "0rem", right: "0rem", width: "100%", paddingRight: "0.5rem", paddingLeft: "0.5rem", marginBottom: "0.5rem"}}>
                            <div style={{textAlign: "left"}}>
                                <h5 style={{fontWeight: "bold", marginBottom: "2px"}}>{caption_title}</h5>
                                {/* <div style={{height: "0.2rem", width: "3rem", backgroundColor: Color.colorYellowHightLight}}></div> */}
                                <span style={{fontSize: "1rem", marginBottom: "2px", textAlign: "right"}}>
                                        {caption_subtitle}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        )
    }

    componentDidMount(){
        // let {path, url} = useRouteMatch();
        // let url = "http://localhost:3000/post"
        // console.log(`${url}`)
        var t = [];
        for(let i=0; i < this.props.galleryInput.length; i++){
            // console.log(`${url}${this.props.route}/${this.props.galleryInput[i].id}`)
            // data-aos={i % 2? "fade-right" : "fade-left"}
            t.push(this.makeItem(i, this.props.galleryInput[i].id, this.props.galleryInput[i].img, this.props.galleryInput[i].caption_title, this.props.galleryInput[i].caption_subtitle, this.props.route))
            // t.push(
            //     // <div key={i} style={{marginBottom: "0rem"}}>
            //     <div key={i} style={{marginBottom: "1rem"}}>
            //         <Link to={`${this.props.route}/${this.props.galleryInput[i].id}`}>
            //             <div style={{position: "relative", textAlign: "right", color: "white"}}>
            //                 <img class="img-fluid" src={this.props.galleryInput[i].img} alt="Card image cap" style={{width: "100%", borderRadius: "4px"}}/>
            //                 {/* <img class="img-fluid" src={this.props.galleryInput[i].img} alt="Card image cap" style={{width: "100%"}}/> */}

            //                 {/* <div style={{position: "absolute", bottom: "0rem", right: "0rem", width: "100%", paddingRight: "0.5rem", paddingLeft: "0.5rem", paddingTop: "0.3rem", backgroundColor: "rgba(0, 0, 0, 0.2)"}}> */}
            //                 <div style={{position: "absolute", bottom: "0rem", right: "0rem", width: "100%", height: "100%", background: "linear-gradient(to top, rgba(0,0,0,0.9), 5rem, rgba(0,0,0,0))", borderRadius: "6px"}}>
            //                 {/* <div style={{position: "absolute", bottom: "0rem", right: "0rem", width: "100%", height: "100%", background: "linear-gradient(to top, rgba(0,0,0,0.9), 2rem, rgba(0,0,0,0))"}}> */}
            //                     <div style={{position: "absolute", bottom: "0rem", right: "0rem", width: "100%", paddingRight: "0.5rem", paddingLeft: "0.5rem", marginBottom: "0.5rem"}}>
            //                         <div style={{textAlign: "left"}}>
            //                             <h5 style={{fontWeight: "bold", marginBottom: "2px"}}>{this.props.galleryInput[i].caption_title}
            //                                 <span style={{marginLeft: "1rem", fontSize: "1rem", fontWeight: "bold", marginBottom: "2px", textAlign: "right"}}>
            //                                     {this.props.galleryInput[i].caption_subtitle}
            //                                 </span>
            //                             </h5>
            //                             {/* <div style={{height: "0.2rem", width: "3rem", backgroundColor: Color.colorYellowHightLight}}></div> */}
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </Link>
            //     </div>
            // );
        }
        this.setState({
            content: t
        })
        console.log(this.state.content)
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.state.content.length != this.props.galleryInput.length){
            // let {path, url} = useRouteMatch();
            // let url = "http://localhost:3000/post"
            // console.log(`${url}`)
            var t = [];
            for(let i=0; i < this.props.galleryInput.length; i++){
                console.log(`${this.props.route}/${this.props.galleryInput[i].id}`)
                t.push(this.makeItem(i, this.props.galleryInput[i].id, this.props.galleryInput[i].img, this.props.galleryInput[i].caption_title, this.props.galleryInput[i].caption_subtitle, this.props.route))
                // t.push(
                //     <div key={i} class="mb-3">
                        
                //             <div style={{position: "relative", textAlign: "right", color: "white"}}>
                //                 <Link to={`${this.props.route}/${this.props.galleryInput[i].id}`}>
                //                     <img class="img-fluid" src={this.props.galleryInput[i].img} alt="Card image cap" style={{width: "100%"}}/>
                //                 </Link>
                //                 <div style={{position: "absolute", bottom: "0rem", right: "0rem", width: "100%", paddingRight: "0.5rem", paddingLeft: "0.5rem", paddingTop: "0.3rem", backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                //                     <h4>{this.props.galleryInput[i].caption_title}</h4>
                //                     <p>{this.props.galleryInput[i].caption_subtitle}</p>
                //                 </div>
                //             </div>
                        
                //     </div>
                // );
            }
            
            this.setState({
                content: t
            })

            console.log(this.state.content)
        }
    }

    render(){
        console.log("Render")
        console.log(this.state.content)
        return (
            <div style={font_style}>
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-center mb-5">
                        <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="all">鹿谷凍頂烏龍</button>
                        <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="1">阿里山高山</button>
                        <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="2">峨嵋東方美人</button>
                    </div>
                </div>
                
                {/* <div style={{columnGap: "0px", columnCount: "3",columnWidth: "250px"}}> */}
                <div style={{columnCount: "3",columnWidth: "250px"}}>
                    {this.state.content}
                </div>
            </div>
        );
    }
}

export default Gallery;