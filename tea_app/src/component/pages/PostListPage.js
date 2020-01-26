import React from 'react';
import Post from '../post/Post';
import HeroTitle from '../hero_title/HeroTitle'
import Gallery from '../gallery/Gallery';
import LoadingPage from '../pages/LoadingPage';
import PostList from '../postList/PostList';

function PostListPage(props) {

    return (
        <div>
          {/* <LoadingPage/> */}
          <HeroTitle title="最新消息" paragraph="各種稀奇古怪的事"/>
          <PostList/>
          
          {/* <Gallery galleryInput={galleryInput} route=""/> */}
        </div>
    );
}

export default PostListPage;