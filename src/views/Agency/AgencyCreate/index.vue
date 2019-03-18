<template>
  <PageWrapper :breadcrumbs="breadcrumbs">
    <UtilityCard
      :loading="loading"
      title="Tambah OPD"
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
            <AgencyForm v-model="isFormValid" />
          </VCardText>
        </VFlex>
      </VLayout>
    </UtilityCard>
  </PageWrapper>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AgencyForm from '@/components/Forms/AgencyForm'
import { GET_AGENCY_FORM, RESET_WORKSHIFT_FORM, STORE_AGENCY } from '@/stores/types/agencyTypes'
import breadcrumbs from './breadcrumbs'

export default {
  name: 'AgencyCreate',

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

  destroyed () {
    this.$store.commit(RESET_WORKSHIFT_FORM)
  },

  methods: {
    async submitHandler () {
      if (!this.isFormValid) return

      await this.$store.dispatch(STORE_AGENCY, this.stateForm)
      
      if (!this.error) this.$router.push({ name: 'agencies' })
    }
  }
}
</script>
