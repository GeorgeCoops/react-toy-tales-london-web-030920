import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: '',
    image: ''
  }

  apiHeaders = {
    "Content-type": "application/json",
    Accept: "application/json",
  };

  post = (url, quote) => {
    return fetch(url, {
      method: "POST",
      headers: this.apiHeaders,
      body: JSON.stringify(quote),
    }).then((resp) => resp.json());
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.post('http://localhost:3000/toys', this.state).then((resp) => {
      this.props.getToys()
    });
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit} >
          <h3>Create a toy!</h3>
          <input onChange={this.handleChange} value={this.state.name} type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={this.handleChange} type="text" name="image" placeholder="Enter a toy's image URL..." value={this.state.image} className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
