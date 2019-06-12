import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service'

import './people-page.css'
import Row from '../row/row';
import ErrorBoundary from '../error-boundary/error-boundary';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 1
  };
  
  swapiService = new SwapiService;

  leftBlock = (
    <div className="col-md-6">
      <ItemList onItemSelected={ this.onPersonSelected } getData ={ this.swapiService.getAllPeople } >
        { ({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})` }
      </ItemList> 
    </div>
  );

  rightBlock = (
    <div className="col-md-6">
      <PersonDetails personId={ this.state.selectedPerson }/>
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
        <Row left = { this.leftBlock } right = { this.rightBlock } />
      </ErrorBoundary>
    )
  };
}