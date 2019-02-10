<template>
  <VMenu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <VTextField
      slot="activator"
      :value="formattedDate"
      :label="label"
      :prepend-icon="prependIcon"
      readonly
    />
    <VDatePicker
      v-model="date"
      no-title
      scrollable
      @input="updateHandler"
    >
      <VSpacer />
      <VBtn
        flat
        color="primary"
        @click="clearHandler"
      >
        Clear
      </VBtn>
    </VDatePicker>
  </VMenu>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    prependIcon: {
      type: String,
      default: null
    },
    value: {
      default: null
    }
  },

  data () {
    return {
      menu: false,
      date: null
    }
  },

  computed: {
    formattedDate () {
      if (!moment(this.value).isValid()) return ''

      return moment(this.value).format('D MMMM YYYY')
    }
  },

  watch: {
    date: {
      handler (val) {
        this.$emit('input', val)
      }
    }
  },

  methods: {
    updateHandler () {
      this.$refs.menu.save(this.date)
    },

    clearHandler () {
      this.date = null
    }
  }
}
</script>
