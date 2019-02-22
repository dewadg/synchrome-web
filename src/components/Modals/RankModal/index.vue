<template>
  <VDialog
    v-model="showDialog"
    max-width="640px"
    @close="close"
  >
    <UtilityCard
      :title="title"
      :loading="loading"
    >
      <VCardText>
        <RankForm
          ref="rankForm"
          v-model="isFormValid"
          :disabled="loading"
        />
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
import { mapState, mapActions } from 'vuex'
import RankForm from '@/components/Forms/RankForm'
import {
  GET_RANK_FORM,
  SET_RANK_FORM,
  RESET_RANK_FORM,
  STORE_RANK,
  UPDATE_RANK,
  FETCH_ONE_RANK
} from '@/stores/types/rankTypes'

export default {
  name: 'RankModal',

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
    ...mapState({
      loading: ({ Rank }) => Rank.isStoring || Rank.isFetchingOne || Rank.isUpdating,
      error: ({ Rank }) => Rank.error
    }),

    form: {
      get() {
        return this.$store.getters[GET_RANK_FORM]
      },
      set(form) {
        this.$store.commit(SET_RANK_FORM, form)
      }
    },

    title () {
      return !this.editMode ? 'Tambah Golongan' : 'Edit Golongan'
    }
  },

  methods: {
    ...mapActions({
      storeRank: STORE_RANK,
      fetchRank: FETCH_ONE_RANK,
      updateRank: UPDATE_RANK
    }),

    close () {
      this.$store.commit(RESET_RANK_FORM)
      this.showDialog = false
    },

    async open (editMode = false, id = null) {
      this.$store.commit(RESET_RANK_FORM)
      this.editMode = editMode
      this.id = id

      if (this.editMode) {
        this.form = await this.fetchRank(this.id)
      }

      this.showDialog = true
    },

    async submit () {
      if (!this.isFormValid) return

      if (!this.editMode) {
        await this.storeRank(this.form)
      } else {
        await this.updateRank({
          id: this.id,
          data: this.form
        })
      }

      if (!this.error) {
        this.close()
        this.$refs.rankForm.resetValidations()
        this.$emit('submit')
      }
    }
  }
}
</script>
