import * as c from "../../utils/contrans";

interface IInitState {
    access: boolean,
    token?: string
}
const initState: IInitState = {
    access: false,
    token: ''
};


export function authReducer(state = initState, action: any): any {
    switch (action.type) {
        case c.LOG_IN:
            //debugger;
            return { ...state, access: true }
        case c.USER_LOGGED:
            //debugger;
            console.log('logged in');
            return { ...state, access: true, token: action.payload }
        case c.USER_LOGGED_OUT:
            //debugger;
            return { ...state, access: false, token: '' }
        default:
            return state;
        //break;
    }
}