
export default {
  name: 'Player',
  components: {
  },
  props: {
    playerInfo: {
      type: Object,
      default: {},
    },
    isPlayer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      health: 100,
    }
  },
  computed: {
    healthWidth() {
      return 'width: calc(' + this.health + '% - 4px)';
    }
  },
}