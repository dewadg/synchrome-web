<template>
  <div ref="fullcalendar">
    <FullCalendarEventModal
      ref="eventModal"
      v-model="eventForm"
      @eventAdded="addEvent(eventForm)"
      @eventUpdated="updateEvent(eventForm)"
      @eventDeleted="deleteEvent(eventForm)"
    />
  </div>
</template>

<script>
import $ from 'jquery'
import moment from 'moment'
import 'fullcalendar'
import 'fullcalendar/dist/locale/id'
import FullCalendarEventModal from '@/components/FullCalendarEventModal'
import { EVENT_COLORS } from '@/helpers/calendar'

export default {
  components: {
    FullCalendarEventModal
  },

  props: {
    value: {
      type: Array,
      required: true
    },
    start: {
      type: String,
      required: true
    },
    end: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      eventForm: {
        title: '',
        start: null,
        end: null,
        attendanceTypeId: null
      }
    }
  },

  computed: {
    defaultConfig () {
      return {
        locale: moment.locale(),
        defaultDate: moment(this.start),
        selectable: true,
        events: this.value,
        dayClick: this.dayClickHandler,
        select: this.selectHandler,
        eventClick: this.eventClickHandler
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
    },

    value (val) {
      this.initCalendar()
    }
  },

  mounted () {
    this.initCalendar()
  },

  methods: {
    initCalendar () {
      $(this.$refs.fullcalendar).fullCalendar('destroy')
      $(this.$refs.fullcalendar).fullCalendar(this.defaultConfig)
    },

    dayClickHandler (date, jsEvent, view) {
      this.eventForm = {
        title: '',
        start: date.format('YYYY-MM-DD'),
        end: null,
        attendanceTypeId: null
      }

      this.$refs.eventModal.show()
    },

    selectHandler (start, end, jsEvent, view) {
      const fixedEnd = moment(end).subtract(1, 'day')

      this.eventForm = {
        title: '',
        start: start.format('YYYY-MM-DD'),
        end: fixedEnd.format('YYYY-MM-DD') === start.format('YYYY-MM-DD')
          ? null
          : fixedEnd.format('YYYY-MM-DD'),
        attendanceTypeId: null
      }

      this.$refs.eventModal.show()
    },

    eventClickHandler (fcEvent, jsEvent, view) {
      this.eventForm = fcEvent

      this.$refs.eventModal.show(true)
    },

    addEvent (fcEvent) {
      this.$emit('input', [
        ...this.value,
        {
          ...fcEvent,
          ...EVENT_COLORS[fcEvent.attendanceTypeId]
        }
      ])
    },

    getFullCalendarEvents () {
      return $(this.$refs.fullcalendar).fullCalendar('getEventSources')[0].eventDefs
        .map(item => ({
          start: item.dateProfile.start.format('YYYY-MM-DD'),
          end: !item.dateProfile.end ? null : item.dateProfile.end.format('YYYY-MM-DD'),
          title: item.title,
          attendanceTypeId: item.miscProps.attendanceTypeId,
          backgroundColor: item.backgroundColor,
          borderColor: item.borderColor,
          textColor: item.textColor
        }))
    },

    updateEvent (fcEvent) {
      const updatedEvent = {
        ...fcEvent,
        ...EVENT_COLORS[fcEvent.attendanceTypeId]
      }

      $(this.$refs.fullcalendar).fullCalendar('updateEvent', updatedEvent)
      this.$emit('input', this.getFullCalendarEvents())
    },

    deleteEvent (fcEvent) {
      $(this.$refs.fullcalendar).fullCalendar('removeEvents', fcEvent.id)
      this.$emit('input', this.getFullCalendarEvents())
    }
  }
}
</script>

<style>
@import url('../../../node_modules/fullcalendar/dist/fullcalendar.css')
</style>
