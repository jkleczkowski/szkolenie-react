import * as React from "react"
import DataGrid from '../../components/DataGrid'
import { connect } from "react-redux";
import * as c from "../../utils/contrans";
import * as actions from './actions';

export interface IProps {
    data: any[],
    config: any[],
    addWorker: any,
    removeWorker: any,
    fetchWorkers: any
}

export interface IState { }

class Workers extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.state = { anything: false }
    }

    public render() {
        return (
            <div><DataGrid data={this.props.data} onRemove={this.props.removeWorker} config={this.props.config} /></div>
        )
    }
    public componentDidMount() {
        this.props.fetchWorkers();
    }
}

export default connect(
    (store: any) => { return { ...store.workersReducer } },
    (dispatch) => {
        return {
            fetchWorkers() {
                return dispatch(actions.fetchWorkers())
            },
            addWorker() {
                return dispatch({ type: c.ADD_WORKER, payload: Date.now() });
            },
            removeWorker(id: any) {
                return dispatch(actions.removeWorker(id))
                //return dispatch({ type: c.DEL_WORKER, payload: id });
            }
        }
    }
)(Workers)