import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from "./components/search-box/search-box.component";

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  onSearchChange = event => {
    this.setState({ 
      searchField: event.target.value
    })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(repsonse => repsonse.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monster'
          handleChange={this.onSearchChange}
        />
        < CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    )
  };
}

export default App;
