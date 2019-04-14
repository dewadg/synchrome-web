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
import { FETCH_ALL_ASN, GET_ASN_DATA } from '@/stores/types/asnTypes'

export default {
  name: 'AsnControl',

  computed: {
    ...mapState({
      loading: ({ Asn }) => Asn.isFetching,
      error: ({ Asn }) => Asn.error
    }),

    items () {
      return this.$store.getters[GET_ASN_DATA]
    }
  },

  mounted () {
    this.fetch()
  },

  methods: {
    async fetch () {
      await this.$store.dispatch(FETCH_ALL_ASN)
    }
  }
}
</script>
