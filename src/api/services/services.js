import http from './../http';
import * as Endpoint from './endpoints';

const service = {
  async getPokemons (payload) {
    let url = Endpoint.POKEMON_LIST;
    if (payload.limit) {
      url += '?limit=' + payload.limit;
    }
    return http.get(url)
  },
  async getPokemonInfo (payload) {
    let id = Number(payload)
    let url = Endpoint.POKEMON_INFO;
    if (id && !isNaN(id)) {
      url = url.replace('{id}', id);
      return http.get(url)
    }
    return {};
  },
  async getPokemonMove (payload) {
    let id = Number(payload)
    let url = Endpoint.POKEMON_MOVE;
    if (id && !isNaN(id)) {
      url = url.replace('{id}', id);
      return http.get(url)
    }
    return {};
  },
}

export default service;