<template>
  <PageWrapper :breadcrumbs="breadcrumbs">
    <UtilityCard title="Tambah Shift Kerja">
      <template v-slot:toolbar>
        <VBtn
          :disabled="!isFormValid"
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
            <WorkshiftForm v-model="isFormValid" />
          </VCardText>
        </VFlex>
      </VLayout>
    </UtilityCard>
  </PageWrapper>
</template>

<script>
import WorkshiftForm from '@/components/Forms/WorkshiftForm'
import { GET_WORKSHIFT_FORM, RESET_WORKSHIFT_FORM, STORE_WORKSHIFT } from '@/stores/types/workshiftTypes'

export default {
  name: 'WorkshiftCreate',

  components: {
    WorkshiftForm
  },

  data () {
    return {
      breadcrumbs: [
        {
          text: 'Dashboard',
          to: { name: 'dashboard' },
          exact: true
        },
        {
          text: 'Shift Kerja',
          to: { name: 'workshifts' },
          exact: true
        },
        {
          text: 'Tambah Shift Kerja',
          disabled: true
        }
      ],
      isFormValid: false
    }
  },

  computed: {
    stateForm () {
      return this.$store.getters[GET_WORKSHIFT_FORM]
    }
  },

  destroyed () {
    this.$store.commit(RESET_WORKSHIFT_FORM)
  },

  methods: {
    async submitHandler () {
      if (!this.isFormValid) return

      await this.$store.dispatch(STORE_WORKSHIFT, this.stateForm)
      
      this.$router.push({ name: 'workshifts' })
    }
  }
}
</script>
