<template>
  <VContainer
    fluid
    fill-height
  >
    <VLayout
      align-center
      justify-center
    >
      <VFlex
        md4
        xs12
      >
        <VCard class="elevation-8">
          <VToolbar flat>
            <VToolbarTitle>Masuk ke Synchrome</VToolbarTitle>
          </VToolbar>
          <VCardText>
            <ErrorBoundary ref="errorBoundary">
              <form @submit="submitHandler">
                <VTextField
                  label="Nama Pengguna"
                  v-model="form.name"
                />
                <VTextField
                  type="password"
                  label="Kata Sandi"
                  v-model="form.password"
                />
              </form>
            </ErrorBoundary>
          </VCardText>
          <VCardActions>
            <VBtn
              @click="submitHandler"
              color="primary"
              large
              block
            >
              Masuk
            </VBtn>
          </VCardActions>
        </VCard>
      </VFlex>
    </VLayout>
  </VContainer>
</template>

<script>
import {
  Vue,
  Component,
  Watch
} from 'vue-property-decorator';

@Component
export default class LoginView extends Vue {
  form = {
    name: '',
    password: ''
  }

  @Watch('form', { deep: true })
  formChangeHandler () {
    this.$refs.errorBoundary.reset()
  }

  async submitHandler () {
    try {
      await this.$auth.authenticate(this.form)

      this.$router.push({ name: 'dashboard' })
    } catch (err) {
      this.$refs.errorBoundary.trigger(err.message)
    }
  }

  mounted () {
    if (this.$auth.check) {
      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>
