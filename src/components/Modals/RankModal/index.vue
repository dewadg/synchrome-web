<template>
  <VDialog
    v-model="showDialog"
    max-width="640px"
    @close="close"
  >
    <UtilityCard :title="title">
      <VCardText>
        <ErrorBoundary ref="errorBoundary">
          <RankForm
            ref="rankForm"
            v-model="isFormValid"
          />
        </ErrorBoundary>
      </VCardText>
      <VCardActions>
        <VSpacer />
        <VBtn @click="close">
          Batal
        </VBtn>
        <VBtn
          :disabled="!isFormValid"
          color="primary"
          @click="submit"
        >
          Simpan
        </VBtn>
      </VCardActions>
    </UtilityCard>
  </VDialog>
</template>

<script>
import RankForm from '@/components/Forms/RankForm'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import {
  GET_RANK_FORM,
  SET_RANK_FORM,
  RESET_RANK_FORM,
  STORE_RANK,
  UPDATE_RANK,
  FETCH_ONE_RANK
} from '@/stores/types/rankTypes'

export default {
  components: {
    RankForm
  },

  data () {
    return {
      editMode: false,
      id: null,
      showDialog: false,
      isFormValid: false
    }
  },

  computed: {
    ...mapGetters({
      form: GET_RANK_FORM
    }),

    title () {
      return !this.editMode ? 'Tambah Golongan' : 'Edit Golongan'
    }
  },

  watch: {
    showDialog: {
      handler (val) {
        if (!val) {
          this.$refs.errorBoundary.reset()
        }
      }
    }
  },

  methods: {
    ...mapMutations({
      clearForm: RESET_RANK_FORM,
      setForm: SET_RANK_FORM
    }),

    ...mapActions({
      storeRank: STORE_RANK,
      fetchRank: FETCH_ONE_RANK,
      updateRank: UPDATE_RANK
    }),

    close () {
      this.clearForm()
      this.$refs.errorBoundary.reset()
      this.showDialog = false
    },

    async open (editMode = false, id = null) {
      this.clearForm()
      this.editMode = editMode
      this.id = id

      if (this.editMode) {
        const rank = await this.fetchRank(this.id)
        this.setForm(rank)
      }

      this.showDialog = true
    },

    async submit () {
      if (!this.isFormValid) return

      try {
        if (!this.editMode) {
          await this.storeRank(this.form)
        } else {
          await this.updateRank({
            id: this.id,
            data: this.form
          })
        }

        this.close()
        this.$refs.rankForm.resetValidations()
        this.$emit('submit')
      } catch (err) {
        this.$refs.errorBoundary.trigger(err)
      }
    }
  }
}
</script>
