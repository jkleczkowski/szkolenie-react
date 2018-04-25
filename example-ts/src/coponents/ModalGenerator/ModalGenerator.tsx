import * as React from "react"
export interface IProps {
    children?: React.ReactNode
}

export interface IState { }

export default class ModalGenerator extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.state = {}
    }

    public render() {
        return (
            <div>{this.props.children} </div>
        )
    }
}