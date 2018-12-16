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
        <VToolbarTitle v-html="title" />
      </VToolbar>
      <VCardText>
        <VTextField
          label="Nama Event"
          v-model="value.title"
        />
        <DatePicker
          label="Tanggal Mulai"
          v-model="value.start"
        />
        <DatePicker
          label="Tanggal Berakhir"
          v-model="value.end"
        />
        <AttendanceTypeControl>
          <template slot-scope="{ items }">
            <VSelect
              label="Jenis Absensi/Presensi"
              v-model="value.attendanceTypeId"
              :items="filterAttendanceTypes(items)"
              item-value="id"
              item-text="name"
            />
          </template>
        </AttendanceTypeControl>
      </VCardText>
      <VCardActions>
        <VSpacer />
        <VBtn @click="close">Batal</VBtn>
        <VBtn
          @click="deleteHandler"
          color="red"
          dark
        >
          Hapus
        </VBtn>
        <VBtn
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
import AttendanceTypeControl from '@/components/Renderless/AttendanceType'

export default {
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

  methods: {
    show (editMode = false) {
      this.editMode = editMode
      this.displayed = true
    },

    close () {
      this.displayed = false
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
