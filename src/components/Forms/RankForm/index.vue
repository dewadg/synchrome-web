<template>
  <form>
    <VTextField
      label="Kode"
      v-model="form.id"
      @input="$v.form.id.$touch"
      :error-messages="idErrors"
    />
    <VTextField
      label="Golongan"
      v-model="form.name"
      @input="$v.form.name.$touch"
      :error-messages="nameErrors"
    />
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },

  validations: {
    form: {
      id: {
        required
      },
      name: {
        required
      }
    }
  },

  computed: {
    form: {
      get () {
        return this.$store.getters['Rank/getForm']
      },

      set (val) {
        this.$store.commit('Rank/setForm', val)
      }
    },

    idErrors () {
      const err = []

      if (!this.$v.form.id.$invalid) return err

      if (this.$v.form.id.$dirty && !this.$v.form.id.required) {
        err.push('Kode golongan harus diisi')
      }

      return err
    },

    nameErrors () {
      const err = []

      if (!this.$v.form.name.$invalid) return err

      if (this.$v.form.name.$dirty && !this.$v.form.name.required) {
        err.push('Kode golongan harus diisi')
      }

      return err
    }
  },

  watch: {
    form: {
      deep: true,
      handler () {
        this.$emit('input', !this.$v.$invalid)
      }
    }
  }
}
</script>
