class SwapiService {
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
      return people.results;
    }

    getPerson(id) {
      return this.getResource(`${this._apiBase}people/:${id}`);
    }

    async getAllPlanets() {
      const planets = await this.getResource(`${this._apiBase}planets/`);
      return planets.results;
    }

    getPlanet(id) {
      return this.getResource(`${this._apiBase}planets/:${id}`);
    }

    async getAllStarships() {
      const starships = await this.getResource(`${this._apiBase}starships/`);
      return starships.results;
    }

    getStarship(id) {
      return this.getResource(`${this._apiBase}starships/:${id}`);
    }
}

new SwapiService().getAllPeople().then(elements => elements.forEach(element => {
  console.log(element);
}));