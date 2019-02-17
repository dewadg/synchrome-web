<template>
  <div class="tw-flex tw-mb-2 tw-items-center">
    <h3 class="subheading tw-w-48">
      {{ value.index | dayByIndex }}
    </h3>
    <div class="tw-flex-1 tw-pr-2">
      <TimePicker
        :disabled="!value.active"
        label="Masuk"
        :value="value.checkIn"
        @input="checkInChangeHandler"
      />
    </div>
    <div class="tw-flex-1 tw-pl-2">
      <TimePicker
        :disabled="!value.active"
        :value="value.checkOut"
        label="Keluar"
        @input="checkOutChangeHandler"
      />
    </div>
    <div class="tw-pl-4">
      <VSwitch
        :input-value="value.active"
        @change="activeChangeHandler"
      />
    </div>
  </div>
</template>

<script>
import TimePicker from '@/components/TimePicker'
import { dayByIndex } from '@/helpers/date'

export default {
  name: 'WorkshiftDetailsForm',

  props: {
    value: {
      type: Object,
      required: true
    }
  },

  components: {
    TimePicker
  },

  filters: {
    dayByIndex
  },

  methods: {
    emitInput (val) {
      this.$emit('input', {
        ...this.value,
        ...val
      })
    },

    checkInChangeHandler (checkIn) {
      this.emitInput({ checkIn })
    },

    checkOutChangeHandler (checkOut) {
      this.emitInput({ checkOut })
    },

    activeChangeHandler (active) {
      this.emitInput({ active })
    }
  }
}
</script>
