import axios from 'axios'
import { Settings } from '../../Settings';
import * as c from "../../utils/contrans";
//import { ItemsFilters } from './Items';
const queryString = require('query-string')
export function fetchItems(filters?: any) {
    return function (dispath: any) {
        //TODO: async
        let q = queryString.stringify(filters);
        //console.log(q);
        //debugger;
        axios.get(`${Settings.ITEMS_END_POINT}?${q}`).then((response) => {
            //debugger;
            dispath({ type: c.FETCH_ITEM_SUCCESS, payload: response.data });
        })
    }
}

export function removeItem(id: any) {
    return function (dispath: any) {
        //TODO: async
        axios
            .delete(`${Settings.ITEMS_END_POINT}/${id}`)
            .then((response) => {
                //debugger;
                dispath(fetchItems());
                ;
            }).catch(_ => {
                dispath(fetchItems());
            })
    }
}