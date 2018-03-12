import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Users from "../containers/users";
import Newuser from "../containers/newuser";
import {getUsers} from "../utils/users";

class App extends Component {
    constructor(props){
        super(props);
        this.gotData = props.gotData;
    }
    componentWillMount(){
        getUsers(this.gotData);
    }

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              Welcome to the example frontend.
            </p>
              <Users/>
              <Newuser/>
          </div>
        );
    }
}

export default App;
