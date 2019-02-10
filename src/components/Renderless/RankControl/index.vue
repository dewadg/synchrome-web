<template>
  <div>
    <slot
      :items="items"
      :loading="loading"
      :fetch="fetch"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { FETCH_ALL_RANKS, GET_RANK_DATA } from '@/stores/types/rank'

export default {
  name: 'RankControl',

  computed: {
    ...mapState({
      loading: state => state.Rank.loading
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
