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
            <VSpacer />
            <VProgressCircular
              v-if="loading"
              :indeterminate="true"
              :size="28"
            />
          </VToolbar>
          <VCardText>
            <VAlert
              v-if="error"
              :value="true"
              type="error"
              v-html="error.message"
              class="mb-4"
            />
            <form
              @submit="submitHandler"
              @keypress.enter="submitHandler"
            >
              <VTextField
                label="Nama Pengguna"
                v-model="form.name"
                :disabled="loading"
              />
              <VTextField
                type="password"
                label="Kata Sandi"
                v-model="form.password"
                :disabled="loading"
              />
            </form>
          </VCardText>
          <VCardActions>
            <VBtn
              @click="submitHandler"
              color="primary"
              large
              block
              :disabled="loading"
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
import { mapState } from 'vuex'
import { AUTHENTICATE, RESET_LOGGED_USER_ERROR } from '@/stores/types/loggedUser'

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

  computed: {
    ...mapState({
      error: state => state.LoggedUser.error,
      loading: state => state.LoggedUser.loading
    })
  },

  watch: {
    form: {
      deep: true,
      handler () {
        this.$store.commit(RESET_LOGGED_USER_ERROR)
      }
    }
  },

  methods: {
    async submitHandler () {
      await this.$store.dispatch(AUTHENTICATE, this.form)

      if (!this.error) {
        this.$router.push({ name: 'dashboard' })
      }
    }
  }
}
</script>
