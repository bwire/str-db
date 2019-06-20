import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service'
import PeoplePage from '../people-page';
import PlanetPage from '../planet-page';
import { SwapiServiceProvider } from '../swapi-service-context'

import './app.css'

export default class App extends Component {
  state = {
    showRandomPlanet: false,
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      }
    });
  };

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
      <SwapiServiceProvider value = { this.state.swapiService } >
        <div className="stardb-app">
          <Header onServiceChange = { this.onServiceChange } />
          { planet }
          <button className="toggle-planet btn btn-warning btn-lg" onClick={ this.toggleRandomPlanet }>
            Toggle Random Planet
          </button>
          <PeoplePage />
          <PlanetPage />
        </div>
      </SwapiServiceProvider>
    );
  }
};

