import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Gallery from '../gallery/Gallery'
const fetchDb = require('../util/fetchDb');

class PostList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts_count: 0,
            posts: []
        }
    }

    componentDidMount(){
        fetchDb.fetchPostsCountAll().then(
            (response) => {
                console.log(response);
                this.setState({
                    posts_count: response.count
                })
                return response;
            }
        ).catch(
            (reject) => {
                console.log("Error: ", reject)
                return reject
            }
        )

        fetchDb.fetchPostList(-1,0).then(
            (response) => {
                console.log(response);
                var postList = response.map((item, index, array) => {
                    return {
                        id: item.id,
                        img: item.cover_img,
                        caption_title: item.title,
                        caption_subtitle: item.subtitle
                    }
                })
                console.log(postList);
                this.setState({
                    posts: postList
                })
                return response;
            }
        ).catch(
            (reject) => {
                console.log("Error: ", reject)
                return reject
            }
        )
    }

    render(){
        return (
            <div>
                <Gallery galleryInput={this.state.posts} route=""/>
            </div>
        );
    }
}

export default PostList;