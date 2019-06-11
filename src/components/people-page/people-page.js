import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service'

import './people-page.css'
import Row from '../row/row';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 1,
    hasError: false
  };
  
  swapiService = new SwapiService;

  leftBlock = (
    <div className="col-md-6">
      <ItemList 
        onItemSelected={ this.onPersonSelected } 
        getData ={ this.swapiService.getAllPeople } 
        renderItem = { this.renderItem }
      /> 
    </div>
  );

  rightBlock = (
    <div className="col-md-6">
      <PersonDetails personId={ this.state.selectedPerson }/>
    </div>
  );

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({
      selectedPerson
    });
  }

  renderItem = ({ name, gender, birthYear }) => {
    return `${name} (${gender}, ${birthYear})`;
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorIndicator />
    };
    
    return <Row left = { this.leftBlock } right = { this.rightBlock } />
  };
}