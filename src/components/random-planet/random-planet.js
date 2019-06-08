import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import Spinner from '../../components/spinner'
import ErrorIndicator from '../../components/error-indicator'

import './random-planet.css'

export default class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false
  };
  swapiService = new SwapiService();

  componentDidMount = () => {  
    this.updatePlanet();  
    this.interval = setInterval(this.updatePlanet, 1500);
  }
  
  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ 
      planet,
      loading: false
    });
  }

  onError = (e) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError); 
  }
  
  render() {
    const { planet, loading, error } = this.state;  
    const errorView = error ? <ErrorIndicator /> : null;   
    const spinner = loading ? <Spinner /> : null;
    const planetView = !(loading || error) ? <PlanetView planet={planet} /> : null;
    return (
      <div className="random-planet jumbotron rounded">
        { errorView }
        { spinner }
        { planetView }
      </div>    
    );   
  }
}

const PlanetView = ({ planet }) => {
  const { pictureId, name, population, rotationPeriod, diameter } = planet;
  return(
    <React.Fragment> 
      <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${pictureId}.jpg`} alt="" />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
