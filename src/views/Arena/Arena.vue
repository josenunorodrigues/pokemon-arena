<template>
  <div>
    <div class="arena">
      <div class="arena__fight" v-if="dataLoaded">
        <player :playerInfo="opponentPokemonInfo"></player>
        <player :playerInfo="playerPokemonInfo" :isPlayer="true"></player>
      </div>
    </div>
    <main-button class="arena__back" text="Back" href="/"></main-button>
  </div>
</template>

<script src="./Arena.js"></script>
<style lang="scss" src="./Arena.scss"></style>