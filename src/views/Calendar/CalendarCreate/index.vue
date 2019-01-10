<template>
  <PageWrapper>
    <CalendarForm
      v-model="isFormValid"
      @submit="submitHandler(payload)"
    />
  </PageWrapper>
</template>

<script>
import CalendarForm from '@/components/Forms/CalendarForm'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CalendarCreate',

  components: {
    CalendarForm
  },

  data () {
    return {
      isFormValid: false
    }
  },

  computed: {
    ...mapGetters({
      form: 'Calendar/getForm'
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
      storeCalendar: 'Calendar/store'
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
