<template>
  <div class="main-menu">
    <div class="main-menu__fighters">
      <div class="main-menu__fighters-info">
        <multiselect v-model="playerPokemonName" :options="pokemonList" :searchable="true" :close-on-select="true" :show-labels="false" placeholder="Pick your Pokémon">
          <template v-slot:noResult>
            <span>No Pokémons found.</span>
          </template>
        </multiselect>
        <img class="main-menu__fighters-img" v-if="playerPokemonInfo && playerPokemonInfo.sprites" :src="playerPokemonInfo.sprites.front_default">
      </div>
      <p class="main-menu__fighters-versus">VS</p>
      <div class="main-menu__fighters-info">
        <multiselect v-model="opponentPokemonName" :options="pokemonList" :searchable="true" :close-on-select="true" :show-labels="false" placeholder="Pick your opponent's Pokémon">
          <template v-slot:noResult>
            <span>No Pokémons found.</span>
          </template>
        </multiselect>
        <img class="main-menu__fighters-img" v-if="opponentPokemonInfo && opponentPokemonInfo.sprites" :src="opponentPokemonInfo.sprites.front_default">
      </div>
    </div>
    <div class="main-menu__button-area">
      <main-button :disabled="buttonDisabled" text="Start" @click="redirect"></main-button>
    </div>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script src="./MainMenu.js"></script>
<style lang="scss" src="./MainMenu.scss"></style>