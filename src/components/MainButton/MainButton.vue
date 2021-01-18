<template>
  <a class="main-button" :class="disabled ? 'main-button--disabled' : ''" v-if="href" :href="href" >{{text}}</a>
  <button :disabled="disabled" :class="disabled ? 'main-button--disabled' : ''" @click="$emit('click')" class="main-button" v-else>{{text}}</button>
</template>

<script src="./MainButton.js"></script>
<style lang="scss" src="./MainButton.scss"></style>
