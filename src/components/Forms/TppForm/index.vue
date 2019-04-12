<template>
  <form @submit.prevent="submitHandler">
    <VTextField
      label="Nama TPP"
      v-model="tppName"
      :error-messages="tppNameErrors"
      @input="emitInput"
    />
    <VTextField
      label="Besaran"
      v-model="tppValue"
      :error-messages="tppValueErrors"
      @input="emitInput"
    />
  </form>
</template>

<script>
import { GET_TPP_FORM, SET_TPP_FORM } from '@/stores/types/tppTypes'
import validator from './validator'

export default {
  name: 'TppForm',

  props: {
    value: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    tppName: {
      get () {
        return this.$store.getters[GET_TPP_FORM].name
      },
      set (name) {
        this.$store.commit(SET_TPP_FORM, { name })
      }
    },

    tppValue: {
      get () {
        return this.$store.getters[GET_TPP_FORM].value
      },
      set (value) {
        this.$store.commit(SET_TPP_FORM, { value })
      }
    },

    tppNameErrors () {
      const err = []

      if (!this.$v.tppName.$invalid) return err

      if (this.$v.tppName.$dirty && !this.$v.tppName.required) {
        err.push('Nama TPP harus diisi')
      }

      return err
    },

    tppValueErrors () {
      const err = []

      if (!this.$v.tppValue.$invalid) return err

      if (this.$v.tppValue.$dirty && !this.$v.tppValue.required) {
        err.push('Besaran TPP harus diisi')
      }

      return err
    }
  },

  validations: validator,

  methods: {
    emitInput () {
      this.$emit('input', !this.$v.$invalid)
    },

    resetValidations () {
      this.$v.$reset()
    }
  }
}
</script>
