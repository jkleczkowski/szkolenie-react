import * as React from "react"
import DataGrid from '../../coponents/DataGrid'
export interface IProps {
    children?: React.ReactNode
}

export interface IState {

}

export default class Items extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.state = {}
    }

    public render() {
        return (

            <div><DataGrid data={[1, 2, 3]} /> </div>
        )
    }
}
