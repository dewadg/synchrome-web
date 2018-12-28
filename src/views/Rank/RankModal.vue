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
        <VBtn @click="submit">
          Simpan
        </VBtn>
      </VCardActions>
    </UtilityCard>
  </VDialog>
</template>

<script>
import {
  Vue,
  Component,
  Emit,
  Watch
} from 'vue-property-decorator'
import RankForm from '@/components/Forms/RankForm'
import { Action, Mutation, Getter } from 'vuex-class'

@Component({
  components: {
    RankForm
  }
})
export default class RankModal extends Vue {
  editMode = false

  id = null

  showDialog = false

  isFormValid = false

  @Getter('Rank/getForm') form

  get title () {
    return !this.editMode ? 'Tambah Golongan' : 'Edit Golongan'
  }

  @Watch('showDialog')
  onShowDialogChange (val) {
    if (!val) {
      this.$refs.errorBoundary.reset()
    }
  }

  @Mutation('Rank/clearForm') clearForm
  @Mutation('Rank/setForm') setForm

  @Action('Rank/store') storeRank
  @Action('Rank/fetch') fetchRank
  @Action('Rank/update') updateRank

  close () {
    this.clearForm()
    this.$refs.errorBoundary.reset()
    this.showDialog = false
  }

  async open (editMode = false, id = null) {
    this.editMode = editMode
    this.id = id

    if (this.editMode) {
      const rank = await this.fetchRank(this.id)
      this.setForm(rank)
    }

    this.showDialog = true
  }

  @Emit()
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
    } catch (err) {
      this.$refs.errorBoundary.trigger(err)
    }
  }
}
</script>
