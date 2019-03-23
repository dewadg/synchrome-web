<template>
  <form>
    <VTextField
      :disabled="disabled || edit"
      label="Kode Eselon"
      v-model="echelonId"
    />
    <VTextField
      :disabled="disabled"
      label="Nama Eselon"
      v-model="echelonName"
    />
    <VSelect
      :disabled="disabled"
      label="Jenis"
      v-model="echelonTypeId"
      :items="echelonTypes"
      item-value="id"
      item-text="name"
    />
    <VSelect
      :disabled="disabled"
      label="Supervisor"
      v-model="echelonSupervisorId"
      :items="echelons"
      item-value="id"
      item-text="name"
      autocomplete
    />
  </form>
</template>

<script>
import { mapGetters } from 'vuex'
import { GET_ECHELON_TYPE_DATA } from '@/stores/types/echelonTypeTypes'
import { GET_ECHELON_DATA, GET_ECHELON_FORM, SET_ECHELON_FORM } from '@/stores/types/echelonTypes'
import validator from './validator'

export default {
  name: 'EchelonForm',

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
    ...mapGetters({
      echelonTypes: GET_ECHELON_TYPE_DATA,
      echelons: GET_ECHELON_DATA
    }),

    echelonId: {
      get () {
        return this.$store.getters[GET_ECHELON_FORM].id
      },
      set (id) {
        this.$store.commit(SET_ECHELON_FORM, { id })
      }
    },
  
    echelonName: {
      get () {
        return this.$store.getters[GET_ECHELON_FORM].name
      },
      set (name) {
        this.$store.commit(SET_ECHELON_FORM, { name })
      }
    },

    echelonTypeId: {
      get () {
        return this.$store.getters[GET_ECHELON_FORM].echelonTypeId
      },
      set (echelonTypeId) {
        this.$store.commit(SET_ECHELON_FORM, { echelonTypeId })        
      }
    },

    echelonSupervisorId: {
      get () {
        return this.$store.getters[GET_ECHELON_FORM].supervisorId
      },
      set (supervisorId) {
        this.$store.commit(SET_ECHELON_FORM, { supervisorId })
      }
    }
  },

   watch: {
    echelonId: {
      deep: true,
      handler () {
        this.$emit('input', !this.$v.$invalid)
      }
    },

    echelonName: {
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
