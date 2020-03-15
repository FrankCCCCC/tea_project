import React from 'react';

import Color from '../theme/color'
import Slider from '../slider/Slider'
import HeroTitle from '../hero_title/HeroTitle'
import Gallery from '../gallery/Gallery'
import Banner from '../banner/Banner'
import Carousel from '../carousel/Carousel'
import {fetchAppDataByProperty} from '../fetch/fetchAppData'
import LoadingPage from '../pages/LoadingPage'

import {hero_title_home, hero_paragraph_home} from '../theme/text';

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            is_loaded: false
        }
    }

    fetchLoader(){
        let loadSlider = fetchAppDataByProperty('home_slider').then(
            (resolve) => {
                // console.log(resolve)
                this.setState({
                    sliderInput: resolve[0].data
                })
            }
        ).catch(
            (reject) => {
                console.log(reject)
            }
        )

        let loadGallery = fetchAppDataByProperty('home_gallery').then(
            (resolve) => {
                // console.log(resolve)
                this.setState({
                    galleryInput: resolve[0].data
                })
            }
        ).catch(
            (reject) => {
                console.log(reject)
            }
        )

        return [loadSlider, loadGallery]
    }

    componentDidMount(){
        Promise.all(this.fetchLoader()).then(
            (resolve) => {
                this.setState({
                    is_loaded: true
                })
            }
        ).catch(
            (reject) => {
                console.log(reject)
            }
        )
    }

    render(){
        return (
        <div>
            {this.state.is_loaded?
                <div>
                    <Slider sliderInput = {this.state.sliderInput} is_show_indicator = {true} is_show_control = {true}/>
                    <div class="container" style={{margin: "2rem"}}>
                        <Banner media="http://localhost:5000/img/tea_tree.jpg" backgroundColor="rgba(150,150,150,1)" html_content={<h3 style={{color: Color.blueDark}}>"賣茶葉賺大錢的方法也不是沒有，但是茶葉這東西，生我養我的，我做不到"</h3>}/>
                    </div>
                    
                    <HeroTitle title={hero_title_home} paragraph={hero_paragraph_home}/>
                    <div class="container">
                        <Gallery galleryInput={this.state.galleryInput} route="farmer"/>
                    </div>
                </div> :
                <LoadingPage/>
            }
        </div>
        );
    }
}

export default HomePage;
