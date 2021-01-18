
// @ is an alias to /src
import Arena from '@/views/Arena/Arena.vue'
import MainButton from '@/components/MainButton/MainButton.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Arena,
    MainButton,
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters([
      'getPokemonsList',
      'getPokemonInfo',
    ])
  },
  methods: {
    ...mapActions([
      'actionPokemonsList',
      'actionPokemonInfo',
    ]),
    async fetchData() {
      await this.actionPokemonsList({limit: 151});
    },
  },
  mounted() {
    this.fetchData();
  }
}