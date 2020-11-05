import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'a1'
        },
        {
          name: 'Dracula',
          id: 'a2'
        },
        {
          name: 'Zombie',
          id: 'a3'
        },
      ]
    };
  }

  render() {
    return (
      <div className="App" >
        {
          this.state.monsters.map(monster =>
            <h1 key={monster.id}>{monster.name} </h1>
          )
        }
      </div>
    )
  };
}

export default App;
