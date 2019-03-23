<template>
  <PageWrapper :breadcrumbs="breadcrumbs">
    <UtilityCard
      :loading="loading"
      title="Tambah Eselon"
    >
      <template #toolbar>
        <VBtn
          :disabled="!isFormValid || loading"
          color="primary"
          flat
          @click="submitHandler"
        >
          <VIcon
            class="mr-2"
            small
          >
            save
          </VIcon>
          Simpan
        </VBtn>
      </template>
      <VLayout justify-center>
        <VFlex
          md9
          xs12
        >
          <VCardText>
            <VAlert
              v-if="error && error.response.data.id"
              :value="true"
              type="error"
              class="mb-2"
              dismissible
            >
              Kode eselon sudah terpakai
            </VAlert>
            <EchelonForm v-model="isFormValid" />
          </VCardText>
        </VFlex>
      </VLayout>
    </UtilityCard>
  </PageWrapper>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import EchelonForm from '@/components/Forms/EchelonForm'
import { GET_ECHELON_FORM, RESET_ECHELON_FORM, STORE_ECHELON } from '@/stores/types/echelonTypes'
import breadcrumbs from './breadcrumbs'

export default {
  name: 'EchelonCreate',

  components: {
    EchelonForm
  },

  data () {
    return {
      breadcrumbs,
      isFormValid: false
    }
  },

  computed: {
    ...mapState({
      loading: ({ Echelon }) => Echelon.isStoring,
      error: ({ Echelon }) => Echelon.error
    }),

    ...mapGetters({
      stateForm: GET_ECHELON_FORM,
    })
  },

  destroyed () {
    this.$store.commit(RESET_ECHELON_FORM)
  },

  methods: {
    async submitHandler () {
      if (!this.isFormValid) return

      await this.$store.dispatch(STORE_ECHELON, this.stateForm)
      
      if (!this.error) this.$router.push({ name: 'echelons' })
    }
  }
}
</script>
