import React from 'react';
// import InfiniteScroll from 'react-infinite-scroller';
// import Gallery from '../gallery/Gallery'

/**
 * @param {Object[]} items - Array of elements in asymmetric grid
 * @param {Integer} column_count - The number of columns
 * @param {String} column_width - The width of the column
 * @param {String} column_gap - The width of gap between columns
 */

class AsymmetricGrid extends React.Component{
    constructor(props){
        super(props);
        if(!Array.isArray(this.props.items)){
            console.log("Error GalleryInput is not array")
            throw "Error GalleryInput is not array";
            return -1;
        }
        this.state = {
            items: [],
            column_count: 3,
            column_width: "10rem",
            column_gap: "2rem"
        }
    }

    append(){

    }

    componentDidMount(){
        this.setState({
            items: this.props.items,
            column_count: this.props.column_count,
            column_width: this.props.column_width,
            column_gap: this.props.column_gap
        })
    }

    componentDidUpdate(){
        if(this.state.items.length != this.props.items.length){
            this.setState({
                items: this.props.items,
                column_count: this.props.column_count,
                column_width: this.props.column_width,
                column_gap: this.props.column_gap
            })
        }
    }

    render(){
        return (
            <div style={{}}>
                {/* <Gallery galleryInput={this.state.posts} route={this.props.route}/> */}
                <div style={{columnCount: this.state.column_count, columnWidth: this.state.column_width, columnGap: this.state.column_gap}}>
                    {this.state.items}
                </div>
            </div>
        );
    }
}

export default AsymmetricGrid;