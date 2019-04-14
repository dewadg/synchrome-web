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
import moment from 'moment'
import { GET_CALENDAR_DATA, FETCH_ALL_CALENDARS } from '@/stores/types/calendarTypes'

export default {
  name: 'CalendarControl',

  computed: {
    ...mapState({
      loading: ({ Calendar }) => Calendar.isFetching,
      error: ({ Calendar }) => Calendar.error
    }),

    calendars () {
      return this.$store.getters[GET_CALENDAR_DATA]
    },

    items () {
      return this.calendars.map(item => ({
        ...item,
        dateRange: `${moment(item.start).format('D MMMM YYYY')} - ${moment(item.end).format('D MMMM YYYY')}`
      }))
    }
  },

  mounted () {
    this.fetch()
  },

  methods: {
    ...mapActions({
      fetchCalendars: FETCH_ALL_CALENDARS
    }),

    async fetch () {
      await this.fetchCalendars()
    }
  }
}
</script>
