<template>
  <PageWrapper :breadcrumbs="breadcrumbs">
    <CalendarForm
      v-model="isFormValid"
      @submit="submitHandler(payload)"
    />
  </PageWrapper>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CalendarForm from '@/components/Forms/CalendarForm'
import { GET_CALENDAR_FORM, STORE_CALENDAR } from '@/stores/types/calendarTypes'
import breadcrumbs from './breadcrumbs'

export default {
  name: 'CalendarCreate',

  components: {
    CalendarForm
  },

  data () {
    return {
      breadcrumbs,
      isFormValid: false
    }
  },

  computed: {
    ...mapGetters({
      form: GET_CALENDAR_FORM
    }),

    payload () {
      return {
        ...this.form,
        events: this.form.events.map(item => ({
          title: item.title,
          start: item.start,
          end: item.end,
          attendanceTypeId: item.attendanceTypeId
        }))
      }
    }
  },

  methods: {
    ...mapActions({
      storeCalendar: STORE_CALENDAR
    }),

    async submitHandler (payload) {
      try {
        await this.storeCalendar(payload)

        this.$router.push({ name: 'calendars' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
