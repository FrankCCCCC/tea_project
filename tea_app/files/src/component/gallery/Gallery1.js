import React from 'react';
import {Link, Switch, Route, useParams, useRouteMatch} from 'react-router-dom';
import {font_style} from '../theme/font';
import {PillBadge} from '../badge/Badge'
import Color from '../theme/color'

/**
* @param {String} uuid - The UUID of the item to distinguish for ReactDOM
* @param {Integer} id - The identification number of items
* @param {String} catergory - The categories of items
* @param {String} img - The cover image of the item
* @param {String} caption_title - The title caption of the image
* @param {String} caption_subtitle - The subtitle caption of the image
* @param {String} title - The title of the item
* @param {String} subtitle - The subtitle of the item
* @param {String} badge - The badge of the item
* @param {String} route - The URL route that added to current URL and it would direct to the page of link
*/

class Gallery extends React.Component{
    constructor(props){
        super(props);
        // if(!Array.isArray(this.props.galleryInput)){
        //     console.log("Error GalleryInput is not array")
        //     throw "Error GalleryInput is not array";
        //     return -1;
        // }
        this.state = {
            content: []
        }
    }

    makeItem(i, id, img, caption_title, caption_subtitle, route, title, subtitle, badge){
        return (
            <div key={i} style={{marginBottom: "1rem", display: "inline-block"}}>
                <Link to={`${route}/${id}`}>
                    <div style={{position: "relative", textAlign: "", color: "white"}}>
                        <img class="img-fluid" src={img} alt="Card image cap" style={{width: "100%", borderRadius: "20px", boxShadow: "5px 5px 20px grey"}}/>
                        <div style={{position: "absolute", bottom: "0rem", right: "0rem", width: "100%", height: "100%", background: "linear-gradient(to top, rgba(0,0,0,0.9), 5rem, rgba(0,0,0,0))", borderRadius: "20px"}}>
                            <div style={{position: "absolute", bottom: "0rem", right: "0rem", width: "100%", paddingRight: "0.5rem", paddingLeft: "0.5rem", marginBottom: "0.5rem"}}>
                                <div style={{textAlign: "left"}}>
                                    <h5 style={{fontWeight: "bold", marginBottom: "2px"}}>{caption_title}</h5>
                                    <span style={{fontSize: "1rem", marginBottom: "2px", textAlign: "right"}}>{caption_subtitle}</span>
                                </div>
                            </div>
                            <div style={{position: "absolute", top: "0.7rem", right: "1rem"}}>
                                <span style={{textAlign: "right"}}>
                                    <PillBadge color={Color.yellowHightLight} text={"預售"}/>
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
                <div style={{width: "100%", paddingTop: "1rem", paddingRight: "0rem", paddingLeft: "0rem", marginBottom: "0rem"}}>
                    <div style={{textAlign: "left"}}>
                        <h5 style={{fontWeight: "bold", color: Color.greyDark}}>{title}</h5>
                        <span style={{color: Color.grey}}>{subtitle}</span>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.setState({
            content: this.makeItem(this.props.uuid, this.props.id, this.props.img, this.props.caption_title, this.props.caption_subtitle, this.props.route, this.props.title, this.props.subtitle, this.props.badge)
        })
        // console.log(this.state.content)
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        // if(this.state.content.length != this.props.galleryInput.length){
            
        //     var t = [];
        //     for(let i=0; i < this.props.galleryInput.length; i++){
        //         console.log(`${this.props.route}/${this.props.galleryInput[i].id}`)
        //         t.push(
        //             this.makeItem(
        //                 i, 
        //                 this.props.galleryInput[i].id, 
        //                 this.props.galleryInput[i].img, 
        //                 this.props.galleryInput[i].caption_title, 
        //                 this.props.galleryInput[i].caption_subtitle, 
        //                 this.props.route,
        //                 this.props.galleryInput[i].title, 
        //                 this.props.galleryInput[i].subtitle,
        //                 this.props.galleryInput[i].badge
        //             )
        //         )
                
        //     }
            
        //     this.setState({
        //         content: t
        //     })

        //     // console.log(this.state.content)
        // }
    }

    render(){
        // console.log("Render")
        // console.log(this.state.content)
        return (
            <div style={font_style}>
                {/* <div style={{columnCount: "3",columnWidth: "250px", columnGap: "2rem"}}> */}
                    {this.state.content}
                {/* </div> */}
            </div>
        );
    }
}

export default Gallery;