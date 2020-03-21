import React from 'react'

import {font_style} from '../theme/font'
import Color from '../theme/color'
import Shape from '../theme/Shape'
import X from '../img/x-grey-dark.svg'
import {popUpSubscribe, popUpGetState} from './PopUpAction'
import $ from 'jquery'

/**
 * @param {String} title - The title of the toast
 * @param {String} message - The message of the toast
 * @param {Integer} delay - The display duration for the toast
 * @param {Boolean} is_auto_hide - Whether the toast hide automatically
 * @param {Boolean} is_cancelable - Whether the toast can be canceled manually
 */

// class Alert extends React.Component{
//     constructor(props){
//         super(props)
//     }

//     componentDidMount(){}

//     componentDidUpdate(prevProps, prevState, snapshot){}

//     render(){
//         return(
//             <div aria-live="polite" aria-atomic="true" style={{position: "relative", minHeight: "200px", width: "100%", zIndex: 100}}>
//                 <div style={{position: "absolute", top: "100%", right: "0", width: "30rem"}}>

//                 </div>
//             </div>
//         )
//     }
// }

export function makeAlert(title, message) {
    return (
        // Taost Position
        <div aria-live="polite" aria-atomic="true" style={{position: "relative", minHeight: "200px", width: "100%", zIndex: 100}}>
            <div style={{position: "absolute", top: "100%", right: "1rem", width: "30rem"}}>
                {/* Taost instance */}
                <div class={`alert`} role="alert" style={{color: Color.grey, background: Color.greenLight, borderRadius: Shape.round_corner, boxShadow: `5px 5px 20px ${Color.greenLight}`, fontFamily: font_style.fontFamily, fontSize: "1rem", fontWeight: "bold"}}>
                    <strong>title</strong>message
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <img src={X} style={{width: "0.8rem", height: "0.8rem"}}/>
                    </button>
                </div>
            </div>
        </div>)
}

popUpSubscribe(Alert)

export function Alert(props) {
    let store_content = popUpGetState().pop_ups
    console.log(popUpGetState())
    console.log(store_content)
    let pop_up_list = (<div></div>)
    if(store_content !== undefined && store_content !== []){
        pop_up_list = store_content.map((item, index, array) => {
            return (
                item.pop_up
            )
        })
    }
    return (
        // Taost Position
        <div aria-live="polite" aria-atomic="true" style={{position: "relative", minHeight: "200px", width: "100%", zIndex: 100}}>
            <div style={{position: "absolute", top: "100%", right: "1rem", width: "30rem"}}>
                {/* Taost instance */}
                {pop_up_list}
            </div>
        </div>)
}

Alert.defaultProps = {
    delay: 5000,
    is_auto_hide: true,
    is_cancelable: true
}

// export default Alert