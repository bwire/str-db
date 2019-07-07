import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service'
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import { SwapiServiceProvider } from '../swapi-service-context'

import './app.css'

export default class App extends Component {
  state = {
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

  render() {
    return(
      <SwapiServiceProvider value = { this.state.swapiService } >
        <Router>
          <div className="stardb-app">
            <Header onServiceChange = { this.onServiceChange } />
            <RandomPlanet />
            <Route path="/" render={ () => <h2>Welcome to Star DB</h2> } exact/>
            <Route path="/people" component={PeoplePage} />
            <Route path="/planets" component={PlanetPage} />
            <Route path="/starships" component={StarshipPage} />
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
};

