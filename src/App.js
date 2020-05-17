import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

// import data from './data'

// TOYTALES 
// -- App
//  -- Header 
//  -- ToyFrom 
//  -- ToyContainer
//    --ToyCard


class App extends React.Component{

  state = {
    display: false,
    data: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  getToys = () => {
    fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(toys => this.setState({data: toys}))
  }

  componentDidMount = () => {
    this.getToys()
  }

  

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm getToys={this.getToys}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.data} getToys={this.getToys}/>
      </>
    );
  }

}

export default App;
