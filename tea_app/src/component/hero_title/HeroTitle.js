import React from 'react'
import {hero_title_home, hero_paragraph_home} from '../theme/text';
import {hero_title_style, hero_paragraph_style} from '../theme/font'

function HeroTitle(props){
    return (
        <div class="jumbotron jumbotron-fluid" data-aos="fade-up" style={{backgroundColor: "rgb(75,75,75)", textAlign: "center"}}>
            <div class="container">
                <h1 class="display-4" style={hero_title_style}><strong>{props.title}</strong></h1>
                <p class="lead" style={hero_paragraph_style}><strong>{props.paragraph}</strong></p>
            </div>

        </div>
    );
}

export default HeroTitle;