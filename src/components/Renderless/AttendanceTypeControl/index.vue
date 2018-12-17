<template>
  <div>
    <VProgressLinear
      v-if="loading"
      :indeterminate="loading"
    />
    <slot
      v-if="!loading"
      :items="attendanceTypes"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: true
    }
  },

  computed: {
    ...mapState({
      attendanceTypes: state => state.AttendanceType.data
    })
  },

  methods: {
    ...mapActions({
      fetch: 'AttendanceType/fetchAll'
    }),

    async fetchHandler () {
      this.loading = true
      await this.fetch()
      this.loading = false
    }
  },

  async mounted () {
    await this.fetchHandler()
  }
}
</script>
