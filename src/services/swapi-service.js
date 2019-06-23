export default class SwapiService {
  _apiBase = 'https://swapi.co/api/';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}! Received ${response.status}`);
      }
      return await response.json();
  }

  getAllPeople = async () => {
    const people = await this.getResource(`${this._apiBase}people/`);
    return people.results.map(person => this._transformPerson(person));
  }

  getPerson = async (id) => {
    const person = await this.getResource(`${this._apiBase}people/${id}`);
    return this._transformPerson(person);
  }

  getAllPlanets = async () => {
    const planets = await this.getResource(`${this._apiBase}planets/`);
    return planets.results.map(planet => this._transformPlanet(planet));
  }

  getPlanet =  async (id) => {
    const planet =  await this.getResource(`${this._apiBase}planets/${id}/`);
    return this._transformPlanet(planet);
  }

  getAllStarships = async () => {
    const starships = await this.getResource(`${this._apiBase}starships/`);
    return starships.results.map(starship => this._transformStarship(starship));;
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`${this._apiBase}starships/${id}`);
    return this._transformStarship(starship);
  }

  getPersonImage = (id) => `${this._imageBase}/characters/${id}.jpg`;
  getStarshipImage = (id) => `${this._imageBase}/starships/${id}.jpg`;
  getPlanetImage = (id) => `${this._imageBase}/planets/${id}.jpg`;
  
  _extractId(item) {
    const rgx = /\/([0-9]*)\/$/;
    return item.url.match(rgx)[1];
  }

  _transformPlanet = (planet) => {  
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_Period,
      diameter: planet.diameter
    }
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }
}