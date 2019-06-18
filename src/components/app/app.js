import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import PeoplePage from '../people-page/people-page';
import { SwapiServiceProvider } from '../swapi-service-context'

import './app.css'

export default class App extends Component {
  state = {
    showRandomPlanet: false
  };

  swapiService = new SwapiService();

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    return(
      <SwapiServiceProvider value = { this.swapiService } >
        <div className="stardb-app">
          <Header />
          { planet }
          <button className="toggle-planet btn btn-warning btn-lg" onClick={ this.toggleRandomPlanet }>
            Toggle Random Planet
          </button>
          <PeoplePage />
        </div>
      </SwapiServiceProvider>
    );
  }
};

