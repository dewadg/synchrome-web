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
          label="Tanggal Mulai"
          v-model="value.start"
        />
        <DatePicker
          label="Tanggal Berakhir"
          v-model="value.end"
        />
      </VCardText>
      <VCardActions>
        <VSpacer />
        <VBtn @click="close">Batal</VBtn>
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
import validator from './validator'

export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      displayed: false
    }
  },

  validations: {
    value: validator
  },

  watch: {
    value: {
      handler (val) {
        this.$emit('input', val)
      }
    },

    'value.start': {
      handler (val) {
        const currentStart = moment(val)

        if (currentStart.isAfter(moment(this.value.end))) {
          this.value.end = currentStart.endOf('year').format('YYYY-MM-DD')
        }
      }
    }
  },

  methods: {
    show () {
      this.displayed = true
    },

    close () {
      this.displayed = false
    }
  }
}
</script>
