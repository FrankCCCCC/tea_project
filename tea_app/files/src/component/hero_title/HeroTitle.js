import React from 'react'
import {hero_title_home, hero_paragraph_home} from '../theme/text';
import {hero_title_style, hero_paragraph_style} from '../theme/font'
import Color from '../theme/color'

// @title = 'title string'
// @paragraph = 'paragraph string'

function HeroTitle(props){
    return (
        <div class="jumbotron jumbotron-fluid" data-aos="fade-up" style={{backgroundColor: Color.blueDark, textAlign: "center", margin: "0px"}}>
            <div class="container">
                <h1 class="display-4" style={hero_title_style}><strong>{props.title}</strong></h1>
                <p class="lead" style={hero_paragraph_style}><strong>{props.paragraph}</strong></p>
            </div>

        </div>
    );
}

export default HeroTitle;