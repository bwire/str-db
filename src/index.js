class SwapiService {
    _apiBase = 'https://swapi.co/api/';

    async getResource(url) {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Could not fetch ${url}! Received ${response.status}`);
        }
        return await response.json();
    }

    getAllPeople() {
      return this.getResource(`${this._apiBase}people/`);
    }

    getAllPerson(id) {
      return this.getResource(`${this._apiBase}people/:${id}`);
    }
}