<template>
  <VMenu
    offset-y
    :close-on-content-click="false"
    :close-on-click="false"
    :nudge-width="250"
    :nudge-bottom="5"
    :nudge-right="-250"
  >
    <VBtn
      slot="activator"
      icon
      @click="clear"
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
