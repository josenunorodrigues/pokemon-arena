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
    <div v-if="isPlayer" class="player__moves">
      <div class="player__moves-button" :class="!move.pp ? 'player__moves-button--depleted' : ''" v-for="move in moves" :key="move.name" @click="move.pp ? move.pp-- : undefined">
        <div class="player__moves-name">{{move.name}}</div>
        <div>{{move.pp}}/{{move.maxPP}}</div>
      </div>
    </div>
  </div>
</template>

<script src="./Player.js"></script>
<style lang="scss" src="./Player.scss"></style>
