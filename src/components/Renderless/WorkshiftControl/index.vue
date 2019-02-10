<template>
  <ErrorBoundary ref="errorBoundary">
    <template slot-scope="{ error }">
      <slot
        :items="items"
        :loading="loading"
        :fetch="fetch"
        :error="error"
      />
    </template>
  </ErrorBoundary>
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
    items () {
      return this.$store.getters['Workshift/getData']
    }
  },

  mounted () {
    this.fetch()
  },

  methods: {
    ...mapActions({
      fetchWorkshifts: 'Workshift/fetchAll'
    }),

    async fetch () {
      try {
        this.loading = true
        await this.fetchWorkshifts()
        this.loading = false
      } catch (err) {
        this.$refs.errorBoundary.trigger(err)
      }
    }
  }
}
</script>
