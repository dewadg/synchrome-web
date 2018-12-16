<template>
  <PageWrapper>
    <VCard>
      <VToolbar
        card
        prominent
      >
        <VToolbarTitle v-html="calendarName" />
        <VSpacer />
        {{ formattedStartDate }} - {{ formattedEndDate }}
        <VBtn
          @click="showCalendarForm"
          color="primary"
          small
          class="ml-4"
        >
          Ubah
        </VBtn>
        <VBtn
          @click="clearEvents"
          dark
          color="red"
          small
          class="ml-2"
        >
          Kosongkan Event
        </VBtn>
      </VToolbar>
      <div class="pt-1 pr-4 pb-4 pl-4">
        <CalendarForm
          ref="calendarForm"
          v-model="form"
        />
        <FullCalendar
          v-model="form.events"
          :start="form.start"
          :end="form.end"
        />
      </div>
    </VCard>
  </PageWrapper>
</template>

<script>
import {
  Vue,
  Component
} from 'vue-property-decorator'
import FullCalendar from '@/components/FullCalendar'
import moment from 'moment'
import CalendarForm from '@/components/CalendarForm'

@Component({
  components: {
    FullCalendar,
    CalendarForm
  }
})
export default class CalendarCreate extends Vue {
  form = {
    name: '',
    start: moment().startOf('year').format('YYYY-MM-DD'),
    end: moment().endOf('year').format('YYYY-MM-DD'),
    events: []
  }

  get calendarName () {
    return this.form.name === '' ? 'Tambah Kalender Kerja' : `Tambah Kalender Kerja: ${this.form.name}`
  }

  get formattedStartDate () {
    return moment(this.form.start).format('LL')
  }

  get formattedEndDate () {
    return moment(this.form.end).format('LL')
  }

  showCalendarForm () {
    this.$refs.calendarForm.show()
  }

  clearEvents () {
    this.form.events = []
  }
}
</script>

<style>

</style>
