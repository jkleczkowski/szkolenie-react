import axios from 'axios'
import { Settings } from '../../Settings';
import * as c from "../../utils/contrans";
export function fetchWorkers() {
    return function (dispath: any) {
        //TODO: async
        axios
            .get(Settings.WORKERS_END_POINT)
            .then((response) => {
                //debugger;
                dispath({ type: c.FETCH_WORKER_SUCCESS, payload: response.data.data });
            })
    }
}
export function removeWorker(id: any) {
    return function (dispath: any) {
        //TODO: async
        axios
            .delete(`${Settings.WORKERS_END_POINT}/${id}`)
            .then((response) => {
                //debugger;
                dispath(fetchWorkers());
                ;
            }).catch(_ => {
                dispath(fetchWorkers());
            })
    }
}