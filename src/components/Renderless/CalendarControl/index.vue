<template>
  <div>
    <VProgressLinear
      v-if="loading"
      :indeterminate="loading"
    />
    <slot
      v-if="!loading"
      :items="items"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import moment from 'moment'

export default {
  data () {
    return {
      loading: true
    }
  },

  computed: {
    calendars () {
      return this.$store.getters['Calendar/getData']
    },

    items () {
      return this.calendars.map(item => ({
        ...item,
        dateRange: `${moment(item.start).format('D MMMM YYYY')} - ${moment(item.end).format('D MMMM YYYY')}`
      }))
    }
  },

  methods: {
    ...mapActions({
      fetch: 'Calendar/fetchAll'
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
