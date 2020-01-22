import React from 'react';
import {useParams} from 'react-router-dom';
import Post from '../post/Post';
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

function PostPage() {
    return(
        <div>
            <div class="" style={{backgroundImage: "url("+ props.cover_img +")", height: "100vh", minHeight: "350px", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                <div style={{width: "100%", height: "100%", textAlign: "left", backgroundColor: "rgba(0,0,0,0.5)"}}>
                    <div style={{position: "absolute", top: "50%", transform: "translateY(-50%)", marginLeft: "3rem", marginRight: "3rem"}}>
                        <h1 style={title_style}>{props.title}</h1>
                        <h4 style={subtitle_style}>{props.subtitle}</h4>
                        <p style={paragraph_style}>{props.author} Create At {props.create_on}</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <Post/>
            </div>
        </div>
    );
}

export default PostPage;