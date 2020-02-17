import React from 'react'
import {cartSubscribe, cartGetState} from '../redux/action'

class ShoppingList extends React.Component{
    constructor(props){
        super(props)
        this.handleShoppingListChange = this.handleShoppingListChange.bind(this)
        cartSubscribe(this.handleShoppingListChange)

        this.state = {
            cart: []
        }
    }

    handleShoppingListChange(){
        
        this.setState({
            cart: cartGetState()
        })
        console.log(this.state)
    }

    componentDidMount(){

    }

    render(){
        return (
            <div>
                
            </div>
        )
    }
}

export default ShoppingList