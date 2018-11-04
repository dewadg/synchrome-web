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
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class ErrorBoundary extends Vue {
  error = false

  message = 'Terjadi kesalahan'

  errorCaptured (err, vm, info) {
    this.error = true
    this.message = err
  }

  trigger (message) {
    this.error = true
    this.message = message
  }

  reset () {
    this.error = false
    this.message = 'Terjadi kesalahan'
  }
}
</script>
