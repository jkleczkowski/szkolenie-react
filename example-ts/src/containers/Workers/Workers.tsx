import * as React from "react"
import DataGrid from '../../coponents/DataGrid'
import { connect } from "react-redux";
import * as c from "../../utils/contrans";
import * as actions from './actions';

export interface IProps {
    data: any[],
    config: any[],
    addItem: any,
    removeItem: any,
    fetchItems: any
}

export interface IState { }

class Workers extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.state = { anything: false }
    }

    public render() {
        return (
            <div><DataGrid data={this.props.data} onRemove={this.props.removeItem} config={this.props.config} /></div>
        )
    }
    public componentDidMount() {
        this.props.fetchItems();
    }
}

export default connect(
    (store: any) => { return { ...store.workersReducer } },
    (dispatch) => {
        return {
            fetchItems() {
                return dispatch(actions.fetchItems())
            },
            addItem() {
                return dispatch({ type: c.ADD_WORKER, payload: Date.now() });
            },
            removeItem(id: any) {
                return dispatch({ type: c.DEL_WORKER, payload: id });
            }
        }
    }
)(Workers)