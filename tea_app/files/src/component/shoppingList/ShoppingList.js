import React from 'react'
import {cartSubscribe, cartGetState, cartDeleteItem} from '../redux/action'
import {font_style} from '../theme/font'
import Color from '../theme/color'
import {PillBadge} from '../badge/Badge'
import deleteLogo from '../img/x-grey.svg'

class ShoppingList extends React.Component{
    constructor(props){
        super(props)
        this.handleShoppingListChange = this.handleShoppingListChange.bind(this)
        this.handleShoppingItemDelete = this.handleShoppingItemDelete.bind(this)
        cartSubscribe(this.handleShoppingListChange)

        this.itemStyle = {
            display: 'table',
            overflow: 'hidden',
            color: 'grey',
            fontFamily: font_style.fontFamily,
            width:'100%',
            minHeight: "3rem",
            margin: "1rem",
            // backgroundColor: Color.blueDark,
            // border: '3px solid', 
            // borderColor: Color.blueDark, 
            borderRadius: '5px'
        }

        this.state = {
            cart: [],
            list_content: [],
            total_price: 0,
            items_number: 0,
            is_need_update: false
        }
    }

    makeEmptyList(){
        return(
            <div style={this.itemStyle}>尚無商品</div>
        )
    }

    makeListItem(list_id, name, img, quantity, price) {
        return (
            <div class="d-flex align-items-center justify-content-between"  style={{marginBottom: "1rem"}}>
                <div style={{backgroundImage: `url(${img})`, width: "5rem", height: "5rem", borderRadius: "4px", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
                <div class='flex-fill' style={{marginLeft: '1rem', color: Color.grey, fontSize: '1.3rem', fontWeight: 'bold', width: '50%'}}>{name}
                    <div style={{color: Color.white}}><PillBadge color={Color.yellowHightLight} text={"預售"}/></div>
                </div>
                <div class='flex-fill' style={{textAlign:"right", width: '20%'}}>{quantity}</div>
                <div class='flex-fill' style={{textAlign:"right", width: '20%'}}>{`${price} $`}</div>
                
                <div class='flex-fill' style={{textAlign:"right", width: '10%'}}>
                    <button onClick={this.handleShoppingItemDelete} style={{backgroundColor: "rgba(1,1,1,0)", border: "0px"}}>
                        <a><img src={deleteLogo} style={{width:"1rem"}} list_id={list_id}></img></a>
                    </button>
                </div>
            </div>
            // {/* <div style={{width: '10%', height: '0.1rem', backgroundColor: Color.greyLight}}></div> */}
        )
    }

    makeListSum(total_number, total_price){
        return (
            <div>
                <div class="d-flex align-items-center justify-content-between"  style={{marginBottom: "1rem"}}>
                    <div class='flex-fill' style={{textAlign:"left", width: '20%', fontSize: '1.2rem', fontWeight: "bold", marginLeft: "1rem"}}>{`小計`}</div>
                    <div class='flex-fill' style={{textAlign:"right", width: '20%', fontSize: '1.2rem', fontWeight: "bold"}}>{`${total_price} $`}</div>
                </div>
                {/* <div style={{width: '10%', height: '0.1rem', backgroundColor: Color.greyLight}}></div> */}
            </div>
        )
    }

    mapStoreCartToList(cart){
        if(cart.length > 0){
            let total_number = this.countStoreCartToTotalNumber(cart)
            let total_price = this.calculateStoreCartToTotalPrice(cart)
            let list = cart.map((item, index, array) => {
                return this.makeListItem(index, item.name, item.img, item.quantity, item.price)
            })
            let sum = this.makeListSum(total_number, total_price)
            return (
                <div>
                    {list}
                    {sum}
                </div>
            )
        }else{
            let list = this.makeEmptyList()
            let sum = this.makeListSum(0 ,0)
            return (
                <div>
                    {list}
                    {sum}
                </div>
            )
        }
    }

    calculateStoreCartToTotalPrice(cart){
        if(cart.length > 0){
            let l = cart.length
            let total_price = 0
            for(let i=0; i<l; i++){
                total_price += cart[i].price * cart[i].quantity
            }
            return total_price
        }else{
            return 0
        }
    }

    countStoreCartToTotalNumber(cart){
        if(cart.length > 0){
            let l = cart.length
            let total_number = 0
            for(let i=0; i<l; i++){
                total_number += cart[i].quantity
            }
            return total_number
        }else{
            return 0
        }
    }

    handleShoppingListChange(){
        console.log(this.state)
        let store_cart = cartGetState().cart
        this.setState({
            cart: store_cart,
            list_content: this.mapStoreCartToList(store_cart),
            total_number: this.countStoreCartToTotalNumber(store_cart),
            total_price: this.calculateStoreCartToTotalPrice(store_cart)
        })
        console.log(this.state)
    }

    handleShoppingItemDelete(event){
        console.log(event.target)
        console.log(Number(event.target.getAttribute('list_id')))
        cartDeleteItem(Number(event.target.getAttribute('list_id')))
    }

    componentDidMount(){
        console.log(this.state)
        let store_cart = cartGetState().cart
        this.setState({
            cart: store_cart,
            list_content: this.mapStoreCartToList(store_cart),
            total_number: this.countStoreCartToTotalNumber(store_cart),
            total_price: this.calculateStoreCartToTotalPrice(store_cart)
        })
        console.log(this.state)
    }

    componentDidUpdate(){

    }

    render(){
        return (
            <div>
                <div style={this.itemStyle}>
                    <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                        {this.state.list_content}        
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoppingList