import axios from 'axios'
import { Settings } from '../../Settings';
import * as c from "../../utils/contrans";
export function fetchItems() {
    return function (dispath: any) {
        //TODO: async
        axios.get(Settings.WORKERS_END_POINT).then((response) => {
            //debugger;
            dispath({ type: c.FETCH_WORKER_SUCCESS, payload: response.data.data });
        })
    }
}