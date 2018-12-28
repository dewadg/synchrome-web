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
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: true
    }
  },

  computed: {
    attendanceTypes () {
      return this.$store.getters['AttendanceType/getData']
    }
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
