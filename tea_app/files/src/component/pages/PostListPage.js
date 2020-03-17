import React from 'react';
import Post from '../post/Post';
import HeroTitle from '../hero_title/HeroTitle'
import Gallery from '../gallery/Gallery';
import InfiniteScroller from '../infiniteScroller/InfiniteScroller'
import AsymmetricGrid from '../grid/AsymmetricGrid'
import LoadingPage from '../pages/LoadingPage';
import {fetchPostsCountAll, fetchPostList} from '../fetch/fetchPost'

class PostListPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }

    handleLoadMore(count, offset){
        return fetchPostList(count, offset).then(
            (resolve) => {
                return resolve.map((item, index, array) => {
                    return {
                        id: item.id, 
                        img: item.cover_img, 
                        // caption_title: item.title,
                        // caption_subtitle: item.subtitle,
                        title: item.title,
                        subtitle: item.subtitle
                    }
                })
            }
        ).then((resolve) => {
            return resolve.map((item, index, array) => {
                return <Gallery uuid={index} id={item.id} catergory={item.catergory} img={item.img} caption_title={item.caption_title} caption_subtitle={item.caption_subtitle} title={item.title} subtitle={item.subtitle} badge={item.badge} route={"post"}/>
            })
        })
    }

    adapter(grid_items){
        return (
            <AsymmetricGrid items={grid_items} column_count={3} column_width={"2rem"} column_width={"20rem"}/>
        )
    }

    componentDidMount(){

    }

    componentDidUpdate(){

    }

    render(){
        return (
            <div>
                <div style={{height: "3rem"}}></div>
                {/* <LoadingPage/> */}
                <HeroTitle title="最新消息" paragraph="各種稀奇古怪的事"/>
                <div class="container">
                    <InfiniteScroller count_all={fetchPostsCountAll().then((response) => {return response.count})} load_request={this.handleLoadMore} grid_adapter={this.adapter} load_item_number_per_time={3}/>
                </div>
            </div>
        );
    }
}

export default PostListPage;