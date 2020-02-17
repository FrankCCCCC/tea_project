import {cart_store, info_store} from './store'
import {action_add_item,
    action_delete_item,
    action_clear_cart,
    action_increase_quantity_by_1,
    action_decrease_quantity_by_1,
    action_set_quantity,
    action_set_info} from './init'

export const cartSubscribe = (funct) => {
    cart_store.subscribe(funct)
}

export const cartAddItem = (id, name, quantity) => {
    cart_store.dispatch({type: action_add_item, id: id, name: name, quantity: quantity})
}

export const cartDeleteItem = (id, name, quantity) => {
    cart_store.dispatch({type: action_delete_item, id: id, name: name})
}

export const cartClearCart = () => {
    cart_store.dispatch({type: action_clear_cart})
}

export const cartIncreaseQuantityBy1 = (id, name) => {
    cart_store.dispatch({type: action_increase_quantity_by_1, id: id, name: name})
}

export const cartDecreaseQuantityBy1 = (id, name) => {
    cart_store.dispatch({type: action_decrease_quantity_by_1, id: id, name: name})
}

export const cartSetQuantity = (id, name, quantity) => {
    cart_store.dispatch({type: action_set_quantity, id: id, name: name, quantity: quantity})
}

export const cartGetState = () => {
    return cart_store.getState()
}

export const infoSetInfo = (key, value) => {
    info_store.dispatch({type: action_set_info, key: key, value: value})
}

export const infoGetState = () => {
    console.log(info_store.getState())
    return info_store.getState()
}

// function test(){
//     console.log(cart_store.getState())
// }

// cart_store.subscribe(test)

// cartAddItem(1, "Test Oolong1", 1)
// cartAddItem(2, "Test Oolong2", 2)
// cartAddItem(3, "Test Oolong3", 3)
// cartDeleteItem(2, "Test Oolong2")
// cartSetQuantity(3, "Test Oolong3", 5)
// cartIncreaseQuantityBy1(1, "Test Oolong1")
// cartDecreaseQuantityBy1(3, "Test Oolong3")
// cartDecreaseQuantityBy1(3, "Test Oolong3")
// cartClearCart()

// cart_store.dispatch({type: action_add_item, id: 1, name: "Test Oolong1", quantity: 1})
// console.log(cart_store.getState())

infoSetInfo('first_name', 'Dai')
console.log(infoGetState())