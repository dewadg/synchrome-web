<template>
  <div ref="fullcalendar"></div>
</template>

<script>
import $ from 'jquery'
import moment from 'moment'
import 'fullcalendar'
import 'fullcalendar/dist/locale/id'

export default {
  props: {
    start: {
      type: String,
      required: true
    },
    end: {
      type: String,
      required: true
    }
  },

  computed: {
    defaultConfig () {
      return {
        locale: moment.locale(),
        defaultDate: moment(this.start)
      }
    }
  },

  watch: {
    start: {
      handler () {
        this.initCalendar()
      }
    },

    end: {
      handler () {
        this.initCalendar()
      }
    }
  },

  methods: {
    initCalendar () {
      $(this.$refs.fullcalendar).fullCalendar('destroy')
      $(this.$refs.fullcalendar).fullCalendar({
        defaultDate: moment(this.start)
      })
    }
  },

  mounted () {
    this.initCalendar()
  }
}
</script>

<style>
@import url('../../../node_modules/fullcalendar/dist/fullcalendar.css')
</style>
