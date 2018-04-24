import React, { Component } from 'react';

import './App.css';
import { Welcome } from './Welcome';
import DataGrid from './datagrid';
import GalleryContainer from './gallery/GalleryContainer';

const myName = 'Jacek';

class App extends Component {
  go(e) {
    //    debugger; 
    console.log(e);
  }
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Joe', phone: 1234234 },
        { name: 'Mike', phone: 81234234 },
        { name: 'Amy', phone: 41234234 },
        { name: 'Ele', phone: 34234 },
        { name: 'Zed', phone: 234234 }
      ],
      images : [
        'https://api.emitter.pl/assets/tomato.jpg',
        'https://api.emitter.pl/assets/pumpkin.jpg',
        'https://api.emitter.pl/assets/potatoes.jpg'
        ]
    }
  }
  addItem() {
    const newItem = { name: 'x', phone: Date.now() };
    //console.debug('Addind new item')
    this.setState({ data: [...this.state.data, newItem] });
  }
  removeItem(phone, idx) {
    this.setState({ data: this.state.data.filter(i => i.phone !== phone) })
  }
  render() {
    return (
      <div className="App">
        <Welcome myName={myName} lang={'pl'} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <button onClick={this.addItem.bind(this)}>Add item</button>


          <button onClick={(event) => { this.go(event) }}>Go lambda</button>
          <button onClick={this.go.bind(this)}>Go that</button>
        </p>
        <DataGrid data={this.state.data} onRemove={this.removeItem.bind(this)} />

        <GalleryContainer data={this.state.images} />

      </div>
    );
  }

}

export default App;
