import * as React from 'react';
import './App.css';
import Items from './containers/Items'
import Workers from './containers/Workers'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ItemDetails from './containers/Items/ItemDetails';
import ModalGenerator from "./coponents/ModalGenerator/ModalGenerator";

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
                <ModalGenerator buttonLabel={'Log In'} title={'Logging'}>
                  <form className="form-inline">
                    <input className="form-control form-control-sm"
                      type="email"
                      name="username"
                      placeholder="username" />
                    <input className="form-control form-control-sm"
                      type="password"
                      name="password"
                      placeholder="password" />
                    <button className="btn btn-sm btn-primary">
                      log in
                            </button>
                  </form>

                </ModalGenerator>
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
