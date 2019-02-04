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
import { AUTHENTICATE } from '@/stores/types/loggedUser'

export default {
  name: 'LoginView',

  data () {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },

  watch: {
    form: {
      deep: true,
      handler (val) {
        this.$refs.errorBoundary.reset()
      }
    }
  },

  methods: {
    async submitHandler () {
      try {
        await this.$store.dispatch(AUTHENTICATE, this.form)

        this.$router.push({ name: 'dashboard' })
      } catch (err) {
        this.$refs.errorBoundary.trigger(err)
      }
    }
  }
}
</script>
