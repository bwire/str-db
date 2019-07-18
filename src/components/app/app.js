import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from '../header';
import RandomPlanet from '../random-planet';
import StarshipDetails from '../sw-components/starship-details';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service'
import { PeoplePage, PlanetPage, StarshipPage, SecretPage, LoginPage } from '../pages';
import { SwapiServiceProvider } from '../swapi-service-context'

import './app.css'

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
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
    const { isLoggedIn } = this.state;
    return(
      <SwapiServiceProvider value = { this.state.swapiService } >
        <Router>
          <div className="stardb-app">
            <Header onServiceChange = { this.onServiceChange } />
            <RandomPlanet />
            <Route path="/" render={ () => <h2>Welcome to Star DB</h2> } exact/>
            <Route path="/people/:id?" component={PeoplePage} />
            <Route path="/planets" component={PlanetPage} />
            <Route path="/starships" component={StarshipPage} exact />
            <Route path="/starships/:id" render={
              (info) => {
                return <StarshipDetails itemId={info.match.params.id}/>
              }
            } />
            <Route path="/secret" render={() => { return <SecretPage isLoggedIn = { isLoggedIn }/> }} />
            <Route path="/login" render={() => { return <LoginPage isLoggedIn = { isLoggedIn } onLogin = { this.onLogin }/> }} />
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
};

