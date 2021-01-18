import Service from './../api/services/services';

export default {
  async actionPokemonsList({commit, getters}, payload) {
    if(!getters.getPokemonsList.length) {
      const {data} = await Service.getPokemons(payload);
      let results = data.results.map((el) => {
        let array = el.url.split('/');
        return {
          name: el.name,
          id: array[array.length - 2]
        }
      })
      commit('setPokemonsList', results)
      return results;
    }
    return getters.pokemonsList;
  },
  async actionPokemonInfo({commit, getters}, payload) {
    const {data} = await Service.getPokemonInfo(payload);
    commit('setPokemonInfo', data)
    return data;
  },
}