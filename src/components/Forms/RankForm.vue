<template>
  <form>
    <VTextField
      label="Kode"
      v-model="value.id"
      @input="$v.value.id.$touch"
      :error-messages="idErrors"
    />
    <VTextField
      label="Golongan"
      v-model="value.name"
      @input="$v.value.name.$touch"
      :error-messages="nameErrors"
    />
  </form>
</template>

<script>
import {
  Vue,
  Component,
  Emit,
  Watch
} from 'vue-property-decorator'
import { required } from 'vuelidate/lib/validators'
import { emptyRank } from '@/stores/Rank'

@Component({
  props: {
    value: {
      type: Object,
      default: emptyRank()
    }
  },

  validations: {
    value: {
      id: {
        required
      },
      name: {
        required
      }
    }
  }
})
export default class RankForm extends Vue {
  get idErrors () {
    const err = []

    if (!this.$v.value.id.$dirty) return err

    if (!this.$v.value.id.required) {
      err.push('Kode golongan harus diisi')
    }

    return err
  }

  get nameErrors () {
    const err = []

    if (!this.$v.value.name.$dirty) return err

    if (!this.$v.value.name.required) {
      err.push('Kode golongan harus diisi')
    }

    return err
  }

  @Watch('value', { deep: true })
  @Emit('input')
  onValueChange () {
    this.$emit('isValid', !this.$v.$invalid)

    return this.value
  }

  @Emit('input')
  reset () {
    this.$v.$reset()

    return emptyRank()
  }
}
</script>
