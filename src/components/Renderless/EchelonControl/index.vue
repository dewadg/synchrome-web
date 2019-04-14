<template>
  <div>
    <slot
      :items="items"
      :loading="loading"
      :fetch="fetch"
      :error="error"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { FETCH_ALL_ECHELONS, GET_ECHELON_DATA } from '@/stores/types/echelonTypes'

export default {
  name: 'EchelonControl',

  computed: {
    ...mapState({
      loading: ({ Echelon }) => Echelon.isFetching,
      error: ({ Echelon }) => Echelon.error
    }),

    items () {
      return this.$store.getters[GET_ECHELON_DATA]
    }
  },

  mounted () {
    this.fetch()
  },

  methods: {
    async fetch () {
      await this.$store.dispatch(FETCH_ALL_ECHELONS)
    }
  }
}
</script>
