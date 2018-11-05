<template>
  <VContainer>
    <VLayout
      row
      wrap
    >
      <VFlex
        lg8
        md12
        xs12
        offset-lg2
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
