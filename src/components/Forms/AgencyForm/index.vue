<template>
  <form>
    <VTextField
      :disabled="disabled || edit"
      label="Kode OPD"
      v-model="agencyId"
    />
    <VTextField
      :disabled="disabled"
      label="Nama OPD"
      v-model="agencyName"
    />
    <VTextField
      :disabled="disabled"
      label="No. Telpon"
      v-model="agencyPhone"
    />
    <VTextarea
      :disabled="disabled"
      label="Alamat"
      v-model="agencyAddress"
    />
  </form>
</template>

<script>
import { GET_AGENCY_FORM, SET_AGENCY_FORM } from '@/stores/types/agencyTypes'
import validator from './validator'

export default {
  name: 'AgencyForm',

  props: {
    value: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    edit: {
      type: Boolean,
      default: false
    }
  },

  validations: validator,

  computed: {
    agencyId: {
      get () {
        return this.$store.getters[GET_AGENCY_FORM].id
      },
      set (id) {
        this.$store.commit(SET_AGENCY_FORM, { id })
      }
    },
  
    agencyName: {
      get () {
        return this.$store.getters[GET_AGENCY_FORM].name
      },
      set (name) {
        this.$store.commit(SET_AGENCY_FORM, { name })
      }
    },

    agencyPhone: {
      get () {
        return this.$store.getters[GET_AGENCY_FORM].phone
      },
      set (phone) {
        this.$store.commit(SET_AGENCY_FORM, { phone })
      }
    },

    agencyAddress: {
      get () {
        return this.$store.getters[GET_AGENCY_FORM].address
      },
      set (address) {
        this.$store.commit(SET_AGENCY_FORM, { address })
      }
    }
  },

   watch: {
    agencyId: {
      deep: true,
      handler () {
        this.$emit('input', !this.$v.$invalid)
      }
    },

    agencyName: {
      deep: true,
      handler () {
        this.$emit('input', !this.$v.$invalid)
      }
    },

    agencyPhone: {
      deep: true,
      handler () {
        this.$emit('input', !this.$v.$invalid)
      }
    },

    agencyAddress: {
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
