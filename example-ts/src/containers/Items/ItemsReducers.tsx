import * as c from "../../utils/contrans";

export function itemsReducer(state = { data: [1, 2, 3] }, action: any): any {
    switch (action.type) {
        case c.ADD_ITEM:
            //debugger;
            return { ...state, data: [...state.data, action.payload] };
        //break;

        default:
            return state;
        //break;
    }
}