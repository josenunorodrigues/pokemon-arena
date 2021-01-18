
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'
import Arena from '@/views/Arena/Arena.vue'
import MainButton from '@/components/MainButton/MainButton.vue'
import Multiselect from 'vue-multiselect'

export default {
  name: 'Home',
  components: {
    Arena,
    MainButton,
    Multiselect,
  },
  data() {
    return {
      playerPokemonName: '',
      opponentPokemonName: '',
      playerPokemonInfo: {},
      opponentPokemonInfo: {},
    }
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    async playerPokemonName(newVal) {
      if(newVal) {
        this.playerPokemonInfo = await this.actionPokemonInfo(this.getPokemonsList.find((el) => el.name == newVal).id);
      } else {
        this.playerPokemonInfo = {}
      }
    },
    async opponentPokemonName(newVal) {
      if(newVal) {
        this.opponentPokemonInfo = await this.actionPokemonInfo(this.getPokemonsList.find((el) => el.name == newVal).id);
      } else {
        this.opponentPokemonInfo = {}
      }
    },
  },
  computed: {
    ...mapGetters([
      'getPokemonsList',
      'getPokemonInfo',
    ]),
    pokemonList() {
      return this.getPokemonsList.map((pokemon) => {
        return pokemon.name
      });
    },
    buttonDisabled() {
      return !(this.playerPokemonName && this.opponentPokemonName);
    }
  },
  methods: {
    ...mapActions([
      'actionPokemonsList',
      'actionPokemonInfo',
    ]),
    async fetchData() {
      await this.actionPokemonsList({limit: 151});
    },
    redirect() {
      if (this.playerPokemonName && this.opponentPokemonName) {
        this.$router.push('/arena?pId=' + this.getPokemonsList.find((el) => el.name == this.playerPokemonName).id + '&oId=' + this.getPokemonsList.find((el) => el.name == this.opponentPokemonName).id);
      }
    },
  },
  mounted() {
    this.fetchData();
  }
}