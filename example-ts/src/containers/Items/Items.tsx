import * as React from "react"
import DataGrid from '../../coponents/DataGrid'
import { connect } from "react-redux";
export interface IProps {
    data: any[],
    addItem: any
}

export interface IState {

}

class Items extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.state = {}
    }

    public render() {
        return (

            <div><button onClick={this.props.addItem.bind(this)}>Add Item</button><DataGrid data={this.props.data} /> </div>
        )
    }
}

export default connect(
    (store) => { return { ...store } },
    (dispatch) => {
        return {
            addItem() {
                return dispatch({ type: 'ADD_ITEM', payload: Date.now() });
            }
        }
    }
)(Items)