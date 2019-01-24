<template>
  <PageWrapper>
    <UtilityCard title="Daftar Shift Kerja">
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
          <VListTile :to="{ name: 'workshifts.create' }">
            <VListTileTitle>Tambah Shift Kerja</VListTileTitle>
          </VListTile>
        </UtilityCardMenu>
      </template>
      <WorkshiftControl ref="workshiftControl">
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
      </WorkshiftControl>
    </UtilityCard>
  </PageWrapper>
</template>

<script>
import WorkshiftControl from '@/components/Renderless/WorkshiftControl'
import { mapActions } from 'vuex'

export default {
  name: 'WorkshiftIndex',

  components: {
    WorkshiftControl
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
          text: 'Shift Kerja',
          sortable: true
        },
        {
          value: null,
          text: 'Tindakan',
          align: 'right',
          sortable: false
        }
      ]
    }
  },

  methods: {
    ...mapActions({
      deleteWorkshift: 'Workshift/delete'
    }),

    refreshTable () {
      this.$refs.workshiftControl.fetch()
    },

    deleteHandler (id) {
      this.$confirm(
        'Hapus Shift Kerja',
        'Apakah anda yakin ingin menghapus data shift kerja ini ini?',
        async () => {
          await this.deleteCalendar(id)
          await this.$refs.calendarControl.fetch()
        }
      )
    }
  }
}
</script>
