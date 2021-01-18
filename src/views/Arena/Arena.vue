<template>
  <div>
    <div class="arena">
      <div class="arena__fight">
        <player :playerInfo="opponentPokemonInfo"></player>
        <player :playerInfo="playerPokemonInfo" :isPlayer="true"></player>
      </div>
      <div class="arena__ui">
          <img class="arena__ui-img" scr="./../../assets/textbox-border.jpg">
      </div>
    </div>
  </div>
</template>

<script src="./Arena.js"></script>
<style lang="scss" src="./Arena.scss"></style>