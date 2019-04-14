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
import { mapState, mapActions } from 'vuex'
import { FETCH_ALL_RANKS, GET_RANK_DATA } from '@/stores/types/rankTypes'

export default {
  name: 'RankControl',

  computed: {
    ...mapState({
      loading: ({ Rank }) => Rank.isFetching,
      error: ({ Rank }) => Rank.error
    }),

    items () {
      return this.$store.getters[GET_RANK_DATA]
    }
  },

  mounted () {
    this.fetch()
  },

  methods: {
    ...mapActions({
      fetchRanks: FETCH_ALL_RANKS
    }),

    async fetch () {
      await this.fetchRanks()
    }
  }
}
</script>
