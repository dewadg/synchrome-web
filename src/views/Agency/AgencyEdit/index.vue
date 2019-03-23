<template>
  <PageWrapper :breadcrumbs="breadcrumbs">
    <UtilityCard
      :loading="loading"
      title="Sunting OPD"
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
              Kode OPD sudah terpakai
            </VAlert>
            <AgencyForm
              :disabled="loading"
              v-model="isFormValid"
              :edit="true"
            />
          </VCardText>
        </VFlex>
      </VLayout>
    </UtilityCard>
  </PageWrapper>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import AgencyForm from '@/components/Forms/AgencyForm'
import {
  FETCH_ONE_AGENCY,
  GET_AGENCY_FORM,
  SET_AGENCY_FORM,
  RESET_AGENCY_FORM,
  UPDATE_AGENCY
} from '@/stores/types/agencyTypes'
import breadcrumbs from './breadcrumbs'

export default {
  name: 'AgencyEdit',

  components: {
    AgencyForm
  },

  data () {
    return {
      breadcrumbs,
      isFormValid: false
    }
  },

  computed: {
    ...mapState({
      loading: ({ Agency }) => Agency.isStoring,
      error: ({ Agency }) => Agency.error
    }),

    ...mapGetters({
      stateForm: GET_AGENCY_FORM,
    })
  },

  async mounted () {
    await this.fetchDataHandler()
  },

  destroyed () {
    this.$store.commit(RESET_AGENCY_FORM)
  },

  methods: {
    ...mapActions({
      fetchAgency: FETCH_ONE_AGENCY
    }),

    async fetchDataHandler () {
      const agency = await this.fetchAgency(this.$route.params.id)

      this.$store.commit(SET_AGENCY_FORM, {
        id: agency.id,
        name: agency.name,
        phone: agency.phone,
        address: agency.address
      })
    },

    async submitHandler () {
      if (!this.isFormValid) return

      await this.$store.dispatch(UPDATE_AGENCY, this.stateForm)
      
      if (!this.error) this.$router.push({ name: 'agencies' })
    }
  }
}
</script>
