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
        <TppForm
          ref="tppForm"
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
import TppForm from '@/components/Forms/TppForm'
import {
  GET_TPP_FORM,
  SET_TPP_FORM,
  RESET_TPP_FORM,
  STORE_TPP,
  UPDATE_TPP,
  FETCH_ONE_TPP
} from '@/stores/types/tppTypes'

export default {
  name: 'TppModal',

  components: {
    TppForm
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
      loading: ({ Tpp }) => Tpp.isStoring || Tpp.isFetchingOne || Tpp.isUpdating,
      error: ({ Tpp }) => Tpp.error
    }),

    form: {
      get() {
        return this.$store.getters[GET_TPP_FORM]
      },
      set(form) {
        this.$store.commit(SET_TPP_FORM, form)
      }
    },

    title () {
      return !this.editMode ? 'Tambah TPP' : 'Edit TPP'
    }
  },

  methods: {
    ...mapActions({
      storeTpp: STORE_TPP,
      fetchTpp: FETCH_ONE_TPP,
      updateTpp: UPDATE_TPP
    }),

    close () {
      this.$store.commit(RESET_TPP_FORM)
      this.showDialog = false
    },

    async open (editMode = false, id = null) {
      this.$store.commit(RESET_TPP_FORM)
      this.editMode = editMode
      this.id = id

      if (this.editMode) {
        this.form = await this.fetchTpp(this.id)
      }

      this.showDialog = true
    },

    async submit () {
      if (!this.isFormValid) return

      if (!this.editMode) {
        await this.storeTpp(this.form)
      } else {
        await this.updateTpp({
          id: this.id,
          data: this.form
        })
      }

      if (!this.error) {
        this.close()
        this.$refs.tppForm.resetValidations()
        this.$emit('submit')
      }
    }
  }
}
</script>
