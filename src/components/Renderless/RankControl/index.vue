<template>
  <div>
    <VProgressLinear
      v-if="loading"
      :indeterminate="loading"
    />
    <slot
      v-if="!loading"
      :items="ranks"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: true
    }
  },

  computed: {
    ...mapState({
      ranks: state => state.Rank.data
    })
  },

  methods: {
    ...mapActions({
      fetch: 'Rank/fetchAll'
    }),

    async fetchHandler () {
      this.loading = true
      await this.fetch()
      this.loading = false  
    }
  },

  async mounted () {
    await this.fetchHandler()
  }
}
</script>
