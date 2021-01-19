
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'
import Player from '@/components/Player/Player.vue'
import MainButton from '@/components/MainButton/MainButton.vue'

export default {
  name: 'Arena',
  components: {
    Player,
    MainButton,
  },
  data() {
    return {
      playerPokemonInfo: {},
      opponentPokemonInfo: {},
      dataLoaded: false,
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
      this.dataLoaded = false;
      this.playerPokemonInfo = await this.actionPokemonInfo(this.$route.query.pId);
      this.opponentPokemonInfo = await this.actionPokemonInfo(this.$route.query.oId);
      this.dataLoaded = true;
    },
  },
  mounted() {
    this.fetchData();
  }
}