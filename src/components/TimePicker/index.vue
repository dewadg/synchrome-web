<template>
  <VMenu
    ref="menu"
    :disabled="disabled"
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="time"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <VTextField
      slot="activator"
      :disabled="disabled"
      :value="value"
      :label="label"
      :prepend-icon="prependIcon"
      readonly
    />
    <VTimePicker
      v-model="time"
      format="24hr"
      full-width
      @click:minute="$refs.menu.save(`${time}:00`)"
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
    </VTimePicker>
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
      type: [String, Object],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      menu: false,
      time: null
    }
  },

  watch: {
    time: {
      handler (val) {
        this.$emit('input', val)
      }
    }
  },

  methods: {
    updateHandler () {
      this.$refs.menu.save(`${this.time}:00`)
    },

    clearHandler () {
      this.$refs.menu.save(null)
    }
  }
}
</script>
