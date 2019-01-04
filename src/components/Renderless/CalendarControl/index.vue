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
import { mapActions } from 'vuex'
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
      fetchCalendars: 'Calendar/fetchAll'
    }),

    async fetch () {
      this.loading = true
      await this.fetchCalendars()
      this.loading = false
    }
  },

  async mounted () {
    await this.fetch()
  }
}
</script>
