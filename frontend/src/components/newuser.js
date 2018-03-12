import React, { Component } from 'react';
import '../App.css';

export default class Newuser extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: props.newuser.name,
            age: props.newuser.age,
            title: props.newuser.title,
            project: props.newuser.project
        };
        this.handleName = this.handleName.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleProject = this.handleProject.bind(this);
        this.addHandler = props.handleChange;
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleAge(e) {
        this.setState({
            age: e.target.value
        })
    }

    handleTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleProject(e) {
        this.setState({
            project: e.target.value
        })
    }

    render() {
        return (
            <div>
                <p>Add a new user</p>
                Name: <input onChange={this.handleName} value={this.state.name}/><br/>
                Age: <input onChange={this.handleAge} value={this.state.age}/><br/>
                Title: <input onChange={this.handleTitle} value={this.state.title}/><br/>
                Project: <input onChange={this.handleProject} value={this.state.project}/><br/>
                <button onClick={() => this.addHandler(this.state)}>Add User</button>
            </div>
        );
    }
}