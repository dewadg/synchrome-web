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
import { GET_ATTENDANCE_TYPE_DATA, FETCH_ALL_ATTENDANCE_TYPES } from '@/stores/types/attendanceTypeTypes'

export default {
  computed: {
    ...mapState({
      loading: state => state.AttendanceType.loading
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
