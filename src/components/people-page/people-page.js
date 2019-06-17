import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service'
import Row from '../row/row';
import ErrorBoundary from '../error-boundary/error-boundary';

import './people-page.css'

export default class PeoplePage extends Component {
  state = {
    selectedPerson: "1"
  };
  
  swapiService = new SwapiService();

  leftBlock = (
    <div className="col-md-6">
      <ItemList onItemSelected={ (person) => this.onPersonSelected(person) }>
        { ({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})` }
      </ItemList> 
    </div>
  );

  rightBlock = () => (
    <div className="col-md-6">
      <ItemDetails 
        itemId={ this.state.selectedPerson } 
        getData = { this.swapiService.getPerson } 
        getImageUrl = { this.swapiService.getPersonImage } />
    </div>
  );

  onPersonSelected = (selectedPerson) => {
    this.setState({
      selectedPerson
    });
  }

  render() {
    return (
      <ErrorBoundary>
        <Row left = { this.leftBlock } right = { this.rightBlock() } />
      </ErrorBoundary>
    )
  };
}