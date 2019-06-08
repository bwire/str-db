export default class SwapiService {
  _apiBase = 'https://swapi.co/api/';

  async getResource(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}! Received ${response.status}`);
      }
      return await response.json();
  }

  async getAllPeople() {
    const people = await this.getResource(`${this._apiBase}people/`);
    return people.results.map(person => this._transformPerson(person));
  }

  async getPerson(id) {
    const person = await this.getResource(`${this._apiBase}people/${id}`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const planets = await this.getResource(`${this._apiBase}planets/`);
    return planets.results.map(planet => this._transformPlanet(planet));
  }

  async getPlanet(id) {
    const planet =  await this.getResource(`${this._apiBase}planets/${id}/`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const starships = await this.getResource(`${this._apiBase}starships/`);
    return starships.results.map(starship => this._transformStarship(starship));;
  }

  async getStarship(id) {
    const starship = await this.getResource(`${this._apiBase}starships/${id}`);
    return this._transformStarship(starship);
  }

  _extractId(item) {
    const rgx = /\/([0-9]*)\/$/;
    return item.url.match(rgx)[1];
  }

  _transformPlanet = (planet) => {  
    return {
      pictureId: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_Period,
      diameter: planet.diameter
    }
  }

  _transformStarship = (starship) => {
    return {
      pictureId: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
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