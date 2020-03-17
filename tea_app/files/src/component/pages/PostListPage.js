import React from 'react';
import Post from '../post/Post';
import HeroTitle from '../hero_title/HeroTitle'
import Gallery from '../gallery/Gallery';
import Gallery1 from '../gallery/Gallery1';
import InfiniteScroller from '../infiniteScroller/InfiniteScroller'
import AsymmetricGrid from '../galleryList/AsymmetricGrid'
import LoadingPage from '../pages/LoadingPage';
import GalleryList from '../galleryList/GalleryList';
import {fetchPostsCountAll, fetchPostList} from '../fetch/fetchPost'

class PostListPage extends React.Component {
    constructor(props){
        super(props)
        // this.handleLoadMore = this.handleLoadMore.bind(this)
        this.state = {
            items: []
        }
    }

    // makeItems(array){
    //     return array.map((item, index, array) => {
    //         return <Gallery1 uuid={index} id={item.id} catergory={item.catergory} img={item.img} caption_title={item.caption_title} caption_subtitle={item.caption_subtitle} title={item.caption_title} subtitle={item.caption_subtitle} badge={item.badge} route={item.route}/>
    //     })
    // }

    // makeGrid(items){
    //     return <AsymmetricGrid items={items} column_count={3} column_width={"2rem"} column_width={"20rem"}/>
    // }

    handleLoadMore(count, offset){
        return fetchPostList(count, offset).then(
            (resolve) => {
                // var temp = this.state.items
                return resolve.map((item, index, array) => {
                    return {
                        id: item.id, 
                        img: item.cover_img, 
                        caption_title: item.title,
                        caption_subtitle: item.subtitle,
                        title: item.title,
                        subtitle: item.subtitle
                    }
                })
            }
        ).then((resolve) => {
            return resolve.map((item, index, array) => {
                return <Gallery1 uuid={index} id={item.id} catergory={item.catergory} img={item.img} caption_title={item.caption_title} caption_subtitle={item.caption_subtitle} title={item.caption_title} subtitle={item.caption_subtitle} badge={item.badge} route={item.route}/>
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
                    {/* <InfiniteScroller count_all={fetchPostsCountAll().then((response) => {return response.count})} load_request={this.handleLoadMore} grid_adapter={this.adapter}/> */}
                    <GalleryList countAll={fetchPostsCountAll().then((response) => {return response.count})} loadrequest={fetchPostList} route="post"/>
                </div>
            </div>
        );
    }
}

export default PostListPage;