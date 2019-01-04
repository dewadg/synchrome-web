<template>
  <VDialog
    v-model="showDialog"
    max-width="640px"
    @close="close"
  >
    <UtilityCard :title="title">
      <VCardText>
        <ErrorBoundary ref="errorBoundary">
          <RankForm v-model="isFormValid" />
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
      form: 'Rank/getForm'
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
      clearForm: 'Rank/clearForm',
      setForm: 'Rank/setForm'
    }),

    ...mapActions({
      storeRank: 'Rank/store',
      fetchRank: 'Rank/fetch',
      updateRank: 'Rank/update'
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
        this.$emit('submit')
      } catch (err) {
        this.$refs.errorBoundary.trigger(err)
      }
    }
  }
}
</script>
