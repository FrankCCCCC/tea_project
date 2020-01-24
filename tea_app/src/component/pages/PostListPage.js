import React from 'react';
import Post from '../post/Post';
import HeroTitle from '../hero_title/HeroTitle'
import Gallery from '../gallery/Gallery';
import LaodingPage from '../pages/LoadingPage';
import LoadingPage from '../pages/LoadingPage';

const galleryInput = [{
    img: "http://192.168.43.203:5000/img/farmer1.jpg",
    caption_title: "陳朝鳳",
    caption_subtitle: "鹿谷 凍頂",
    id: 1
  },
  {
    img: "http://192.168.43.203:5000/img/farmer2.jpg",
    caption_title: "張大春",
    caption_subtitle: "鹿谷 鳳凰",
    id: 2
  },
  {
    img: "http://192.168.43.203:5000/img/farmer3.jpg",
    caption_title: "林大宇",
    caption_subtitle: "鹿谷 鳳凰",
    id: 3
  },
  {
    img: "http://192.168.43.203:5000/img/farmer4.jpg",
    caption_title: "林大宇",
    caption_subtitle: "鹿谷 鳳凰",
    id: 1
  },
  {
    img: "http://192.168.43.203:5000/img/tea_tree.jpg",
    caption_title: "林大宇",
    caption_subtitle: "鹿谷 鳳凰",
    id: 1
  },
  {
    img: "http://192.168.43.203:5000/img/child.jpg",
    caption_title: "林大宇",
    caption_subtitle: "鹿谷 鳳凰",
    id: 1
  },
  {
    img: "http://192.168.43.203:5000/img/farmer7.jpg",
    caption_title: "林大宇",
    caption_subtitle: "鹿谷 鳳凰",
    id: 1
  }]

function PostListPage(props) {

    return (
        <div>
          <LoadingPage/>
          {/* <HeroTitle title="最新消息" paragraph="各種稀奇古怪的事"/> */}
          {/* <Gallery galleryInput={galleryInput} route=""/> */}
        </div>
    );
}

export default PostListPage;