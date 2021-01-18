<template>
  <div class="player">
    <div class="player__battle" :class="!isPlayer ? 'player__battle--inverted' : ''">
      <img v-if="playerInfo.sprites" :src="isPlayer ? playerInfo.sprites.back_default : playerInfo.sprites.front_default" class="player__battle-img">
      <div class="player__battle-health">
        <div class="player__battle-health-inner">
        </div>
        <div class="player__battle-health-bar" :style="healthWidth"></div>
      </div>
    </div>
  </div>
</template>

<script src="./Player.js"></script>
<style lang="scss" src="./Player.scss"></style>
