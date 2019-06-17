import React, { Component } from 'react';
import { PersonList } from '../sw-components/item-lists';
import { PersonDetails } from '../sw-components/details';
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
      <PersonList onItemSelected={ (person) => this.onPersonSelected(person) }>
        { ({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})` }
      </PersonList>
    </div>
  );

  rightBlock = () => {
    console.log('this.state');
    return (
      <div className="col-md-6">
        <PersonDetails itemId = { this.state.selectedPerson } />;
      </div>
    );
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({
      selectedPerson
    });
  }

  render() {
    console.log('Rendering...');
    return (
      <ErrorBoundary>
        <Row left = { this.leftBlock } right = { this.rightBlock() } />
      </ErrorBoundary>
    )
  };
}