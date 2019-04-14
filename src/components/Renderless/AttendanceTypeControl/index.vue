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
import { mapState, mapActions } from 'vuex'
import { GET_ATTENDANCE_TYPE_DATA, FETCH_ALL_ATTENDANCE_TYPES } from '@/stores/types/attendanceTypeTypes'

export default {
  name: 'AttendanceTypeControl',

  computed: {
    ...mapState({
      loading: ({ AttendanceType }) => AttendanceType.isFetching,
      error: ({ AttendanceType }) => AttendanceType.error
    }),

    items () {
      return this.$store.getters[GET_ATTENDANCE_TYPE_DATA]
    }
  },

  mounted () {
    this.fetch()
  },

  methods: {
    ...mapActions({
      fetchAttendanceTypes: FETCH_ALL_ATTENDANCE_TYPES
    }),

    async fetch () {
      await this.fetchAttendanceTypes()
    }
  }
}
</script>
