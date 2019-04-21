<template>
  <PageWrapper :breadcrumbs="breadcrumbs">
    <UtilityCard
      :loading="loading"
      title="Sunting ASN"
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
            <AsnForm
              v-model="isFormValid"
              :edit-mode="true"
            />
          </VCardText>
        </VFlex>
      </VLayout>
      <VCardActions>
        <VSpacer />
        <VBtn
          :disabled="!isFormValid || loading"
          color="primary"
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
      </VCardActions>
    </UtilityCard>
  </PageWrapper>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AsnForm from '@/components/Forms/AsnForm'
import { FETCH_ONE_ASN, GET_ASN_FORM, SET_ASN_FORM, RESET_ASN_FORM, UPDATE_ASN } from '@/stores/types/asnTypes'
import breadcrumbs from './breadcrumbs'

export default {
  name: 'AsnEdit',

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
      loading: ({ Asn }) => Asn.isUpdating || Asn.isFetchingOne,
      error: ({ Asn }) => Asn.error
    }),

    ...mapGetters({
      stateForm: GET_ASN_FORM,
    })
  },

  async mounted () {
    const asn = await this.$store.dispatch(FETCH_ONE_ASN, this.$route.params.id)

    this.$store.commit(SET_ASN_FORM, {
      id: asn.id,
      agencyId: asn.agency.id,
      rankId: asn.rank.id,
      echelonId: asn.echelon.id,
      tppId: asn.tpp.id,
      workshiftId: asn.workshift.id,
      calendarId: asn.calendar.id,
      pin: asn.pin,
      name: asn.name,
      phone: asn.phone,
      address: asn.address
    })
  },

  destroyed () {
    this.$store.commit(RESET_ASN_FORM)
  },

  methods: {
    async submitHandler () {
      if (!this.isFormValid) return

      const payload = { ...this.stateForm }
      delete payload.id

      await this.$store.dispatch(UPDATE_ASN, {
        id: this.stateForm.id,
        data: payload
      })
      
      if (!this.error) this.$router.push({ name: 'asn' })
    }
  }
}
</script>
