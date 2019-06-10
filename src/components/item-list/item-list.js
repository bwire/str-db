import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'

import './item-list.css'

export default class ItemList extends Component {
  state = {
    itemList: []
  };
  
  componentDidMount = () => {
    const { getData } = this.props;
    getData()
      .then(itemList => {
        this.setState({
          itemList  
        })
      });  
  }

  propOnSelected = (id) => {
    this.props.onItemSelected(id);
  }

  renderItems = (items) => {
    return items.map(({id, name}) => {
      return(
        <li className="list-group-item" key={ id } onClick={ () => this.propOnSelected(id) }>
          { name }
        </li>
      );
    });   
  }

  render() {
    const { itemList } = this.state;
    if (!itemList) {
      return <Spinner />
    } else {
      return(
        <ul className="item-list list-group">
          { this.renderItems(itemList) }  
        </ul>
      )
    }
  }
}
