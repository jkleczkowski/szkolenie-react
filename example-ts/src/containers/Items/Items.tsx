import * as React from "react"
import DataGrid from '../../coponents/DataGrid'
import { connect } from "react-redux";
import * as c from "../../utils/contrans";
import * as actions from './actions';

export interface IProps {
    data: any[],
    config: Array<any>,
    addItem: any,
    removeItem: any,
    fetchItems: any
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
            <div className="row">
                <div className="col-3"> search    </div>
                <div className="col-9"> {/* <button onClick={this.props.addItem.bind(this)}>Add Item</button> */}
                    <DataGrid data={this.props.data} onRemove={this.props.removeItem} config={this.props.config} /> </div>

            </div>
        )
    }
    public componentDidMount() {
        this.props.fetchItems();
    }
}

export default connect(
    (store: any) => { return { ...store.itemsReducer } },
    (dispatch) => {
        return {
            fetchItems() {
                return dispatch(actions.fetchItems())
            },
            addItem() {
                return dispatch({ type: c.ADD_ITEM, payload: Date.now() });
            },
            removeItem(id: any) {
                return dispatch({ type: c.DEL_ITEM, payload: id });
            }
        }
    }
)(Items)