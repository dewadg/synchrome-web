<template>
  <div>
    <slot
      :items="items"
      :loading="loading"
      :fetch="fetch"
      :error="error"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { FETCH_ALL_TPP, GET_TPP_DATA } from '@/stores/types/tppTypes'

export default {
  name: 'TppControl',

  computed: {
    ...mapState({
      loading: ({ Tpp }) => Tpp.isFetching,
      error: ({ Tpp }) => Tpp.error
    }),

    items () {
      return this.$store.getters[GET_TPP_DATA]
    }
  },

  mounted () {
    this.fetch()
  },

  methods: {
    async fetch () {
      await this.$store.dispatch(FETCH_ALL_TPP)
    }
  }
}
</script>
