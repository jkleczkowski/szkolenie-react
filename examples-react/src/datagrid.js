import React, { Component } from 'react';

class DataGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'items list'
        }
    }
    componentDidMount() {
        // this.rerender();
    }
    rerender() {
        this.setState({ title: 'new title ' + Date.now() })
        setTimeout(() => {
            this.rerender()
        }, 1000)
    }
    render() {
        console.log('render')
        return <div>
            <h2>{this.state.title}</h2>
            <ul>
                {this.props.data.map(({ name, phone }, idx) => {
                    return <li key={idx}>{name} (tel: {phone}) <button onClick={() => { this.props.onRemove(phone,idx) }}>Remove</button></li>
                })}

            </ul>
        </div>
    }
}

export default DataGrid;