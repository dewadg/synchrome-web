<template>
  <form>
    <VTextField
      label="Kode"
      v-model="value.id"
      @input="$v.value.id.$touch"
      :error-messages="idErrors"
    />
    <VTextField
      label="Golongan"
      v-model="value.name"
      @input="$v.value.name.$touch"
      :error-messages="nameErrors"
    />
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { emptyRank } from '@/stores/Rank'

export default {
  props: {
    value: {
      type: Object,
      default: emptyRank()
    }
  },

  validations: {
    value: {
      id: {
        required
      },
      name: {
        required
      }
    }
  },

  computed: {
    idErrors () {
      const err = []

      if (!this.$v.value.id.$dirty) return err

      if (!this.$v.value.id.required) {
        err.push('Kode golongan harus diisi')
      }

      return err
    },

    nameErrors () {
      const err = []

      if (!this.$v.value.name.$dirty) return err

      if (!this.$v.value.name.required) {
        err.push('Kode golongan harus diisi')
      }

      return err
    }
  },

  watch: {
    value: {
      deep: true,
      handler () {
        this.$emit('isValid', !this.$v.$invalid)

        return this.value
      }
    }
  },

  methods: {
    reset () {
      this.$v.$reset()
      this.$emit('input', emptyRank())
    }
  }
}
</script>
