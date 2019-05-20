import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Article from './Components/Article';
import Articles from './Components/Articles';
import CreateUser from './Components/CreateUser';
import LogIn from './Components/LogIn';
import Users from './Components/Users';
import NavBar from  './Components/NavBar';
import UpdateUser from './Components/UpdateUser';
import UpdatePassword from './Components/UpdatePassword';
import SingleArticle from './Components/SingleArticle';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component {

  render() {
      return (
        
        
        <Router className="app">
        
          <div className="App">
          
          <NavBar></NavBar>
            <Route exact path="/article" component={Article} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/articles/:id" component={SingleArticle} />
            <Route exact path="/createuser" component={CreateUser} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/user" component={Users} />
            <Route exact path="/updateuser" component={UpdateUser} />  
            <Route  exact path="/updatepassword" component={UpdatePassword} />
          </div> 
          
        </Router>
        
       
      );
  }
  }


export default App;
