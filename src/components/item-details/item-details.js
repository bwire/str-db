import React, { Component } from 'react'
import Spinner from '../spinner'

import './item-details.css'

const Record = ({ item, name, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{ `${label}: ` }</span>
      <span>{ item[name] }</span>
    </li>
  );  
};

export { Record };

export default class ItemDetails extends Component { 
  state = {
    item: null,
    image: null,
    loading: true
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({
        loading: true
      });
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (itemId) {
      getData(itemId)
        .then(item => this.setState({
          item: item,
          image: getImageUrl(itemId),
          loading: false
        }));
    }
  }

  render() {
    const {item, loading, image } = this.state;
    const { children } = this.props;

    if (!item) {
      return <span>Select item from the list</span>;
    };
  
    const spinner = loading ? <Spinner /> : null;
    const itemView = !loading ? 
      <ItemView item={ item } image = { image }>
        { children }
      </ItemView> : null;

    return (
      <div className="person-details card">
        { spinner }
        { itemView }
      </div>
    );
  }
}

const ItemView = ({ item, image, children }) => {
  const viewAttributes = React.Children.map(children, (child) => {
    return (
      React.cloneElement(child, { item })
    );
  });

  return (
    <React.Fragment>
      <img className="person-image" 
        src={ image } 
        alt="character"/>
      <div className="card-body">
        <h4>{ item.name }</h4>
        <ul className="list-group list-group-flush">
          { viewAttributes }
        </ul>
      </div>
     </React.Fragment>
  );
}