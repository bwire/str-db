import React, { Component } from 'react'
import Spinner from '../../components/spinner'
import SwapiService from '../../services/swapi-service'

import './person-details.css'

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({
        loading: true
      });
      this.updatePerson();
    }
  }

  onPersonLoaded = (person) => {
    this.setState({
      person: person,
      loading: false
    });
  }

  updatePerson() {
    const { personId } = this.props;
    if (personId) {
      this.swapiService.getPerson(personId)
        .then(this.onPersonLoaded);
    }
  }

  render() {
    const {person, loading} = this.state;
    if (!person) {
      return <span>Select person from the list</span>;
    };
  
    const spinner = loading ? <Spinner /> : null;
    const personView = !loading ? <PersonView person={ person } /> : null;

    return (
      <div className="person-details card">
        { spinner }
        { personView }
      </div>
    );
  }
}

const PersonView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;
  return (
    <React.Fragment>
      <img className="person-image" 
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
        alt="character"/>
      <div className="card-body">
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{ gender }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{ birthYear }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{ eyeColor }</span>
          </li>
        </ul>
      </div>
     </React.Fragment>
  );
}