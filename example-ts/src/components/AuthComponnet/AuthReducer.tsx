import * as c from "../../utils/contrans";

interface IInitState {
    access: boolean
}
const initState: IInitState = {
    access: false
};


export function authReducer(state = initState, action: any): any {
    switch (action.type) {
        case c.LOG_IN:
            debugger;

        default:
            return state;
        //break;
    }
}