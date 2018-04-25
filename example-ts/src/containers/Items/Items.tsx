import * as React from "react"
import DataGrid from '../../components/DataGrid'
import { connect } from "react-redux";
import * as c from "../../utils/contrans";
import * as actions from './actions';
import ModalGenerator from "../../components/ModalGenerator";
import AddItemFormComponent from "./AddItemComponent";
import Pagination from 'react-js-pagination';
export interface IProps {
    data: any[],
    config: Array<any>,
    addItem: any,
    removeItem: any,
    fetchItems: any,
    total?: number,
    loading?: boolean;
}

export interface IState {

}
export class ItemsFilters {
    constructor(public title = '',
        public priceFrom = 0,
        public category = '',
        public currentPage = 1,
        public itemsPerPage = 5) {
    }
}
class Items extends React.Component<IProps, IState> {
    filters: ItemsFilters;
    constructor(props: IProps) {
        super(props)

        this.state = {}
        this.filters = new ItemsFilters();
        this.props = { ...this.props, loading: true }
        //this.props.removeItem;//.bind(this.filters)
    }
    updateFilters(p, v) {
        //debugger;
        this.filters = { ...this.filters, [p]: v }; //w nawiasah okreslamy ze to jest nazwa parametru
        //this.props = { ...this.props, loading: true }
        this.props.fetchItems(this.filters);
    }
    public render() {
        return (
            <div className="row">
                <div className="col-3"> search    </div>
                <div className="col-9"> {/* <button onClick={this.props.addItem.bind(this)}>Add Item</button> */}

                    <ModalGenerator buttonLabel={'Add Item'} title={'New Item'} acceptBtnLabel={'Save'} cancelBtnLabel={'Cancel'}>
                        <AddItemFormComponent />
                    </ModalGenerator>
                    {(this.props.total || 0) == 0 ? 'No data...' : <DataGrid data={this.props.data} onRemove={(id) => { this.props.removeItem(id, this.filters) }} config={this.props.config} />}
                    {(this.props.total || 0) > 0 ? <Pagination
                        activePage={this.filters.currentPage}
                        itemsCountPerPage={this.filters.itemsPerPage}
                        totalItemsCount={this.props.total}
                        itemClass={'page-item'}
                        linkClass={'page-link'}
                        activeLinkClass={'active'}
                        pageRangeDisplayed={5}
                        onChange={this.updateFilters.bind(this, 'currentPage')}
                    /> : ''}
                </div>
            </div>
        )
    }
    public componentDidMount() {
        this.props.fetchItems(this.filters);
    }
}

export default connect(
    (store: any) => { return { ...store.itemsReducer, ...store.authReducer, } },
    (dispatch) => {
        return {
            fetchItems(filters: ItemsFilters) {
                //debugger; 
                return dispatch(actions.fetchItems(filters))
            },
            addItem() {
                return dispatch({ type: c.ADD_ITEM, payload: Date.now() });
            },
            removeItem(id: any, filters: ItemsFilters) {
                //debugger;
                return dispatch(actions.removeItem(id,filters));
            }
        }
    }
)(Items)