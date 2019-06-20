import React, { Component } from 'react';
import { PersonList } from '../sw-components/item-lists';
import PersonDetails from '../sw-components/person-details';
import Row from '../row/row';
import ErrorBoundary from '../error-boundary/error-boundary';

import './people-page.css'
export default class PeoplePage extends Component {
  state = {
    selectedPerson: "1"
  };
  
  leftBlock = (
    <div className="col-md-6">
      <PersonList onItemSelected={ (person) => this.onPersonSelected(person) } />
    </div>
  );

  rightBlock = () => {
    return (
      <div className="col-md-6">
        <PersonDetails itemId = { this.state.selectedPerson } />
      </div>
    );
  };

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