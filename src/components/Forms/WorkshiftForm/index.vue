<template>
  <form>
    <VTextField
      label="Nama Shift Kerja"
      v-model="workshiftName"
      :disabled="disabled"
    />
    <WorkshiftDetailsForm
      v-for="details in workshiftDetails"
      :key="details.id"
      :value="details"
      :disabled="disabled"
      @input="detailsChangeHandler"
    />
  </form>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import WorkshiftDetailsForm from '@/components/Forms/WorkshiftDetailsForm'
import { GET_WORKSHIFT_FORM, SET_WORKSHIFT_FORM } from '@/stores/types/workshiftTypes'
import validator from './validator'

export default {
  name: 'WorkshiftForm',

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

  components: {
    WorkshiftDetailsForm
  },

  computed: {
    ...mapGetters({
      stateForm: GET_WORKSHIFT_FORM
    }),

    workshiftName: {
      get () {
        return this.stateForm.name
      },
      set (name) {
        this.setStateForm({ name })
      }
    },

    workshiftDetails: {
      get () {
        return this.stateForm.details
      },
      set (details) {
        this.setStateForm({ details })
      }
    }
  },

  validations: {
    stateForm: validator
  },

  watch: {
    '$v.$invalid': {
      handler (val) {
        this.$emit('input', !val)
      }
    }
  },

  methods: {
    ...mapMutations({
      setStateForm: SET_WORKSHIFT_FORM
    }),

    detailsChangeHandler (data) {
      this.workshiftDetails = this.workshiftDetails.map((item) => {
        if (item.index !== data.index) return item

        return {
          ...item,
          ...data
        }
      })
    }
  }
}
</script>
