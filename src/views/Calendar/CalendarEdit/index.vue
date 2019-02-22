<template>
  <PageWrapper :breadcrumbs="breadcrumbs">
    <CalendarForm
      v-model="isFormValid"
      edit
      @submit="submitForm"
    />
  </PageWrapper>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CalendarForm from '@/components/Forms/CalendarForm'
import { GET_CALENDAR_FORM, SET_CALENDAR_FORM, FETCH_ONE_CALENDAR, UPDATE_CALENDAR } from '@/stores/types/calendarTypes'
import breadcrumbs from './breadcrumbs'

export default {
  name: 'CalendarEdit',

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
    ...mapState({
      error: ({ Calendar }) => Calendar.error
    }),

    form: {
      get() {
        return this.$store.getters[GET_CALENDAR_FORM]
      },
      set(form) {
        this.$store.commit(SET_CALENDAR_FORM, form)
      }
    }
  },

  mounted () {
    this.fetchHandler()
  },

  methods: {
    ...mapActions({
      fetchCalendar: FETCH_ONE_CALENDAR,
      updateCalendar: UPDATE_CALENDAR
    }),

    async fetchHandler () {
      this.form = await this.fetchCalendar(this.$route.params.id)
    },

    async submitForm () {
      await this.updateCalendar(this.form)

      if (!this.error) this.$router.push({ name: 'calendars' })
    }
  }
}
</script>
