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
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: true
    }
  },

  computed: {
    ranks () {
      return this.$store.getters['Rank/getData']
    }
  },

  methods: {
    ...mapActions({
      fetchRanks: 'Rank/fetchAll'
    }),

    async fetch () {
      this.loading = true
      await this.fetchRanks()
      this.loading = false
    }
  },

  async mounted () {
    await this.fetch()
  }
}
</script>
