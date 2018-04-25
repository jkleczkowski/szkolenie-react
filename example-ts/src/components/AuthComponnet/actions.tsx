import axios from 'axios';
import * as c from '../../utils/contrans';
import { Settings } from '../../Settings';

export interface AuthDataInterface {
    username: string;
    password: string;
}

export function logIn(value: AuthDataInterface) {
    return function (dispatch: any) {
        axios.post(Settings.LOGIN_END_POINT, value)
            .then((resp) => {
                if (resp.data.ok) dispatch({ type: c.USER_LOGGED })
                else alert(JSON.stringify(resp.data))
            })
    }
}