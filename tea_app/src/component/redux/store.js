import {createStore} from 'redux'
import {cartReducer, infoReducer} from './reducer'

var cart_store = createStore(cartReducer)
var info_store = createStore(infoReducer)

window.cart_store = cart_store
window.info_store = info_store

// export {cart_store, info_store}
export default cart_store