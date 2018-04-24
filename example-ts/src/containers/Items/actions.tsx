import axios from 'axios'
import { Settings } from '../../Settings';

export function fetchItems() {
    return function (dispath: any) {
        //TODO: async
        axios.get(Settings.ITEMS_END_POINT).then((response) => {
            //debugger;
            dispath({ type: 'X', payload: response.data.data });
        })
    }
}