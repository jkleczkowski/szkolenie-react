import * as React from "react"

export interface IProps {
    children?: React.ReactNode
}

export interface IState {
}

export default class ItemDetails extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div>ItemDetails</div>
        )
    }
}
