<template>
  <VDialog
    v-model="showDialog"
    persistent
    max-width="480px"
  >
    <VCard>
      <VCardTitle class="headline">
        {{ title }}
      </VCardTitle>
      <VCardText>
        {{ description }}
      </VCardText>
      <VCardActions>
        <VSpacer />
        <VBtn
          color="red"
          flat
          @click="cancel"
        >
          Batal
        </VBtn>
        <VBtn
          color="green"
          flat
          @click="ok"
        >
          Lanjutkan
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script>
export default {
  data () {
    return {
      showDialog: false,
      title: '',
      description: ''
    }
  },

  methods: {
    show (title, description) {
      this.title = title
      this.description = description
      this.showDialog = true
    },

    ok () {
      this.showDialog = false
      this.$emit('ok')
    },

    cancel () {
      this.showDialog = false
      this.$emit('cancel')
    }
  }
}
</script>

<style>

</style>
