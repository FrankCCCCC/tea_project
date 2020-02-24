import React from 'react';
import Post from '../post/Post';
import HeroTitle from '../hero_title/HeroTitle'
import Gallery from '../gallery/Gallery';
import LoadingPage from '../pages/LoadingPage';
import GalleryList from '../galleryList/GalleryList';
import {fetchPostsCountAll, fetchPostList} from '../fetch/fetchPost'

function PostListPage(props) {

    return (
        <div>
          {/* <LoadingPage/> */}
          <HeroTitle title="最新消息" paragraph="各種稀奇古怪的事"/>
          <div class="container">
            <GalleryList countAll={fetchPostsCountAll().then((response) => {return response.count})} loadrequest={fetchPostList} route="post"/>
          </div>
        </div>
    );
}

export default PostListPage;