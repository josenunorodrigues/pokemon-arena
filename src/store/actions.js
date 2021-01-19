import Service from './../api/services/services';

export default {
  async actionPokemonsList({commit, getters}, payload) {
    if(!getters.getPokemonsList.length) {
      const {data} = await Service.getPokemons(payload);
      let results = data.results.map((el) => {
        let splitUrl = el.url.split('/');
        return {
          name: el.name,
          id: splitUrl[splitUrl.length - 2]
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
  async actionPokemonMove({commit, getters}, payload) {
    let splitUrl = payload.split('/');
    const {data} = await Service.getPokemonMove(splitUrl[splitUrl.length - 2]);
    commit('setPokemonMove', data)
    return data;
  },
}