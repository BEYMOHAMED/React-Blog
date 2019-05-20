import React, { Component } from 'react';
import api from './Api';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class UpdatePassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            password_old: "",
            password_new: "",
            password_new_verif: ""
        }

    }
    oldPassword(event){
        this.setState({ password_old: event.target.value});
    }
    passwordNewChange(event){
        this.setState({ password_new: event.target.value});
    }
    passwordNewVerif(event){
        this.setState({ password_new_verif: event.target.value});
    }
    submitForm(event){
        event.preventDefault()
        api.updatePassword(this.state.password_old,this.state.password_new,this.state.password_new_verif)
      }
    render() {
        return (
            <div className="container updatepassword">
                <form onSubmit={this.submitForm.bind(this)}>

                    <TextField label="Old Password"
                        value={this.state.password_old}
                        onChange={this.oldPassword.bind(this)}
                    /><br />

                    <TextField label="New Password" 
                        type="password"
                        value={this.state.password_new}
                        onChange={this.passwordNewChange.bind(this)} 
                    /><br />

                    <TextField label="Confirm New Password" 
                        type="password"
                        value={this.state.password_new_verif}
                        onChange={this.passwordNewVerif.bind(this)} 
                        
                    /><br />

                    <Button type="submit" variant="contained" >
                        Update
                    </Button>
                </form>
            </div>
        )
    }
}
