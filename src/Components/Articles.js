import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Articles extends Component {
  constructor(props){
    super(props);
    this.state = {
      item : [],
      isLoaded: false
    }
  }
  componentDidMount(){
    fetch()
    .then(res => res.json())
    .then(json =>{
      console.log(json)
      this.setState({
        isLoaded: true,
        items : json.data
      })
    });
  }
  render() {
    
    var {isLoaded, items} = this.state;

    if (!isLoaded){
      return <div> <img src="https://cdn.dribbble.com/users/1093439/screenshots/3156979/d_helix-css-gif-_50fps-selective_-1a.gif" className="loading" /></div>
    }else{
    return (
      
      <div className="container article">
      
            
      { items.reverse().map(item => {
        return (
          <Link to={`/articles/${item.id}`}>
            <ul key={item.id}>
                <li className="title" >
                  <h2> {item.title} </h2>    
                </li>
                <li className="content">
                  <p> {item.content} </p><br />
                </li>
                <li className="author">
                  <span>{item.User.firstname}  {item.User.lastname} <br />{item.ArticleCategory.name} </span> 
                </li>
            </ul>
          </Link>
        
      )}) }
      </div>
    );
  } 
  }
}
