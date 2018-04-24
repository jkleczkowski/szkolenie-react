import React, { Component } from 'react';
import PropsType from 'prop-types';
import GalleryItem from './GalleryItem';

class GalleryContainer extends Component {
    static propTypes = {
        data: PropsType.array.isRequired
    };

    constructor(props) {
        super(props);

        this.state = { currnetUrl: this.props.data[0] }
        this.style = {
            border: '1px solid silver',
            margin: 20,
        }
        this.flex = { display: 'flex' }
        this.imageStyle = { ...this.style, height: '400px' };
    }
    selectItem(url) {
        console.log(url);
        this.setState({ currnetUrl: url });
    }
    render() {
        return (<div>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={this.props.data.length}><img style={this.imageStyle} src={this.state.currnetUrl} /></td>
                    </tr>
                    <tr>
                        {
                            this.props.data.map((gi, idx) => {
                                return <td key={idx} style={this.style}> <GalleryItem imageurl={gi} onSelect={url => { this.selectItem(url) }} /></td>
                            })
                        }
                    </tr>
                </tbody>
            </table>
        </div >)
    }
}

export default GalleryContainer;