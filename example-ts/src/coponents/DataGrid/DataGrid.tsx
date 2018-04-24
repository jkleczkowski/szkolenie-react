import * as React from "react"

export interface IProps {
    data: any[]
}

export interface IState {
}

export default class DataGrid extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div>DataGrid: {JSON.stringify(this.props.data)}</div>
        )
    }
}
