<template>
  <PageWrapper>
    <UtilityCard title="Daftar Kalender Kerja">
      <template slot="toolbar">
        <VBtn
          icon
          @click="refreshTable"
        >
          <VIcon>refresh</VIcon>
        </VBtn>
        <UtilityCardSearchBar
          placeholder="Pencarian"
          v-model="query"
        />
        <UtilityCardMenu>
          <VListTile :to="{ name: 'calendars.create' }">
            <VListTileTitle>Tambah Kalender Kerja</VListTileTitle>
          </VListTile>
        </UtilityCardMenu>
      </template>
      <CalendarControl ref="calendarControl">
        <template slot-scope="{ items, loading }">
          <VCardText
            v-if="loading"
            class="text-xs-center"
          >
            <VProgressCircular
              :size="64"
              :indeterminate="true"
            />
          </VCardText>
          <VDataTable
            v-if="!loading"
            :headers="tableHeaders"
            :items="items"
            :search="query"
          >
            <template v-slot:items="{ item }">
              <td v-html="item.id" />
              <td v-html="item.name" />
              <td v-html="item.dateRange" />
              <td v-html="item.published ? 'Publik' : 'Draft'" />
              <td class="text-xs-right">
                <VBtn
                  @click="$router.push({ name: 'calendars.edit', params: { id: item.id } })"
                  small
                >
                  Sunting
                </VBtn>
                <VBtn
                  @click="deleteHandler(item.id)"
                  small
                >
                  Hapus
                </VBtn>
              </td>
            </template>
          </VDataTable>
        </template>
      </CalendarControl>
    </UtilityCard>
  </PageWrapper>
</template>

<script>
import CalendarControl from '@/components/Renderless/CalendarControl'
import { mapActions } from 'vuex'
import { DESTROY_CALENDAR } from '@/stores/types/calendar'

export default {
  name: 'CalendarIndex',

  components: {
    CalendarControl
  },

  data () {
    return {
      query: ''
    }
  },

  computed: {
    tableHeaders () {
      return [
        {
          value: 'id',
          text: 'Kode',
          sortable: false
        },
        {
          value: 'name',
          text: 'Kalender',
          sortable: true
        },
        {
          value: 'dateRange',
          text: 'Masa Berlaku',
          sortable: false
        },
        {
          value: 'published',
          text: 'Status',
          sortable: false
        },
        {
          value: null,
          text: 'Tindakan',
          sortable: false,
          align: 'right'
        }
      ]
    }
  },

  methods: {
    ...mapActions({
      deleteCalendar: DESTROY_CALENDAR
    }),

    refreshTable () {
      this.$refs.calendarControl.fetch()
    },

    deleteHandler (id) {
      this.$confirm(
        'Hapus Kalender Kerja',
        'Apakah anda yakin ingin menghapus data kalender kerja ini ini?',
        async () => {
          await this.deleteCalendar(id)
          await this.$refs.calendarControl.fetch()
        }
      )
    }
  }
}
</script>
