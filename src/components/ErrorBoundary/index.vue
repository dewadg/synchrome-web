<template>
  <div>
    <VAlert
      type="error"
      v-model="error"
      dismissible
      outline
      class="mb-4"
    >
      {{ message }}
    </VAlert>
    <slot />
  </div>
</template>

<script>
export default {
  data () {
    return {
      error: false,
      message: 'Terjadi Kesalahan'
    }
  },

  methods: {
    trigger (err) {
      this.error = true
      this.message = err.message
    },

    reset () {
      this.error = false
      this.message = 'Terjadi kesalahan'
    }
  },

  errorCaptured (err, vm, info) {
    this.error = true
    this.message = err.message
  }
}
</script>
