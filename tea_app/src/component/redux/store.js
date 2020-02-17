import {createStore} from 'redux'
import {cartReducer, infoReducer} from './reducer'

var cart_store = createStore(cartReducer)
var info_store = createStore(infoReducer)

export {cart_store, info_store}