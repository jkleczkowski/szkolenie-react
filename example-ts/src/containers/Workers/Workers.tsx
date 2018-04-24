import * as React from "react"

export interface IProps { }

export interface IState { }

export default class Workers extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.state = { anything: false }
    }

    public render() {
        return (
            <div>Workers</div>
        )
    }
}
