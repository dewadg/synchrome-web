<template>
  <VLayout
    row
    wrap
  >
    <VFlex
      md9
      pr-2
    >
      <VCard class="mb-4">
        <VToolbar
          card
          prominent
        >
          <VTextField
            v-model="form.name"
            class="pt-2"
            placeholder="Nama kalender"
            solo
            flat
          />
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
        </VToolbar>
        <div class="pt-1 pr-4 pb-4 pl-4">
          <CalendarDetailsForm
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
      <CalendarEventsCard v-model="form.events" />
    </VFlex>
    <VFlex
      md3
      pl-2
    >
      <VCard
        class="mb-4"
      >
        <VToolbar
          card
          prominent
        >
          <VToolbarTitle>Publikasi</VToolbarTitle>
        </VToolbar>
        <VCardText>
          <VSelect
            label="Status"
            v-model="form.published"
            :items="publicationTypes"
            item-value="id"
            item-text="name"
          />
        </VCardText>
        <VCardActions>
          <VBtn
            :disabled="$v.$invalid"
            @click="submit"
            color="primary"
            block
          >
            Simpan
          </VBtn>
        </VCardActions>
      </VCard>
      <VCard
        class="mb-4"
      >
        <VToolbar
          card
          prominent
        >
          <VToolbarTitle>Event</VToolbarTitle>
        </VToolbar>
        <VCardText>
          Jumlah event: {{ form.events.length }}
        </VCardText>
      </VCard>
    </VFlex>
  </VLayout>
</template>

<script>
import moment from 'moment'
import FullCalendar from '@/components/FullCalendar'
import CalendarDetailsForm from '@/components/CalendarDetailsForm'
import CalendarEventsCard from '@/components/CalendarEventsCard'
import validator from './validator'

export default {
  name: 'CalendarForm',

  components: {
    FullCalendar,
    CalendarDetailsForm,
    CalendarEventsCard
  },

  props: {
    value: {
      type: Boolean,
      required: true
    },

    edit: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    form: {
      get () {
        return this.$store.getters['Calendar/getForm']
      },

      set (val) {
        this.$store.commit('Calendar/setForm', val)
      }
    },

    calendarName () {
      return this.form.name === '' ? 'Tambah Kalender Kerja' : this.form.name
    },

    formattedStartDate () {
      return moment(this.form.start).format('LL')
    },

    formattedEndDate () {
      return moment(this.form.end).format('LL')
    },

    publicationTypes () {
      return [
        { id: true, name: 'Publikasikan' },
        { id: false, name: 'Draft' }
      ]
    },
  },

  validations: {
    form: validator
  },

  methods: {
    showCalendarForm () {
      this.$refs.calendarForm.show()
    },

    clearEvents () {
      this.form.events = []
    },

    resetForm () {
      this.form = {
        name: '',
        start: moment().startOf('year').format('YYYY-MM-DD'),
        end: moment().endOf('year').format('YYYY-MM-DD'),
        published: false,
        events: []
      }
    },

    submit () {
      this.$emit('submit')
    }
  },

  created () {
    this.resetForm()
  }
}
</script>