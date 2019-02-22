<template>
  <VDialog
    :value="displayed"
    persistent
    max-width="640px"
  >
    <VCard>
      <VToolbar
        card
        prominent
      >
        <VToolbarTitle>
          {{ title }}
        </VToolbarTitle>
      </VToolbar>
      <VCardText>
        <VTextField
          v-model="value.title"
          label="Nama Event"
        />
        <DatePicker
          v-model="value.start"
          label="Tanggal Mulai"
        />
        <DatePicker
          v-model="value.end"
          label="Tanggal Berakhir"
        />
        <AttendanceTypeControl>
          <template slot-scope="{ items, loading }">
            <VProgressLinear
              v-if="loading"
              :indeterminate="true"
            />
            <VSelect
              v-if="!loading"
              v-model="value.attendanceTypeId"
              label="Jenis Absensi/Presensi"
              :items="filterAttendanceTypes(items)"
              item-value="id"
              item-text="name"
            />
          </template>
        </AttendanceTypeControl>
      </VCardText>
      <VCardActions>
        <VSpacer />
        <VBtn @click="close">
          Batal
        </VBtn>
        <VBtn
          color="red"
          dark
          @click="deleteHandler"
        >
          Hapus
        </VBtn>
        <VBtn
          :disabled="$v.$invalid"
          color="primary"
          @click="saveHandler"
        >
          Simpan
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script>
import AttendanceTypeControl from '@/components/Renderless/AttendanceTypeControl'
import validator from './validator'

export default {
  name: 'FullCalendarEventModal',

  components: {
    AttendanceTypeControl
  },

  props: {
    value: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      displayed: false,
      editMode: false
    }
  },

  computed: {
    title () {
      return !this.editMode ? 'Tambah Event' : 'Edit Event'
    }
  },

  validations: {
    value: validator
  },

  methods: {
    show (editMode = false) {
      this.editMode = editMode
      this.displayed = true
    },

    close () {
      this.displayed = false

      this.$emit('input', {
        title: '',
        start: null,
        end: null,
        attendanceTypeId: null
      })
    },

    filterAttendanceTypes (items) {
      const allowed = ['L']

      return items.filter(item => allowed.indexOf(item.id) > -1)
    },

    deleteHandler () {
      this.$emit('eventDeleted', this.value)
      this.close()
    },

    saveHandler () {
      if (!this.editMode) {
        this.$emit('eventAdded', this.value)
      } else {
        this.$emit('eventUpdated', this.value)
      }

      this.close()
    }
  }
}
</script>
