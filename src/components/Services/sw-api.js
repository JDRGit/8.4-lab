const baseURL = "https://swapi.dev/api/";

export default {
  async getStarships() {
    const response = await fetch(`${baseURL}starships/`);
    return response.json();
  },
  async getStarship(id) {
    const response = await fetch(`${baseURL}starships/${id}/`);
    return response.json();
  }
};

export function getAllStarships() {
  return fetch(`${baseURL}starships/`)
    .then(response => response.json());
}

export function getStarship(id) {
  return fetch(`${baseURL}starships/${id}/`)
    .then(response => response.json());
}


