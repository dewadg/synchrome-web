<template>
  <PageWrapper :breadcrumbs="breadcrumbs">
    <UtilityCard
      :loading="loading"
      title="Tambah ASN"
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
              Kode ASN sudah terpakai
            </VAlert>
            <AsnForm v-model="isFormValid" />
          </VCardText>
        </VFlex>
      </VLayout>
    </UtilityCard>
  </PageWrapper>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AsnForm from '@/components/Forms/AsnForm'
import { GET_ASN_FORM, RESET_ASN_FORM, STORE_ASN } from '@/stores/types/asnTypes'
import breadcrumbs from './breadcrumbs'

export default {
  name: 'AsnCreate',

  components: {
    AsnForm
  },

  data () {
    return {
      breadcrumbs,
      isFormValid: false
    }
  },

  computed: {
    ...mapState({
      loading: ({ Asn }) => Asn.isStoring,
      error: ({ Asn }) => Asn.error
    }),

    ...mapGetters({
      stateForm: GET_ASN_FORM,
    })
  },

  destroyed () {
    this.$store.commit(RESET_ASN_FORM)
  },

  methods: {
    async submitHandler () {
      if (!this.isFormValid) return

      await this.$store.dispatch(STORE_ASN, this.stateForm)
      
      if (!this.error) this.$router.push({ name: 'asn' })
    }
  }
}
</script>
