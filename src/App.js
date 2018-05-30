import React, { Component } from 'react';
import './App.css';
import Trash from './components/Trash.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bins: this.getBinsState(),
      points: 0
    };

    this.startGame();
  }

  startGame() {
    setInterval(() => {
      this.setState( {
        bins: this.getBinsState()
      });
    }, 1500);
  }

  getBinsState() {
    let bins = [];
    for (let i = 0; i < 9; i++){
      bins.push({ isTrashVisible: (Math.round(Math.random()) ? true : false )});
    }

    return bins;
  }

  onCatClicked = (catState) => {
    let currentPoints = this.state.points;

    if (catState) {
      this.setState({points: currentPoints += 1});
    } else {
      this.setState({points: currentPoints -= 1});
    }
  }

  render() {
    const bins = this.state.bins.map((bin, index) => {
      return (
        <Trash
          key={`trash-${index}`}
          trashVisibility={bin.isTrashVisible}
          catClicked={this.onCatClicked}
          />
      );
    });

    return (
      <div className="App">
        <section className="overall-data">
          <h1>Litter Patrol</h1>
          <h3>Only pet a cat HEAD, if you pet a Butt, a point will be subtracted</h3>
          <h2>Points: { this.state.points }</h2>
        </section>

        <section className="bins">
          { bins }
        </section>
      </div>
    );
  }
}

export default App;
