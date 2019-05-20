import React, { Component } from 'react';
import api from './Api';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class UpdateUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            picture:"",
            birthdate: ""
        }

    }

    firstnameUpdate(event){
        this.setState({ firstname: event.target.value});
    }
    lastnameUpdate(event){
        this.setState({ lastname: event.target.value});
    }
    birthdateUpdate(event){
        this.setState({ birthdate: event.target.value});
    }
    pictureUpdate(event){
        this.setState({ picture: event.target.value});
    }
    submitForm(event){
        event.preventDefault()
        api.updateUser(this.state.firstname,this.state.lastname,this.state.birthdate,this.state.picture)
        console.log('hey')
      }

    render() {
        return (
            <div className="container updateuser">
                <form onSubmit={this.submitForm.bind(this)}>

                    <TextField label="Firstname"
                        value={this.state.firstname}
                        onChange={this.firstnameUpdate.bind(this)}
                    /><br />

                    <TextField label="Lastname" 
                        value={this.state.lastname}
                        onChange={this.lastnameUpdate.bind(this)} 
                    /><br />

                    <TextField label="Picture" 
                        value={this.state.picture}
                        onChange={this.pictureUpdate.bind(this)} 
                    /><br />

                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        value={this.state.birthdate}
                        onChange={this.birthdateUpdate.bind(this)} 
                        InputLabelProps={{
                        shrink: true,
                        }}
                    /><br />

                    <Button type="submit" variant="contained" >
                        Update
                    </Button>
                </form>
                
            </div>
        )
    }
}
