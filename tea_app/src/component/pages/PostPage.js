import React from 'react';
import {useParams} from 'react-router-dom';
import Post from '../post/Post';
import LoadingPage from '../pages/LoadingPage'
import {title_style, subtitle_style, paragraph_style} from '../theme/font'

// @const postInput = {
//     title: "string",
//     subtitle: "string",
//     author: "string",
//     create_on: "ISO time format string",
//     lastest_modify: "ISO time format string",
//     content: "<html> string",
//     cover_img: "image url or null in string"
// };

const props = {
    title: "凍頂烏龍的故事",
    subtitle: "subtitle string",
    author: "author string",
    create_on: "ISO time format string",
    lastest_modify: "ISO time format string",
    content: "<h5>String</h5>",
    cover_img: 'http://192.168.43.203:5000/img/farmer2.jpg'
}

class PostPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            is_loaded: false,
            props_id: props.id,
            // id: 

        }
    }

    componentDidMount(){
    
        // console.log(md.render())
        // var html = document.createElement('div');
        
        fetch('http://192.168.43.203:8000/post_action/query_post?id=13').then(
          (response) => {
            console.log(response)
            // console.log(response.json())
            // html = { __html: JSON.parse(resolve).content};
            return response.json()
          }
        ).then(
          (resolve) => {
            console.log(resolve)
            this.setState({
                is_loaded: true,
                id: resolve.id,
                title: resolve.title,
                subtitle: resolve.subtitle,
                author: resolve.author,
                html: { __html: resolve.content},
                create_on: resolve.create_on,
                lastest_modify: resolve.lastest_modify,
                cover_img: "http://192.168.43.203:5000/img/" + resolve.cover_img
            });
          }
        ).catch(
          (reject) => {
            console.log(reject)
            // html = { __html: <h1>Error</h1>};
          }
        )
      }

    render(){
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
                      <Post/>
                  </div>
              </div> :
              <LoadingPage/>
            }
          </div>
        );
    }
}

// function PostPage() {
//     return(
//         <div>
//             <div class="" style={{backgroundImage: "url("+ props.cover_img +")", height: "100vh", minHeight: "350px", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
//                 <div style={{width: "100%", height: "100%", textAlign: "left", backgroundColor: "rgba(0,0,0,0.5)"}}>
//                     <div style={{position: "absolute", top: "50%", transform: "translateY(-50%)", marginLeft: "3rem", marginRight: "3rem"}}>
//                         <h1 style={title_style}>{props.title}</h1>
//                         <h4 style={subtitle_style}>{props.subtitle}</h4>
//                         <p style={paragraph_style}>{props.author} Create At {props.create_on}</p>
//                     </div>
//                 </div>
//             </div>
//             <div class="container">
//                 <Post/>
//             </div>
//         </div>
//     );
// }

export default PostPage;