
class SwapiService {

  _apiBase = 'https://swapi.co/api';

  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`);


    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResourse(`/people/`);
    return res.results;
  }

  async getAllPlanets() {
    const res = await this.getResourse(`/planets/`);
    return res.results;
  }

  async getAllStarships() {
    const res = await this.getResourse(`/starships/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResourse(`/people/${id}/`)
  }

  getPlanet(id) {
    return this.getResourse(`/people/${id}/`)
  }

  getAllStarships(id) {
    return this.getResourse(`/people/${id}/`)
  }
}


const swapi = new SwapiService();

swapi.getPerson(3).then((people) => {
  console.log(people.name);


})



