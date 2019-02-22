<template>
  <VCard>
    <VToolbar
      flat
      card
      prominent
    >
      <VToolbarTitle>
        {{ title }}
      </VToolbarTitle>
      <VProgressCircular
        v-if="loading"
        :indeterminate="loading"
        class="ml-3"
      />
      <VSpacer />
      <slot name="toolbar" />
    </VToolbar>
    <slot />
  </VCard>
</template>

<script>
export default {
  name: 'UtilityCard',

  props: {
    title: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
