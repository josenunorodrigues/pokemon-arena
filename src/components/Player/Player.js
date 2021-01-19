import { mapActions } from "vuex";

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
      moves: [],
    }
  },
  computed: {
    healthWidth() {
      return 'width: calc(' + this.health + '% - 4px)';
    }
  },
  methods: {
    ...mapActions([
      'actionPokemonMove'
    ]),
    getRandomNumber(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    async getRandomMoves() {
      let powerlessMoveNum = 0;
      while (this.moves.length < 4) {
        let move = this.playerInfo.moves[this.getRandomNumber(this.playerInfo.moves.length - 1)];
        let moveInfo = await this.actionPokemonMove(move.move.url);
        moveInfo.maxPP = moveInfo.pp;
        if(!(!moveInfo.power && powerlessMoveNum == 2)) {
          if(!moveInfo.power) {
            powerlessMoveNum++;
          }
          this.moves.push(moveInfo);
        }
      }
    }
  },
  mounted() {
    this.getRandomMoves()
  },
}