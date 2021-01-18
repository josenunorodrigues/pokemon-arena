import Service from './../api/services/services';

export default {
  async actionPokemonsList({commit, getters}, payload) {
    if(!getters.getPokemonsList.length) {
      const list = await Service.getPokemons(payload);
      commit('setPokemonsList', list)
    }
    return getters.pokemonsList;
  },
  async actionPokemonInfo({commit, getters}, payload) {
      const pokemonInfo = await Service.getPokemonInfo(payload);
      commit('setPokemonInfo', pokemonInfo)
      return getters.pokemonInfo;
  },
}