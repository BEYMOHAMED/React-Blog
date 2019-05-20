import React, { Component } from 'react';
import api from './Api';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

export default class SingleArticle extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: null
        }

    }
    componentDidMount(){
        var url =  window.location.pathname.split('/').slice(2).join('/');
        api.articleId(url).then(json => {
            this.setState({
                item : json.data
            })
           
        })
        var url =  window.location.pathname.split('/').slice(2).join('/');
        console.log(url);

        

        
    }
    
    render() {
        if (this.state.item === null) {
            return (<div></div>)
        }
        return (
        <div className="singlearticle" >
            <ul key={this.state.item.id}>
                <li className="title" >
                <h2> {this.state.item.title}</h2>    
                </li>
                <li>
                    <b>{this.state.item.ArticleCategory.name}</b>
                </li>
                <li className="content">
                <p> {this.state.item.content}</p><br />
                </li>
                <li>
                    {this.state.item.User.firstname} {this.state.item.User.lastname}
                </li>

            
            </ul>
        </div>
        )
    }
}
