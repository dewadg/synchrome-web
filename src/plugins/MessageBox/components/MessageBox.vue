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
