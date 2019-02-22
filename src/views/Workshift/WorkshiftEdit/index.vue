<template>
  <PageWrapper :breadcrumbs="breadcrumbs">
    <UtilityCard
      :loading="loading"
      title="Sunting Shift Kerja"
    >
      <template v-slot:toolbar>
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
            <WorkshiftForm
              v-model="isFormValid"
              :disabled="loading"
            />
          </VCardText>
        </VFlex>
      </VLayout>
    </UtilityCard>
  </PageWrapper>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
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
          text: 'Sunting Shift Kerja',
          disabled: true
        }
      ],
      isFormValid: false
    }
  },

  computed: {
    ...mapState({
      loading: ({ Workshift }) => Workshift.isFetchingOne || Workshift.isUpdating,
      error: ({ Workshift }) => Workshift.error
    }),

    stateForm: {
      get () {
        return this.$store.getters[GET_WORKSHIFT_FORM]
      },

      set (form) {
        this.$store.commit(SET_WORKSHIFT_FORM, form)
      }
    }
  },

  destroyed () {
    this.$store.commit(RESET_WORKSHIFT_FORM)
  },

  async mounted () {
    await this.fetchDataHandler()
  },

  methods: {
    ...mapActions({
      fetchOneWorkshift: FETCH_ONE_WORKSHIFT
    }),

    async fetchDataHandler () {
      this.stateForm = {
        ...this.stateForm,
        ...await this.fetchOneWorkshift(this.$route.params.id)
      }
    },

    async submitHandler () {
      if (!this.isFormValid) return

      await this.$store.dispatch(UPDATE_WORKSHIFT, this.stateForm)
      
      if (!this.error) this.$router.push({ name: 'workshifts' })
    }
  }
}
</script>
