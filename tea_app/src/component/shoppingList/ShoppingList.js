import React from 'react'
import {cartSubscribe, cartGetState} from '../redux/action'
import {font_style} from '../theme/font'
const Color = require('../theme/color')

class ShoppingList extends React.Component{
    constructor(props){
        super(props)
        this.handleShoppingListChange = this.handleShoppingListChange.bind(this)
        cartSubscribe(this.handleShoppingListChange)

        this.itemStyle = {
            display: 'table',
            overflow: 'hidden',
            color: 'grey',
            fontFamily: font_style.fontFamily,
            width:'100%',
            minHeight: "3rem",
            margin: "1rem",
            // backgroundColor: Color.colorBlueDark,
            // border: '3px solid', 
            // borderColor: Color.colorBlueDark, 
            borderRadius: '5px'
        }

        this.state = {
            cart: [],
            list_content: [],
            is_need_update: false
        }
    }

    makeEmptyList(){
        return(
            <div style={this.itemStyle}>尚無商品</div>
        )
    }

    makeListItem(name, img, quantity) {
        return (
            <div>
                <div style={this.itemStyle}>
                    <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                        <div class="d-flex align-items-center">
                            
                        <div style={{backgroundImage: `url(${img})`, width: "5rem", height: "5rem", borderRadius: "4px", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
                            <div class='flex-fill' style={{marginLeft: '1rem'}}>{name}</div>
                            <div class='flex-fill'>{quantity}</div>
                        </div>
                    </div>
                    
                </div>
                <div style={{width: '100%', height: '0.1rem', backgroundColor: 'grey'}}></div>
            </div>
            
        )
    }

    mapStoreCartToList(cart){
        if(cart.length > 0){
            return cart.map((item, index, array) => {
                return this.makeListItem(item.name, item.img, item.quantity)
            })
        }else{
            return this.makeEmptyList
        }
    }

    handleShoppingListChange(){
        console.log(this.state)
        let store_cart = cartGetState().cart
        this.setState({
            cart: store_cart,
            list_content: this.mapStoreCartToList(store_cart)
        })
        console.log(this.state)
    }

    componentDidMount(){
        
        console.log(this.state)
        let store_cart = cartGetState().cart
        this.setState({
            cart: store_cart,
            list_content: this.mapStoreCartToList(store_cart)
        })
        console.log(this.state)
    }

    componentDidUpdate(){

    }

    render(){
        return (
            <div>
                {this.state.list_content}
                
            </div>
        )
    }
}

export default ShoppingList