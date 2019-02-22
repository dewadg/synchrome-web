<template>
  <form>
    <VTextField
      v-model="rankId"
      :disabled="disabled"
      :error-messages="rankIdErrors"
      label="Kode"
      @input="$v.rankId.$touch"
    />
    <VTextField
      v-model="rankName"
      :disabled="disabled"
      :error-messages="rankNameErrors"
      label="Golongan"
      @input="$v.rankName.$touch"
    />
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { GET_RANK_FORM, SET_RANK_FORM } from '@/stores/types/rankTypes'

export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  validations: {
    rankId: { required },
    rankName: { required }
  },

  computed: {
    rankId: {
      get () {
        return this.$store.getters[GET_RANK_FORM].id
      },

      set (val) {
        this.$store.commit(SET_RANK_FORM, { id: val })
      }
    },

    rankName: {
      get () {
        return this.$store.getters[GET_RANK_FORM].name
      },

      set (val) {
        this.$store.commit(SET_RANK_FORM, { name: val })
      }
    },

    rankIdErrors () {
      const err = []

      if (!this.$v.rankId.$invalid) return err

      if (this.$v.rankId.$dirty && !this.$v.rankId.required) {
        err.push('Kode golongan harus diisi')
      }

      return err
    },

    rankNameErrors () {
      const err = []

      if (!this.$v.rankName.$invalid) return err

      if (this.$v.rankName.$dirty && !this.$v.rankName.required) {
        err.push('Kode golongan harus diisi')
      }

      return err
    }
  },

  watch: {
    rankId: {
      deep: true,
      handler () {
        this.$emit('input', !this.$v.$invalid)
      }
    },

    rankName: {
      deep: true,
      handler () {
        this.$emit('input', !this.$v.$invalid)
      }
    }
  },

  methods: {
    resetValidations () {
      this.$v.$reset()
    }
  }
}
</script>
