import * as React from "react"

export interface IProps {
    children?: React.ReactNode
}

export interface IState {
    anything: boolean
}

export default class Items extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.state = { anything: false }
    }

   public render() {
        return (

            <div>items</div>
        )
    }
}
