import React, { Component } from 'react'
import { withData } from '../hoc-helpers'
import SwapiService from '../../services/swapi-service';

import './item-list.css'


const ItemList = ({ data, onItemSelected, children }) => {
  const items = data.map((item) => {
    return(
      <li className="list-group-item" key={ item.id } onClick={ () => onItemSelected(item.id) }>
        { children(item) }
      </li>
    );
  })  

  return (
    <ul className="item-list list-group">
      { items }  
    </ul>
  );  
};

export default withData(ItemList, new SwapiService().getAllPeople);

