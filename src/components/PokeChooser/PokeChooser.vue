<template>
  <a class="main-button" v-if="href" :href="href" >{{text}}</a>
  <button class="main-button" v-else>{{text}}</button>
</template>

<script src="./PokeChooser.js"></script>
<style lang="scss" src="./PokeChooser.scss"></style>
