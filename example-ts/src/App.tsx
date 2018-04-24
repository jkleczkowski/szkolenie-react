import * as React from 'react';
import './App.css';
import Items from './containers/Items'
import Workers from './containers/Workers'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ItemDetails from './containers/Items/ItemDetails';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav className="navbar navbar-expand bg-danger">
              <div className="nav-item">
                <NavLink className={'nav-link'} activeClassName={'nav-active'}
                  to={'/items'}>items</NavLink>
              </div>
              <div className="nav-item">
                <NavLink className={'nav-link'} activeClassName={'nav-active'}
                  to={'/register'}>register</NavLink>
              </div>
              <div className="nav-item">
                <NavLink className={'nav-link'} activeClassName={'nav-active'}
                  to={'/workers'}>workers</NavLink>
              </div>
              <div>
                auth
              </div>
            </nav>
            <div className="container-fluid">
              <Route exact path="/items" component={Items} />
              <Route exact path="/items/:id" component={ItemDetails} />
              <Route path="/workers" component={Workers} />
              <Route path="/test/:id/:key" render={(params) => {
                console.log(params)
                return <div>test</div>
              }} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
