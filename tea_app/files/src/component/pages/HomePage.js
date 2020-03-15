import React from 'react';

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
                    <Banner/>
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
