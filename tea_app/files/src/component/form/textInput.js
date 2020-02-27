import React from 'react';
import ShoppingList from '../shoppingList/ShoppingList'
import {font_style} from '../theme/font';
// import {infoSetInfo, infoGetState} from  '../redux/action'
// import {cart_store, info_store} from '../redux/store'
// import cart_store from '../redux/store'

/**
 * @param {string} placeholder - The hint message to display in the text field before typing
 * @param {string} input_name - Name of the input field
 * @param {string} label - Label for the input field
 * @param {function} handle_on_change - Function to call when the input field changes
 * @param {string} pattern - The regex pattern to match the input
 * @param {string} invalid_feedback - The error message when the input is invalid
 */

function TextInput(props){
    let for_id = `validation_${props.input_name}`
    // console.log(props.pattern)
    return (
        <div>
            <label for={for_id}>{props.label}</label>
            <input type="text" name={props.input_name} pattern={props.pattern} class="form-control" id={for_id} onChange={props.handle_on_change} placeholder={props.placeholder} required/>
            <div class="invalid-feedback">{props.invalid_feedback}</div>
        </div>
    )
}

export default TextInput