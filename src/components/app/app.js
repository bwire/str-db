import React, { Component } from 'react'

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemDetails, { Record } from '../item-details/item-details'
import SwapiService from '../../services/swapi-service'


import './app.css'
import Row from '../row/row';

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
    const { getPerson , getStarship, getPersonImage, getStarshipImage } = this.swapiService;
    const personDetails = (
      <div className="col-md-6">
        <ItemDetails 
          itemId = { 3 } 
          getData = { getPerson } 
          getImageUrl = { getPersonImage }
        >
          <Record name = 'gender' label = 'Gender' />
          <Record name = 'birthYear' label = 'Year' />
          <Record name = 'eyeColor' label = 'Eyes' />
        </ItemDetails>
      </div>
    );

    const starshipDetails = (
      <div className="col-md-6">
        <ItemDetails 
          itemId = { 5 } 
          getData = { getStarship } 
          getImageUrl = { getStarshipImage }
        >
          <Record name = 'model' label = 'Model' />
          <Record name = 'manufacturer' label = 'Manufacturer' />
          <Record name = 'cargoCapacity' label = 'Cargo' />
        </ItemDetails>
      </div>
    );

    return(
      <div className="stardb-app">
        <Header />
        { planet }
        <button className="toggle-planet btn btn-warning btn-lg" onClick={ this.toggleRandomPlanet }>
          Toggle Random Planet
        </button>
        <Row
          left = { personDetails}
          right = { starshipDetails }
        />
      </div>
    );
  }
};

