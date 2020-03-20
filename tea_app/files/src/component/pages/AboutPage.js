import React from 'react'
import {useSpring} from 'react-spring'
import {AnimateNumber} from '../animate/Animate'

function AboutPage(props){
    return (
        <div>
            <div style={{paddingTop: "3rem"}}></div>
            <AnimateNumber number={5}/>
        </div>
    )
}

export default AboutPage