import * as React from "react"

export interface IProps {
    data: any[],
    config: any[],
    onRemove: any;
}

export interface IState {
}

export default class DataGrid extends React.Component<IProps, IState> {
    config: any[];
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
                            {(this.props.config || []).map((head, iidx) => {
                                return <th key={iidx}>{head.title != undefined ? head.title : head.key.toUpperCase()}</th>
                            })}

                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>{
                        this.props.data.map((row, idx) => {
                            return <tr key={row.id}>
                                {(this.props.config || []).map(({ key, type }, iidx) => {
                                    {
                                        let height = 36;
                                        switch (type) {
                                            case 'image':
                                                return <td key={iidx}><img height={height} src={row[key]} /> </td>
                                            case 'number':
                                                return <td key={iidx}><input height={height} type="number" className="form-control" defaultValue={row[key]} /> </td>
                                            default:
                                                return <td key={iidx}>{row[key]}</td>
                                        }
                                    }
                                })}

                                <td>
                                    <button type="button" onClick={_ => this.props.onRemove(row.id)} className="btn btn-danger">Remove</button>
                                </td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>

            </div>
        )
    }
}
