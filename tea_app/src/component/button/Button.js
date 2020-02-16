import React from 'react'
import {font_style} from '../theme/font';
const Color = require('../theme/color')

function ButtonPillarBlueDark(props){
    return (
        <button class="btn" style={{fontFamily: font_style.fontFamily, fontSize: "1rem" , width: "7rem", color: "white",backgroundColor: Color.colorBlueDark, borderRadius: "20px"}}>{props.text}</button>
    )
}

export default ButtonPillarBlueDark