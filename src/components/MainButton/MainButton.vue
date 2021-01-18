<template>
  <a class="main-button" v-if="href" :href="href" >{{text}}</a>
  <button class="main-button" v-else>{{text}}</button>
</template>

<script src="./MainButton.js"></script>
<style lang="scss" src="./MainButton.scss"></style>
