<template>
  <div>
    <VProgressLinear
      v-if="loading"
      :indeterminate="loading"
    />
    <slot
      v-if="!loading"
      :items="ranks"
    />
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import { Action, State } from 'vuex-class';

@Component
export default class RankControl extends Vue {
  loading = true

  @State(state => state.Rank.data) ranks

  @Action('Rank/fetchAll') fetch

  async fetchHandler () {
    this.loading = true
    await this.fetch()
    this.loading = false
  }

  async mounted () {
    await this.fetchHandler()
  }
}
</script>
