<template>
  <VMenu
    bottom
    left
  >
    <VBtn
      slot="activator"
      icon
    >
      <VIcon>more_vert</VIcon>
    </VBtn>
    <VList>
      <slot />
    </VList>
  </VMenu>
</template>

<script>
export default {
  name: 'UtilityCardMenu'
}
</script>
