import React from 'react';
import {font_style} from '../theme/font';
import Color from '../theme/color'

/**
 * @param {String} placeholder - The hint message to display in the text field before typing
 * @param {String} input_name - Name of the input field
 * @param {String} label - Label for the input field
 * @param {Function} handle_on_change - Function to call when the input field changes
 * @param {String} pattern - The regex pattern to match the input
 * @param {String} invalid_feedback - The error message when the input is invalid
 * @param {Boolean} is_required - Whether add required field tag
 */

function TextInput(props){
    let for_id = `validation_${props.input_name}`
    // console.log(props.pattern)
    if(props.is_required){
        return (
            <div>
                <label for={for_id} style={{fontFamily: font_style.fontFamily, color: Color.greyDark, fontWeight: "bold"}}>{props.label}</label>
                <input style={{border: `1px solid ${Color.greenDark}`}} type="text" name={props.input_name} pattern={props.pattern} class="form-control" id={for_id} onChange={props.handle_on_change} placeholder={props.placeholder} required/>
                <div class="invalid-feedback">{props.invalid_feedback}</div>
            </div>
        )
    }else{
        return (
            <div>
                <label for={for_id} style={{fontFamily: font_style.fontFamily, color: Color.greyDark, fontWeight: "bold"}}>{props.label}</label>
                <input style={{border: `1px solid ${Color.greenDark}`}} type="text" name={props.input_name} pattern={props.pattern} class="form-control" id={for_id} onChange={props.handle_on_change} placeholder={props.placeholder}/>
                <div class="invalid-feedback">{props.invalid_feedback}</div>
            </div>
        )
    }
}

export default TextInput