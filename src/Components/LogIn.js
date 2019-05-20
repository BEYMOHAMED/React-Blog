import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import api from './Api';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default class LogIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            logged:false
        }

    }
    handleEmailChanged(event) {
        this.setState({ email: event.target.value});
    }
    handlePasswordChanged(event) {
        this.setState({ password: event.target.value});
    }
    submitForm(event) {
        event.preventDefault()
        api.getToken(this.state.email,this.state.password).then((json) => {
        console.log(json)
        this.setState({ logged: true});
        })
    }

    
  render() {
    if(this.state.logged){
     return  <Redirect to="/articles" />
    }else{
    
    return (
      <div className="container login">
      <h1>Welcome back.</h1>
      <p>Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.</p>
      <form onSubmit={this.submitForm.bind(this)}>
        <TextField label="Email" 
        type="email"
        value={this.state.email}
        onChange={this.handleEmailChanged.bind(this)} /><br />
        <TextField label="Password" 
        type="password"
        value={this.state.password}
        onChange={this.handlePasswordChanged.bind(this)} /><br /><br />
        <Button type="submit" variant="contained" className="but" >
             Log In
        </Button>
       
      </form>
      <div className="link"><p>No account?</p><Link to="/createuser" >Click here</Link></div>
      </div>
    )
  }
  }
}
