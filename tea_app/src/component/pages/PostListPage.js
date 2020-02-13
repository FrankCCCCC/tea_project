import React from 'react';
import Post from '../post/Post';
import HeroTitle from '../hero_title/HeroTitle'
import Gallery from '../gallery/Gallery';
import LoadingPage from '../pages/LoadingPage';
import GalleryList from '../galleryList/GalleryList';

const fetchPost = require('../fetch/fetchPost');

function PostListPage(props) {

    return (
        <div>
          {/* <LoadingPage/> */}
          <HeroTitle title="最新消息" paragraph="各種稀奇古怪的事"/>
          <GalleryList countAll={fetchPost.fetchPostsCountAll().then((response) => {return response.count})} loadrequest={fetchPost.fetchPostList} route="post"/>
          
          {/* <Gallery galleryInput={galleryInput} route=""/> */}
        </div>
    );
}

export default PostListPage;