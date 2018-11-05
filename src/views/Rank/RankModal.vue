<template>
  <VDialog
    v-model="showDialog"
    max-width="640px"
    @close="close"
  >
    <VCard>
      <VToolbar
        flat
        card
        prominent
      >
        <VToolbarTitle v-html="title" />
      </VToolbar>
      <VCardText>
        <ErrorBoundary ref="errorBoundary">
          <RankForm
            ref="form"
            v-model="form"
            @isValid="toggleValidation"
          />
        </ErrorBoundary>
      </VCardText>
      <VCardActions>
        <VSpacer />
        <VBtn @click="close">
          Batal
        </VBtn>
        <VBtn
          :disabled="!formValid"
          @click="submit"
          color="primary"
        >
          Simpan
        </VBtn>
      </VCardActions>
    </VCard>
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
import { emptyRank } from '@/stores/Rank'
import { Action } from 'vuex-class';

@Component({
  components: {
    RankForm
  }
})
export default class RankModal extends Vue {
  editMode = false

  showDialog = false

  id = null

  formValid = false

  form = emptyRank()

  get title () {
    if (!this.editMode) {
      return 'Tambah Golongan'
    }

    return 'Sunting Golongan'
  }

  @Watch('showDialog')
  onShowDialogChange (val) {
    if (!val) {
      this.$refs.form.reset()
      this.$refs.errorBoundary.reset()
    }
  }

  toggleValidation (val) {
    this.formValid = val
  }

  close () {
    this.$refs.form.reset()
    this.$refs.errorBoundary.reset()
    this.showDialog = false
  }

  open (editMode = false, id = null) {
    this.editMode = editMode
    this.id = id
    this.showDialog = true
  }

  @Action('Rank/store') storeRank

  @Emit()
  async submit () {
    if (!this.formValid) return

    try {
      if (!this.editMode) {
        await this.storeRank(this.form)
      }

      this.close()
    } catch (err) {
      this.$refs.errorBoundary.trigger(err.message)
    }
  }
}
</script>
