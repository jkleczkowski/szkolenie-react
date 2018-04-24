import * as React from "react"

export interface IProps {
    data: any[]
}

export interface IState {
}

export default class DataGrid extends React.Component<IProps, IState> {
    config: any[];
    constructor(props: IProps) {
        super(props)

        this.state = {
        }
        this.config = [
            { key: 'title' },
            { key: 'price' },
            { key: 'category' },
            { key: 'imgSrc', title: 'IMAGE', type: 'image' }]
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            {this.config.map((citem, iidx) => {
                                return <th key={iidx}>{citem.title != undefined ? citem.title : citem.key}</th>
                            })}

                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>{
                        this.props.data.map((row, idx) => {
                            return <tr key={row.id}>
                                {this.config.map(({ key, type }, iidx) => {
                                    {
                                        switch (type) {
                                            case 'image':
                                                return <td key={iidx}><img height="48" src={row[key]} /> </td>
                                            default:
                                                return <td key={iidx}>{row[key]}</td>
                                        }
                                    }
                                })}

                                <td>
                                    <button type="button" onClick={() => { console.log(this) }} className="btn btn-success">act1</button>
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
