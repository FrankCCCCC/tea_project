import {cart_init_state,
        info_init_state, 
        action_add_item,
        action_delete_item,
        action_clear_cart,
        action_increase_quantity_by_1,
        action_decrease_quantity_by_1,
        action_set_quantity,
        action_set_info} from './init'
import { combineReducers } from 'redux'

export const cartReducer = (state = cart_init_state, action) => {
    let current_list = []
    let re = {}
    switch(action.type) {
        case(action_add_item): 
            current_list = state.cart
            current_list.push({id: action.id, img: action.img, name: action.name, quantity: action.quantity, price: action.price})
            re = {
                cart: current_list
            }
            return re
        case(action_delete_item):
            current_list = state.cart
            for(let i=0; i<current_list.length; i++){
                console.log(i, Number(action.list_id))
                if(i === Number(action.list_id)){
                    console.log(i, Number(action.list_id))
                    current_list.splice(i, 1);
                }
            }
            
            re = {
                cart: current_list
            }
            console.log(current_list)
            return re
        case(action_clear_cart):
            re = {
                cart: []
            }
            return re
        case(action_increase_quantity_by_1):
            current_list = state.cart
            for(let i=0; i<current_list.length; i++){
                if(i === action.list_id){
                    current_list[i].quantity+=1
                }
            }
            
            re = {
                cart: current_list
            }
            return re
        case(action_decrease_quantity_by_1):
            current_list = state.cart
            for(let i=0; i<current_list.length; i++){
                if(i === action.list_id){
                    current_list[i].quantity-=1
                }
            }
            
            re = {
                cart: current_list
            }
            return re
        case(action_set_quantity):
            current_list = state.cart
            for(let i=0; i<current_list.length; i++){
                if(i === action.list_id){
                    current_list[i].quantity = action.quantity
                }
            }
            
            re = {
                cart: current_list
            }
            return re
        default: 
            return state
    }
}

export const infoReducer = (state = info_init_state, action) => {
    let current_info = state.info
    let re = {}
    console.log(current_info)
    console.log(action)
    switch(action.type){
        case(action_set_info):
            current_info[action.key] = action.value
            re = {
                info: current_info
            }
            return re
        default:
            return state
    }
}

export const combineReducer = combineReducers({cart: cartReducer, info: infoReducer})