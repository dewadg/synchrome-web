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
import { FETCH_ALL_ECHELON_TYPES, GET_ECHELON_TYPE_DATA } from '@/stores/types/echelonTypeTypes'

export default {
  name: 'EchelonTypeControl',

  computed: {
    ...mapState({
      loading: state => state.EchelonType.isFetching,
      error: state => state.EchelonType.error
    }),

    items () {
      return this.$store.getters[GET_ECHELON_TYPE_DATA]
    }
  },

  mounted () {
    this.fetch()
  },

  methods: {
    async fetch () {
      await this.$store.dispatch(FETCH_ALL_ECHELON_TYPES)
    }
  }
}
</script>
