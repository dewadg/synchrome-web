<template>
  <PageWrapper :breadcrumbs="breadcrumbs">
    <UtilityCard
      :loading="loading"
      title="Sunting Eselon"
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
import { mapState, mapGetters, mapActions } from 'vuex'
import EchelonForm from '@/components/Forms/EchelonForm'
import {
  FETCH_ONE_ECHELON,
  SET_ECHELON_FORM,
  GET_ECHELON_FORM,
  RESET_ECHELON_FORM,
  UPDATE_ECHELON
} from '@/stores/types/echelonTypes'
import breadcrumbs from './breadcrumbs'

export default {
  name: 'EchelonEdit',

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

  async mounted () {
    await this.fetchDataHandler()
  },

  destroyed () {
    this.$store.commit(RESET_ECHELON_FORM)
  },

  methods: {
    ...mapActions({
      fetchEchelon: FETCH_ONE_ECHELON
    }),

    async fetchDataHandler () {
      const data = await this.fetchEchelon(this.$route.params.id)

      this.$store.commit(SET_ECHELON_FORM, {
        id: data.id,
        name: data.name,
        echelonTypeId: data.type.id,
        supervisorId: data.supervisor ? data.supervisor.id : null
      })
    },

    async submitHandler () {
      if (!this.isFormValid) return

      await this.$store.dispatch(UPDATE_ECHELON, this.stateForm)
      
      if (!this.error) this.$router.push({ name: 'echelons' })
    }
  }
}
</script>
