import React from 'react'
import {hero_title_home, hero_paragraph_home} from '../theme/text';
import {hero_style, paragraph_style} from '../theme/font'

function HeroTitle(){
    return (
        <div class="jumbotron jumbotron-fluid" data-aos="fade-up">
            <div class="container">
                <h1 class="display-4" style={hero_style}><strong>{hero_title_home}</strong></h1>
                <p class="lead" style={paragraph_style}><strong>{hero_paragraph_home}</strong></p>
                {/* <h1 class="display-4">{hero_title_home}</h1>
                <h1 class="display-4">Fluid jumbotron</h1>
                <h1 class="display-4" style={{font_family: "monospace", fontColor: "red"}}>Fluid jumbotron</h1>
                <h1 class="display-4" style={font_style}>Fluid jumbotron</h1>
                <h1 class="display-4" style={{font_style, fontColor: "red"}}>Fluid jumbotron</h1> */}
                
            </div>

        </div>
    );
}

export default HeroTitle;