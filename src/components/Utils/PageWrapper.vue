<template>
  <VContainer>
    <VLayout
      row
      wrap
    >
      <VFlex
        lg10
        md12
        xs12
        offset-lg1
      >
        <slot />
      </VFlex>
    </VLayout>
  </VContainer>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class PageWrapper extends Vue {

}
</script>
