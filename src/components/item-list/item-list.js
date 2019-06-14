import React, { Component } from 'react'
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
    return items.map((item) => {
      return(
        <li className="list-group-item" key={ item.id } onClick={ () => this.propOnSelected(item.id) }>
          { this.props.children(item) }
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
