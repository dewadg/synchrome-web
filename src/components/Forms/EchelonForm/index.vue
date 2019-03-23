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
    <EchelonTypeControl>
      <template #default="{ loading, items }">
        <VProgressLinear
          v-if="loading"
          :indeterminate="true"
        />
        <VSelect
          v-if="!loading"
          :disabled="disabled"
          label="Jenis"
          v-model="echelonTypeId"
          :items="items"
          item-value="id"
          item-text="name"
        />
      </template>
    </EchelonTypeControl>
    <EchelonControl>
      <template #default="{ loading, items }">
        <VProgressLinear
          v-if="loading"
          :indeterminate="true"
        />
        <VAutocomplete
          v-if="!loading"
          :disabled="disabled"
          label="Supervisor"
          v-model="echelonSupervisorId"
          :items="[{ id: null, name: '--Tanpa Supervisor--' }, ...items]"
          item-value="id"
          item-text="name"
          autocomplete
        />
      </template>
    </EchelonControl>
  </form>
</template>

<script>
import EchelonTypeControl from '@/components/Renderless/EchelonTypeControl'
import EchelonControl from '@/components/Renderless/EchelonControl'
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

  components: {
    EchelonTypeControl,
    EchelonControl
  },

  validations: validator,

  computed: {
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
