<template>
  <div>
    <slot
      :items="items"
      :loading="loading"
      :fetch="fetch"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { GET_ATTENDANCE_TYPE_DATA, FETCH_ALL_ATTENDANCE_TYPES } from '@/stores/types/attendanceType'

export default {
  computed: {
    ...mapState({
      loading: state => state.AttendanceType.loading
    }),

    items () {
      return this.$store.getters[GET_ATTENDANCE_TYPE_DATA]
    }
  },

  methods: {
    ...mapActions({
      fetchAttendanceTypes: FETCH_ALL_ATTENDANCE_TYPES
    }),

    async fetch () {
      await this.fetchAttendanceTypes()
    }
  },

  async mounted () {
    await this.fetch()
  }
}
</script>
