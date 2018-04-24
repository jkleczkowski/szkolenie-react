import React, { Component } from 'react';
import PropsType from 'prop-types';

class GalleryItem extends Component {
    static propTypes = {
        imageurl: PropsType.string.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="gallery-item" ><img src={this.props.imageurl} onClick={() => { this.props.onSelect(this.props.imageurl) }} /> </div>)
    }
}

export default GalleryItem;