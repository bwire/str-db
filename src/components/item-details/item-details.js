import React, { Component } from 'react'
import Spinner from '../spinner'

import './item-details.css'

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
    const viewAttributes = this.props.detailsString.split(',');

    if (!item) {
      return <span>Select item from the list</span>;
    };
  
    const spinner = loading ? <Spinner /> : null;
    const personView = !loading ? 
      <PersonView person={ item } image = { image }>
        { viewAttributes }
      </PersonView> : null;

    return (
      <div className="person-details card">
        { spinner }
        { personView }
      </div>
    );
  }
}

const PersonView = ({ person, image, children }) => {
  const viewAttributes = React.Children.map(children, (child) => {
    return (
      <li className="list-group-item">
        <span className="term">{ `${child}: ` }</span>
        <span>{ person[child] }</span>
      </li>
    );
  });

  const { name, gender, birthYear, eyeColor } = person;
  return (
    <React.Fragment>
      <img className="person-image" 
        src={ image } 
        alt="character"/>
      <div className="card-body">
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          { viewAttributes }
        </ul>
      </div>
     </React.Fragment>
  );
}