<template>
  <VDialog
    :value="displayed"
    persistent
    max-width="640px"
  >
    <div slot="activator" />
    <VCard>
      <VToolbar
        card
        prominent
      >
        <VToolbarTitle>Tanggal Berlaku</VToolbarTitle>
      </VToolbar>
      <VCardText>
        <DatePicker
          v-model="calendarStart"
          label="Tanggal Mulai"
        />
        <DatePicker
          v-model="calendarEnd"
          label="Tanggal Berakhir"
        />
      </VCardText>
      <VCardActions>
        <VSpacer />
        <VBtn @click="close">
          Batal
        </VBtn>
        <VBtn
          :disabled="$v.$invalid"
          color="primary"
          @click="displayed = false"
        >
          Simpan
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script>
import moment from 'moment'
import validations from './validator'
import { mapGetters, mapMutations } from 'vuex'
import { GET_CALENDAR_FORM, SET_CALENDAR_FORM } from '@/stores/types/calendar'

export default {
  data () {
    return {
      displayed: false
    }
  },

  computed: {
    ...mapGetters({
      form: GET_CALENDAR_FORM
    }),

    calendarStart: {
      get () {
        return this.form.start
      },

      set (start) {
        this.updateForm({ start })
      }
    },

    calendarEnd: {
      get () {
        return this.form.end
      },

      set (end) {
        this.updateForm({ end })
      }
    }
  },

  validations,

  watch: {
    value: {
      handler (val) {
        this.$emit('input', val)
      }
    },

    calendarStart: {
      handler (val) {
        const currentStart = moment(val)

        if (currentStart.isAfter(moment(this.calendarEnd))) {
          this.calendarEnd = currentStart.endOf('year').format('YYYY-MM-DD')
        }
      }
    }
  },

  methods: {
    ...mapMutations({
      updateForm: SET_CALENDAR_FORM
    }),

    show () {
      this.displayed = true
    },

    close () {
      this.displayed = false
    }
  }
}
</script>
