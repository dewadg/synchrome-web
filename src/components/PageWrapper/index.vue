<template>
  <VContainer>
    <VLayout
      row
      wrap
      justify-center
    >
      <VFlex
        v-if="breadcrumbs.length > 0"
        lg11
        xs12
        class="mb-4"
      >
        <VBreadcrumbs
          :items="breadcrumbs"
          class="pa-0"
        >
          <VIcon slot="divider">chevron_right</VIcon>
        </VBreadcrumbs>
      </VFlex>
      <VFlex
        lg11
        md12
        xs12
      >
        <slot />
      </VFlex>
    </VLayout>
  </VContainer>
</template>

<script>
export default {
  name: 'Page',

  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  }
}
</script>

