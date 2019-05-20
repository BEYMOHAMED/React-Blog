import React, { Component } from 'react';
import api from './Api';
import {Link} from 'react-router-dom';


export default class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:[],
            isLoaded:false
            
            
        }
    }

    componentDidMount(){
      api.getInfo().then((json)=>{
        console.log(json)
          this.setState({
            user:json.data,
            isLoaded:true
            
          })
        });
    }
      render() {

        return (
          <div className="container user">
            <ul>
              <li className="profile"><h1>{this.state.user.firstname} {this.state.user.lastname}</h1><span className="edit-profile"><Link to="/updateuser" >Edit profile</Link></span></li>
              <li><img src="https://juststickers.in/wp-content/uploads/2018/04/saitama.png" className="picture"/></li>
              
              <li>{this.state.user.firstname} {this.state.user.lastname} hasn’t been active on this blog yet. Check back later to see their stories, claps, and highlights.</li>

              <li><Link to="/updatepassword" className="navlink">Update password</Link></li>
              
            </ul>
            
          </div>
        )
      }
    
      }

