import * as c from "../../utils/contrans";
const initState = {
    data: [
        {
            "name": "Amelia",
            "phone": 98292992,
            "category": "sales",
            "id": "5adf7f1b692240b719faae59"
        }],
    config: [
        { key: 'name', title: 'WORKER' },
        { key: 'phone', title: 'PHONE', type: 'phone' },
        { key: 'category' },
        // { key: 'imgSrc', title: 'IMAGE', type: 'image' }
    ]
};
export function workersReducer(state = initState, action: any): any {
    switch (action.type) {
        case c.ADD_WORKER:
            //debugger;
            return { ...state, data: [...state.data, action.payload] };

        case c.DEL_WORKER:
            //debugger;
            return { ...state, data: state.data.filter(f => f.id != action.payload) };

        case c.FETCH_WORKER_SUCCESS:
            //debugger;
            return { ...state, data: action.payload };
        case 'value':
            return { ...state }
        default:
            return state;
        //break;
    }
}