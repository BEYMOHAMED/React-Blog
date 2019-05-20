import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import api from './Api'



export default class Article extends Component {
  constructor(props){
    super(props);
    this.state = {
        title: "",
        content: "",
        article_category_id: ""
    }

}
titleChange(event){
  this.setState({ title: event.target.value});
}
contentChange(event){
  this.setState({ content: event.target.value});
}
categoryChange(event){
  this.setState({ article_category_id: event.target.value});
}
submitForm(event){
  event.preventDefault()
  api.createArticle(this.state.title,this.state.content,this.state.article_category_id)
}
  render() {
    return (
      <div className="container createarticle">
      <form onSubmit={this.submitForm.bind(this)}>

      <TextField label="Title"
      value={this.state.title}
      onChange={this.titleChange.bind(this)}/><br />

      <TextField
          id="filled-textarea"
          label="Content"
          value={this.state.content}
          onChange={this.contentChange.bind(this)}
          margin="normal"
          
      /><br />

      <FormControl >
        <InputLabel htmlFor="age-native-simple">Category</InputLabel>
        <Select
            native
            value={this.state.article_category_id}
            onChange={this.categoryChange.bind(this)}
        >
            <option value="" />
            <option value={1}>Développement</option>
            <option value={2}>Marketing</option>
            <option value={3}>Design</option>
            <option value={4}>Jeux vidéo</option>
            <option value={5}>Sport</option>
            <option value={6}>Musique</option>
            <option value={7}>Autre</option>
        </Select>
      </FormControl><br />

      <Button type="submit" variant="contained" >
       Post
      </Button>
  </form>
  </div>
    )
  }
}
