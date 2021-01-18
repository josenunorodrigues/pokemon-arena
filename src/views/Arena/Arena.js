
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'
import Player from '@/components/Player/Player.vue'

export default {
  name: 'Arena',
  components: {
    Player,
  },
  data() {
    return {
      playerPokemonInfo: {},
      opponentPokemonInfo: {},
    }
  },
  computed: {
    ...mapGetters([
      'getPokemonInfo',
    ]),
  },
  methods: {
    ...mapActions([
      'actionPokemonInfo',
    ]),
    async fetchData() {
      this.playerPokemonInfo = await this.actionPokemonInfo(this.$route.query.pId);
      this.opponentPokemonInfo = await this.actionPokemonInfo(this.$route.query.oId);
    },
  },
  mounted() {
    this.fetchData();
  }
}