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
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>TITLE</th>
                            <th>PRICE</th>
                            <th>CATEGORY</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>{
                        this.props.data.map((itm, idx) => {
                            return <tr key={itm.id}>
                                <td>{itm.title}</td>
                                <td>{itm.price}</td>
                                <td>{itm.category}</td>
                                <td><button type="button" onClick={()=>{console.log(this)}} className="btn btn-success">act1</button></td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>

            </div>
        )
    }
}
