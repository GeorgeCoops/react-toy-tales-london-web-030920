import React, { Component } from 'react';

class ToyCard extends Component {

  apiHeaders = {
    "Content-type": "application/json",
    Accept: "application/json",
  };  
  
  handleDelete = (toyID) => {
    fetch(`http://localhost:3000/toys/${toyID}`, {
      method: 'DELETE'
    }).then(this.props.getToys)
  }

  handleLike = (toy) => {
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: 'PATCH', 
      headers: this.apiHeaders,
      body: JSON.stringify({likes: toy.likes += 1})
    }).then(this.props.getToys)
  }

  render() {
    const toy = this.props.toy
    return (
      <div className="card">
        <h2>{toy.name}</h2>
        <img src={toy.image} alt={toy.name} className="toy-avatar" />
        <p>{toy.likes} Likes </p>
        <button className="like-btn" onClick={() => this.handleLike(toy)}>Like {'<3'}</button>
        <button className="del-btn" onClick={() => this.handleDelete(toy.id)}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
