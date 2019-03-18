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
import { FETCH_ALL_AGENCIES, GET_AGENCY_DATA } from '@/stores/types/agencyTypes'

export default {
  name: 'AgencyControl',

  computed: {
    ...mapState({
      loading: ({ Agency }) => Agency.isFetching,
      error: ({ Agency }) => Agency.error
    }),

    items () {
      return this.$store.getters[GET_AGENCY_DATA]
    }
  },

  mounted () {
    this.fetch()
  },

  methods: {
    async fetch () {
      await this.$store.dispatch(FETCH_ALL_AGENCIES)
    }
  }
}
</script>
