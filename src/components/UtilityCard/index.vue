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
      <VSpacer />
      <slot name="toolbar" />
    </VToolbar>
    <slot />
  </VCard>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
