import React from 'react';
import Post from '../post/Post';
import LoadingPage from '../pages/LoadingPage'
import {title_style, subtitle_style, paragraph_style} from '../theme/font'
const fetchItem = require('../fetch/fetchItem')
const fetchMedia = require('../fetch/fetchMedia')

// @const itemInput = {
//     title: "string",
//     subtitle: "string",
//     author: "string",
//     create_on: "ISO time format string",
//     lastest_modify: "ISO time format string",
//     content: "<html> string",
//     cover_img: "image url or null in string"
// };

class ItemPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            is_loaded: false,
            props_id: Number(this.props.match.params.itemId)
        }
    }

    componentDidMount(){
      
      if(typeof(this.state.props_id) != "number"){
        console.log("Error: ItemPage parameter id is not number")
      }
      console.log(this.state.props_id)
        fetchItem.byId(this.state.props_id).then(
          (resolve_item) => {
            fetchMedia.fetchImage(resolve_item.cover_img).then(
              (resolve_media) => {
                this.setState({
                  cover_img: resolve_media
                })
              }
            ).catch(
              (reject) => {
                console.log(reject)
              }
            )
            this.setState({
              id: resolve_item.id,
              title: resolve_item.name,
              subtitle: resolve_item.price,
              author: resolve_item.producer.name,
              content: resolve_item.description,
              create_on: resolve_item.create_on,
              lastest_modify: resolve_item.lastest_modify,
            });
            console.log(this.state)
            return (resolve_item);
          }
        ).then(
          (resolve_item) => {
            this.setState({
              is_loaded: true,
            });
          }
        ).catch(
          (reject) => {
            console.log(reject)
          }
        )
      }

    render(){
      // console.log("url("+ this.state.cover_img +")")
        return(
          <div>
            {this.state.is_loaded? 
              <div data-aos="fade-left">
                  <div class="" style={{backgroundImage: "url("+ this.state.cover_img +")", height: "100vh", minHeight: "350px", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                      <div style={{width: "100%", height: "100%", textAlign: "left", backgroundColor: "rgba(0,0,0,0.5)"}}>
                          <div style={{position: "absolute", top: "50%", transform: "translateY(-50%)", marginLeft: "3rem", marginRight: "3rem"}}>
                              <h1 style={title_style}>{this.state.title}</h1>
                              <h4 style={subtitle_style}>{this.state.subtitle}</h4>
                              <p style={paragraph_style}>{this.state.author} Create At {this.state.create_on}</p>
                          </div>
                      </div>
                  </div>
                  <div class="container" data-aos="fade-right">
                      <Post content={this.state.content}/>
                  </div>
              </div> :
              <LoadingPage/>
            }
          </div>
        );
    }
}

export default ItemPage;