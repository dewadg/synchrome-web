<template>
  <PageWrapper :breadcrumbs="breadcrumbs">
    <CalendarForm
      v-model="isFormValid"
      @submit="submitForm"
    />
  </PageWrapper>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CalendarForm from '@/components/Forms/CalendarForm'
import { GET_CALENDAR_FORM, SET_CALENDAR_FORM, STORE_CALENDAR } from '@/stores/types/calendarTypes'
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

  methods: {
    ...mapActions({
      storeCalendar: STORE_CALENDAR
    }),

    async submitForm () {
      await this.storeCalendar(this.form)

      if (!this.error) this.$router.push({ name: 'calendars' })
    }
  }
}
</script>
