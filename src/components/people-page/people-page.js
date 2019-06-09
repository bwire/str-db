import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

import './people-page.css'


export default class PeoplePage extends Component {
  state = {
    selectedPerson: 1,
    hasError: false
  };
  
  onPersonSelected = (selectedPerson) => {
    this.setState({
      selectedPerson
    });
  }

  componentDidCatch() {
    this.setState({
      hasError: true
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
          <ItemList onItemSelected={ this.onPersonSelected }/> 
        </div>
        <div className="col-md-6">
          <PersonDetails personId={ this.state.selectedPerson }/>
        </div>
      </div>
    );
  };
}