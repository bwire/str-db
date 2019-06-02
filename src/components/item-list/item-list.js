import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'

import './item-list.css'

export default class ItemList extends Component {
  state = {
    peopleList: []
  };
  swapiService = new SwapiService();

  componentDidMount = () => {
    this.swapiService.getAllPeople()
      .then(peopleList => {
        this.setState({
          peopleList  
        })
      });  
  }

  propOnSelected = (id) => {

  }

  renderItems = (items) => {
    return items.map(({id, name}) => {
      return(
        <li className="list-group-item" key={ id } onClick={ this.propOnSelected(id) }>
          { name }
        </li>
      );
    });   
  }

  render() {
    const { peopleList } = this.state;
    if (!peopleList) {
      return <Spinner />
    } else {
      return(
        <ul className="item-list list-group">
          { this.renderItems(peopleList) }  
        </ul>
      )
    }
  }
}
