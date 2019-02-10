<template>
  <VMenu
    :close-on-content-click="false"
    offset-y
    :nudge-width="250"
    :nudge-bottom="5"
    :nudge-right="-250"
  >
    <VBtn
      slot="activator"
      icon
    >
      <VIcon>search</VIcon>
    </VBtn>
    <VTextField
      v-model="keyword"
      solo
      small
      class="mt-0"
      hide-details
      :placeholder="placeholder"
      @blur="clear"
    />
  </VMenu>
</template>

<script>
export default {
  name: 'UtilityCardSearchBar',

  props: {
    value: {
      type: String,
      required: true
    },

    placeholder: {
      type: String,
      default: 'Find anything...'
    }
  },

  computed: {
    keyword: {
      get () {
        return this.value
      },

      set (val) {
        this.$emit('input', val)
      }
    }
  },

  methods: {
    clear () {
      this.$emit('input', '')
    }
  }
}
</script>
