import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service'

import './people-page.css'


export default class PeoplePage extends Component {
  state = {
    selectedPerson: 1,
    hasError: false
  };
  
  swapiService = new SwapiService;

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  renderItem = ({ name, gender, birthYear }) => {
    return `${name} (${gender}, ${birthYear})`;
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({
      selectedPerson
    });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorIndicator />
    }; 
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList 
            onItemSelected={ this.onPersonSelected } 
            getData ={ this.swapiService.getAllPeople } 
            renderItem = { this.renderItem }
          /> 
        </div>
        <div className="col-md-6">
          <PersonDetails personId={ this.state.selectedPerson }/>
        </div>
      </div>
    );
  };
}