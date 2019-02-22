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
import { FETCH_ALL_WORKSHIFTS, GET_WORKSHIFT_DATA } from '@/stores/types/workshiftTypes'

export default {
  computed: {
    ...mapState({
      loading: state => state.Workshift.isFetching,
      error: state => state.Workshift.error
    }),

    items () {
      return this.$store.getters[GET_WORKSHIFT_DATA]
    }
  },

  mounted () {
    this.fetch()
  },

  methods: {
    async fetch () {
      await this.$store.dispatch(FETCH_ALL_WORKSHIFTS)
    }
  }
}
</script>
