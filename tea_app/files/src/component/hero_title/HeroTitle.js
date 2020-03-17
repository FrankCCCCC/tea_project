import React from 'react'
import {hero_title_home, hero_paragraph_home} from '../theme/text';
import {font_style, hero_title_style, hero_paragraph_style} from '../theme/font'
import Color from '../theme/color'

/**
 * @param {String} title - The title of the hero object
 * @param {String} paragraph - The paragraph subtitle of the hero object
 */


class HeroTitle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title,
            paragraph: this.props.paragraph
        }
    }

    componentDidMount(){
        this.setState({
            title: this.props.title,
            paragraph: this.props.paragraph
        })
    }

    // componentDidUpdate(){
    //     if(this.state !== this.props){
    //         this.setState({
    //             title: this.props.title,
    //             paragraph: this.props.paragraph
    //         })
    //     }
    // }

    render(){
        return (
            <div class="jumbotron jumbotron-fluid" data-aos="fade-up" style={{backgroundColor: Color.white, textAlign: "left", margin: "0px"}}>
                <div class="container">
                    <h1 class="display-4" style={{fontFamily: font_style.fontFamily, color: Color.greyDark}}><strong>{this.state.title}</strong></h1>
                    <p class="lead" style={{fontFamily: font_style.fontFamily, color: Color.greyDark}}><strong>{this.state.paragraph}</strong></p>
                </div>
            </div>
        );
    }
}
// function HeroTitle(props){
//     return (
//         <div class="jumbotron jumbotron-fluid" data-aos="fade-up" style={{backgroundColor: Color.white, textAlign: "left", margin: "0px"}}>
//             <div class="container">
//                 <h1 class="display-4" style={{fontFamily: font_style.fontFamily, color: Color.greyDark}}><strong>{props.title}</strong></h1>
//                 <p class="lead" style={{fontFamily: font_style.fontFamily, color: Color.greyDark}}><strong>{props.paragraph}</strong></p>
//             </div>
//         </div>
//     );
// }

export default HeroTitle;