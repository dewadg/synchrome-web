<template>
  <PageWrapper>
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
            <WorkshiftForm
              v-model="isFormValid"
              :loading="loading"
            />
          </VCardText>
        </VFlex>
      </VLayout>
    </UtilityCard>
  </PageWrapper>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import WorkshiftForm from '@/components/Forms/WorkshiftForm'
import {
  GET_WORKSHIFT_FORM,
  SET_WORKSHIFT_FORM,
  FETCH_ONE_WORKSHIFT,
  RESET_WORKSHIFT_FORM,
  UPDATE_WORKSHIFT
} from '@/stores/types/workshiftTypes'

export default {
  name: 'WorkshiftEdit',

  components: {
    WorkshiftForm
  },

  data () {
    return {
      loading: false,
      isFormValid: false
    }
  },

  computed: {
    ...mapGetters({
      getStateForm: GET_WORKSHIFT_FORM
    }),

    stateForm: {
      get () {
        return this.getStateForm
      },

      set (val) {
        this.setStateForm(val)
      }
    }
  },

  destroyed () {
    this.$store.commit(RESET_WORKSHIFT_FORM)
  },

  mounted () {
    this.fetchDataHandler()
  },

  methods: {
    ...mapMutations({
      setStateForm: SET_WORKSHIFT_FORM
    }),

    ...mapActions({
      fetchOneWorkshift: FETCH_ONE_WORKSHIFT
    }),

    async fetchDataHandler () {
      this.loading = true
      const data = await this.fetchOneWorkshift(this.$route.params.id)
      this.stateForm = {
        ...this.stateForm,
        ...data
      }
      this.loading = false
    },

    async submitHandler () {
      if (!this.isFormValid) return

      await this.$store.dispatch(UPDATE_WORKSHIFT, this.stateForm)
      
      this.$router.push({ name: 'workshifts' })
    }
  }
}
</script>
