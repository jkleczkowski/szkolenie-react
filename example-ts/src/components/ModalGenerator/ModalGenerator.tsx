import * as React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export interface IProps {
    children?: React.ReactNode;
    title: string;
    buttonLabel: string;
    acceptBtnLabel?: string;
    cancelBtnLabel?: string;
}

export interface IState {
    modal: boolean
}

export default class ModalGenerator extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.state = { modal: false }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
                    <ModalBody>
                        {this.props.children}
                    </ModalBody>
                    <ModalFooter>
                        {this.props.acceptBtnLabel != undefined ? <Button color="primary" onClick={this.toggle}>{this.props.acceptBtnLabel}</Button> : ''}
                        {this.props.cancelBtnLabel != undefined ? <Button color="secondary" onClick={this.toggle}>{this.props.cancelBtnLabel}</Button> : ''}
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
