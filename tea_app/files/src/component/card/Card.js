import React from 'react'

import {Link} from 'react-router-dom';
import Color from '../theme/color'
import Facebook from '../img/facebook_dark.svg'
import {font_style} from '../theme/font'

class Card extends React.Component {
    constructor(props) {
        super(props)
    }

    makeItem(i, id, img, caption_title, caption_subtitle){
        return (
            // <div key={i} style={{margin: "1rem", backgroundColor: Color.blueDark, borderRadius: "20px", display: "inline-block", boxShadow: "5px 5px 20px grey", minHeight: "5rem", minWidth: "20rem"}}>
                <div key={i} style={{margin: "1rem", background: Color.greenDark, boxShadow: "5px 5px 20px grey", borderRadius: "20px", display: "inline-block"}}>
                <div style={{padding: "3rem", width: "100%", height: "100%"}}>
                    <div>
                        {/* <img src={Facebook}></img> */}
                        <h1 style={{color: Color.white, fontFamily: font_style.fontFamily, fontWeight: "bold", marginBottom: "2px", letterSpacing: "0.3rem"}}>20%</h1>
                    </div>
                    <div style={{marginTop: "1rem", textAlign: "left"}}>
                        <h5 style={{color: Color.white, fontFamily: font_style.fontFamily, fontWeight: "bold", marginBottom: "2px"}}>{caption_title}</h5>
                        <span style={{color: Color.greyLight, fontFamily: font_style.fontFamily, fontSize: "1rem", marginBottom: "2px", textAlign: "right"}}>{caption_subtitle}</span>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {

    }

    render(){
        return (
            <div>
                {this.makeItem(1,1,undefined, "濕度", "濕度", "")}
                {this.makeItem(1,1,undefined, "濕度", "濕度", "")}
                {this.makeItem(1,1,undefined, "濕度", "濕度", "")}
            </div>
        )
    }
}

export default Card