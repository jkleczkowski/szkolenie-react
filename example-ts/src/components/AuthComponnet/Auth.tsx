import * as React from "react"
import { connect } from "react-redux";
import ModalGenerator from "../../components/ModalGenerator";

import * as actions from "./actions";
import { access } from "fs";
export interface IState {

}
export interface IProps {
    children?: React.ReactNode;
    logIn?: any;
    logged?: any;
    access?: boolean;
}
class AuthComponent extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.state = {}

    }
    sendForm(evt: any) {
        evt.preventDefault();
        //this.authModal.current.toggle();
        const { username: { value: username }, password: { value: password } } = evt.target;
        this.props.logIn({ username, password });
        //debugger;
    }
    public render() {
        return (
            <div> {access ?
                <b>Logged In</b> :
                <ModalGenerator buttonLabel={'Log In'} title={'Logging'} >
                    <form className="form-inline" onSubmit={this.sendForm.bind(this)}>
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
                        <button className="btn btn-primary"> LogIn </button>
                    </form>
                </ModalGenerator>}
            </div>
        )
    }
    componentDidMount() {
        this.props.logged();
    }
}
export default connect(
    (store: any) => { return { ...store.authReducer } },
    (dispatch) => {
        return {
            logIn: (value: any) => { dispatch(actions.logIn(value)) },
            logged: () => { dispatch(actions.logged()) }
        }
    }
)(AuthComponent)