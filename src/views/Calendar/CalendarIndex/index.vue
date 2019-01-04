<template>
  <PageWrapper>
    <UtilityCard title="Daftar Kalender Kerja">
      <template slot="toolbar">
        <VTextField
          prepend-icon="search"
          placeholder="Pencarian"
          v-model="query"
        />
        <VMenu
          bottom
          left
        >
          <VBtn
            slot="activator"
            icon
          >
            <VIcon>more_vert</VIcon>
          </VBtn>
          <VList>
            <VListTile @click="refreshTable">
              <VListTileTitle>Perbarui</VListTileTitle>
            </VListTile>
            <VListTile :to="{ name: 'calendars.create' }">
              <VListTileTitle>Tambah Kalender Kerja</VListTileTitle>
            </VListTile>
          </VList>
        </VMenu>
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
            <template
              slot="items"
              slot-scope="props"
            >
              <td v-html="props.item.id" />
              <td v-html="props.item.name" />
              <td v-html="props.item.dateRange" />
              <td class="text-xs-right">
                <VBtn
                  @click="$router.push({ name: 'calendars.edit', params: { id: props.item.id } })"
                  small
                >
                  Sunting
                </VBtn>
                <VBtn
                  @click="deleteHandler(props.item.id)"
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
import { mapActions } from 'vuex';

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
      deleteCalendar: 'Calendar/delete'
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
