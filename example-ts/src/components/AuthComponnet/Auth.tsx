import * as React from "react"
import { connect } from "react-redux";
export interface IProps { children?: React.ReactNode }
import * as c from "../../utils/contrans";
export interface IState { }

class AuthComponent extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.state = {}
    }
    sendForm(evt: any) {
        evt.preventDefault();
        //this.authModal.current.toggle();
        const { username: { value: username }, password: { value: password } } = evt.target;
        console.log(username, password);
        debugger;
    }
    public render() {
        return (
            <div><form className="form-inline" onSubmit={this.sendForm.bind(this)}>
                <input className="form-control mr-2"
                    type="email"
                    name="username"
                    defaultValue={'admin@localhost'}
                    placeholder="username" />
                <input className="form-control mr-2"
                    type="password"
                    name="password"
                    defaultValue={'admin'}
                    placeholder="password" />
                <button className="btn btn-primary"> send </button>
            </form></div>
        )
    }
}
export default connect(
    (store: any) => { return { ...store.authReducer } },
    (dispatch) => {
        return {

            logIn() {
                return dispatch({ type: c.LOG_IN, payload: {} });
            }
        }
    }
)(AuthComponent)