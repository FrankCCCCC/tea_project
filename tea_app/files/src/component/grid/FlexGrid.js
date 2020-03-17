import React from 'react'

/**
 * @param {Object[]} items - Array of elements in asymmetric grid
 * @param {String} flex_direction -
 * @param {String} flex_wrap -
 * @param {String} justify_content -content-
 * @param {String} align_items - 
 * @param {String} align_content - 
 */

class Grid extends React.Component{
    constructor(props){
        super(props)
        if(!Array.isArray(this.props.items)){
            console.log("Error Grid items is not array")
            throw "Error Grid items is not array";
            return -1;
        }
        this.state = {
            items: [],
            flex_direction: "row",
            flex_wrap: "wrap",
            justify_content: "center",
            align_items: "stretch",
            align_content: "stretch"
        }
    }

    componentDidMount(){
        this.setState({
            items: this.props.items,
            flex_direction: this.props.flex_direction === undefined? "row" : this.props.flex_direction,
            flex_wrap: this.props.flex_wrap === undefined? "wrap" : this.props.flex_wrap,
            justify_content: this.props.justify_content === undefined? "center" : this.props.justify_content,
            align_items: this.props.align_items === undefined? "stretch" : this.props.align_items,
            align_content: this.props.align_content === undefined? "stretch" : this.props.align_content
        })
    }

    componentDidUpdate(){
        if(this.state.items.length != this.props.items.length){
            this.setState({
                items: this.props.items,
                flex_direction: this.props.flex_direction === undefined? "row" : this.props.flex_direction,
                flex_wrap: this.props.flex_wrap === undefined? "wrap" : this.props.flex_wrap,
                justify_content: this.props.justify_content === undefined? "center" : this.props.justify_content,
                align_items: this.props.align_items === undefined? "stretch" : this.props.align_items,
                align_content: this.props.align_content === undefined? "stretch" : this.props.align_content
            })
        }
    }

    render(){
        return (
            <div style={{display: "flex", flexDirection: this.state.flex_direction, flexWrap: this.state.flex_wrap, justify_content: this.state.justify_content, alignItems: this.state.align_items, alignContent: this.state.align_content}}>
                {this.state.items}
            </div>
        )
    }
}

export default Grid