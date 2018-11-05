<template>
  <VDialog
    v-model="showDialog"
    persistent
    max-width="480px"
  >
    <VCard>
      <VCardTitle
        class="headline"
        v-html="title"
      />
      <VCardText v-html="description" />
      <VCardActions>
        <VSpacer />
        <VBtn
          @click="cancel"
          color="red"
          flat
        >
          Batal
        </VBtn>
        <VBtn
          @click="ok"
          color="green"
          flat
        >
          Lanjutkan
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script>
import {
  Vue,
  Component,
  Emit
} from 'vue-property-decorator'

@Component
export default class MessageBox extends Vue {
  showDialog = false

  title = ''

  description = ''

  show (title, description) {
    this.title = title
    this.description = description
    this.showDialog = true
  }

  @Emit()
  cancel () {
    this.showDialog = false
  }

  @Emit()
  ok () {
    this.showDialog = false
  }
}
</script>

<style>

</style>
