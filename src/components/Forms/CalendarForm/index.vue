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
            v-model="calendarName"
            class="pt-2"
            placeholder="Nama kalender"
            solo
            flat
          />
          <VSpacer />
          {{ formattedStartDate }} - {{ formattedEndDate }}
          <VBtn
            color="primary"
            class="ml-4"
            flat
            @click="showCalendarForm"
          >
            <VIcon
              class="mr-2"
              small
            >edit</VIcon>
            Ubah
          </VBtn>
        </VToolbar>
        <div class="pt-1 pr-4 pb-4 pl-4">
          <CalendarDetailsForm ref="calendarForm" />
          <FullCalendar
            v-model="calendarEvents"
            :start="calendarStart"
            :end="calendarEnd"
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
            v-model="calendarPublished"
            label="Status"
            :items="publicationTypes"
            item-value="id"
            item-text="name"
          />
        </VCardText>
        <VCardActions>
          <VBtn
            :disabled="$v.$invalid"
            color="primary"
            block
            @click="submit"
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
import { mapGetters, mapMutations } from 'vuex'
import moment from 'moment'
import FullCalendar from '@/components/FullCalendar'
import CalendarDetailsForm from '@/components/Forms/CalendarDetailsForm'
import CalendarEventsCard from '@/components/CalendarEventsCard'
import { GET_CALENDAR_FORM, SET_CALENDAR_FORM, RESET_CALENDAR_FORM } from '@/stores/types/calendarTypes'
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
    ...mapGetters({
      form: GET_CALENDAR_FORM
    }),

    calendarName: {
      get () {
        return this.form.name
      },
      set (name) {
        this.updateForm({ name })
      }
    },

    calendarStart () {
      return this.form.start
    },

    calendarEnd () {
      return this.form.end
    },

    calendarPublished: {
      get () {
        return this.form.published
      },
      set (published) {
        this.updateForm({ published })
      }
    },

    calendarEvents: {
      get () {
        return this.form.events
      },
      set (events) {
        const payload = events.map(item => ({
          title: item.title,
          start: item.start,
          end: item.end,
          attendanceTypeId: item.attendanceTypeId
        }))

        this.updateForm({ events: payload })
      }
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
    }
  },

  validations: {
    form: validator
  },

  created () {
    this.resetForm()
  },

  methods: {
    ...mapMutations({
      updateForm: SET_CALENDAR_FORM,
      resetForm: RESET_CALENDAR_FORM
    }),

    showCalendarForm () {
      this.$refs.calendarForm.show()
    },

    clearEvents () {
      this.form.events = []
    },

    submit () {
      this.$emit('submit')
    }
  }
}
</script>
