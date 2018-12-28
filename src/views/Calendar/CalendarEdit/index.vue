<template>
  <PageWrapper>
    <CalendarForm
      edit
      v-model="isFormValid"
      @submit="submitHandler(payload)"
    />
  </PageWrapper>
</template>

<script>
import moment from 'moment'
import CalendarForm from '@/components/Forms/CalendarForm'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'CalendarEdit',

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
    ...mapMutations({
      setCalendar: 'Calendar/setForm'
    }),

    ...mapActions({
      fetchCalendar: 'Calendar/fetch',
      updateCalendar: 'Calendar/update'
    }),

    async fetchHandler () {
      const calendar = await this.fetchCalendar(this.$route.params.id)
      this.setCalendar(calendar)
    },

    async submitHandler (payload) {
      try {
        await this.updateCalendar({
          id: this.$route.params.id,
          data: this.payload
        })

        this.$router.push({ name: 'calendars' })
      } catch (err) {
        console.log(err)
      }
    }
  },

  async mounted () {
    await this.fetchHandler()
  }
}
</script>
