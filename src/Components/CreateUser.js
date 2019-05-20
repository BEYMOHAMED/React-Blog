import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import api from './Api'


export default class CreateUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            password_verif: ""
        }

    }
    firstnameChange(event){
        this.setState({ firstname: event.target.value});
    }
    lastnameChange(event){
        this.setState({ lastname: event.target.value});
    }
    emailChange(event){
        this.setState({ email: event.target.value});
    }
    passwordChange(event){
        this.setState({ password: event.target.value});
    }
    passVerifChange(event){
        this.setState({ password_verif: event.target.value});
    }
    submitForm(event){
        event.preventDefault()
        api.createUser(this.state.firstname,this.state.lastname,this.state.email,this.state.password,this.state.password_verif).then((json) => {
            console.log(json)
            if(json.status == 201){
                api.getToken(this.state.email,this.state.password)
            }
        })
        }

    render() {
        return (
            <div className="container createuser">
            <form onSubmit={this.submitForm.bind(this)}>

                <TextField label="Firstname"
                value={this.state.firstname}
                onChange={this.firstnameChange.bind(this)}/><br />

                <TextField label="Lastname" 
                value={this.state.lastname}
                onChange={this.lastnameChange.bind(this)} /><br />

                <TextField label="Email" 
                value={this.state.email}
                onChange={this.emailChange.bind(this)}/><br />

                <TextField label="Password" 
                value={this.state.password}
                onChange={this.passwordChange.bind(this)}/><br />

                <TextField label="Password verification" 
                value={this.state.password_verif}
                onChange={this.passVerifChange.bind(this)}/><br />

                <Button type="submit" variant="contained" className="but">
                    Sign In
                </Button>
            </form>
            </div>
        )
    }
}
