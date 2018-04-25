import * as c from "../../utils/contrans";

interface IItem {
    title: string,
    price: number,
    category: string,
    imgSrc: string,
    id: string
}
interface IInitState {
    data: IItem[];
    config: any[];
}
const initState: IInitState = {
    data: [],
    config: [
        { key: 'title' },
        { key: 'price', type: 'number' },
        { key: 'category' },
        { key: 'imgSrc', title: 'IMAGE', type: 'image' }
    ]
};


export function itemsReducer(state = initState, action: any): any {
    switch (action.type) {
        case c.ADD_ITEM:
            //debugger;
            return { ...state, data: [...state.data, action.payload] };

        case c.DEL_ITEM:
            //debugger;
            return { ...state, data: state.data.filter(f => f.id != action.payload) };

        case c.FETCH_ITEM_SUCCESS:
            //debugger;
            return { ...state, data: action.payload.data, total: action.payload.total, loading: false };

        default:
            return state;
        //break;
    }
}