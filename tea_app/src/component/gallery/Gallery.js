import React from 'react';
import {Link, Switch, Route, useParams, useRouteMatch} from 'react-router-dom';
import {font_style} from '../theme/font';
import {} from '../util/config'

// const galleryInput = [{
//     id: Integer,
//     img: String image url,
//     caption_title: String,
//     caption_subtitle: String
// }]

// const route = String next route path

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

    componentDidMount(){
        // let {path, url} = useRouteMatch();
        // let url = "http://localhost:3000/post"
        // console.log(`${url}`)
        var t = [];
        for(let i=0; i < this.props.galleryInput.length; i++){
            // console.log(`${url}${this.props.route}/${this.props.galleryInput[i].id}`)
            // data-aos={i % 2? "fade-right" : "fade-left"}
            t.push(
                <div key={i} class="mb-3">
                    
                        <div style={{position: "relative", textAlign: "right", color: "white"}}>
                            <Link to={`${this.props.route}/${this.props.galleryInput[i].id}`}>
                                <img class="img-fluid" src={this.props.galleryInput[i].img} alt="Card image cap" style={{width: "100%"}}/>
                            </Link>
                            <div style={{position: "absolute", bottom: "0rem", right: "0rem", width: "100%", paddingRight: "0.5rem", paddingLeft: "0.5rem", paddingTop: "0.3rem", backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                                <h4>{this.props.galleryInput[i].caption_title}</h4>
                                <p>{this.props.galleryInput[i].caption_subtitle}</p>
                            </div>
                        </div>
                    
                </div>
            );
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
                
                t.push(
                    <div key={i} class="mb-3">
                        
                            <div style={{position: "relative", textAlign: "right", color: "white"}}>
                                <Link to={`${this.props.route}/${this.props.galleryInput[i].id}`}>
                                    <img class="img-fluid" src={this.props.galleryInput[i].img} alt="Card image cap" style={{width: "100%"}}/>
                                </Link>
                                <div style={{position: "absolute", bottom: "0rem", right: "0rem", width: "100%", paddingRight: "0.5rem", paddingLeft: "0.5rem", paddingTop: "0.3rem", backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                                    <h4>{this.props.galleryInput[i].caption_title}</h4>
                                    <p>{this.props.galleryInput[i].caption_subtitle}</p>
                                </div>
                            </div>
                        
                    </div>
                );
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
                        <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="all">All</button>
                        <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="1">Mountains</button>
                        <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="2">Sea</button>
                    </div>
                </div>
                
                <div class="gallery" style={{columnCount: "3",columnWidth: "250px"}}>
                    {this.state.content}
                </div>
            </div>
        );
    }
}


// function Gallery(props){
//     if(!Array.isArray(props.galleryInput)){
//         console.log("Error GalleryInput is not array")
//         throw "Error GalleryInput is not array";
//         return -1;
//     }
//     var content = [];

//     let {path, url} = useRouteMatch();
//     console.log(`${url}`)
//     for(let i=0; i < props.galleryInput.length; i++){
//         console.log(`${url}${props.route}/${props.galleryInput[i].id}`)
//         content.push(
//             <div key={i} class="mb-3" data-aos={i % 2? "fade-right" : "fade-left"}>
                
//                     <div style={{position: "relative", textAlign: "right", color: "white"}}>
//                         <Link to={`${url}${props.route}/${props.galleryInput[i].id}`}>
//                             <img class="img-fluid" src={props.galleryInput[i].img} alt="Card image cap" style={{width: "100%"}}/>
//                         </Link>
//                         <div style={{position: "absolute", bottom: "0rem", right: "0rem", width: "100%", paddingRight: "0.5rem", paddingLeft: "0.5rem", paddingTop: "0.3rem", backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
//                             <h4>{props.galleryInput[i].caption_title}</h4>
//                             <p>{props.galleryInput[i].caption_subtitle}</p>
//                         </div>
//                     </div>
                
//             </div>
//         );
//     }

//     return (
//         <div style={font_style}>
//             <div class="row">
//                 <div class="col-md-12 d-flex justify-content-center mb-5">
//                     <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="all">All</button>
//                     <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="1">Mountains</button>
//                     <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="2">Sea</button>
//                 </div>
//             </div>
            
//             <div class="gallery" style={{columnCount: "3",columnWidth: "250px"}}>
//                 {content}
//             </div>
//         </div>
//     );
// }

export default Gallery;