<template>
  <PageWrapper :breadcrumbs="breadcrumbs">
    <UtilityCard title="Daftar Shift Kerja">
      <template slot="toolbar">
        <VBtn
          icon
          @click="refreshTable"
        >
          <VIcon>refresh</VIcon>
        </VBtn>
        <UtilityCardSearchBar
          v-model="query"
          placeholder="Pencarian"
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
            <template v-slot:items="{ item }">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td class="text-xs-right">
                <VBtn
                  small
                  @click="$router.push({ name: 'workshifts.edit', params: { id: item.id } })"
                >
                  Sunting
                </VBtn>
                <VBtn
                  small
                  @click="deleteHandler(item.id)"
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
import { mapActions } from 'vuex'
import WorkshiftControl from '@/components/Renderless/WorkshiftControl'
import { DESTROY_WORKSHIFT } from '@/stores/types/workshiftTypes'

export default {
  name: 'WorkshiftIndex',

  components: {
    WorkshiftControl
  },

  data () {
    return {
      breadcrumbs: [
        {
          text: 'Dashboard',
          to: { name: 'dashboard' },
          exact: true
        },
        {
          text: 'Shift Kerja',
          disabled: true
        }
      ],
      query: '',
      tableHeaders: [
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
      deleteWorkshift: DESTROY_WORKSHIFT
    }),

    refreshTable () {
      this.$refs.workshiftControl.fetch()
    },

    deleteHandler (id) {
      this.$confirm(
        'Hapus Shift Kerja',
        'Apakah anda yakin ingin menghapus data shift kerja ini ini?',
        async () => {
          await this.deleteWorkshift(id)
          await this.$refs.workshiftControl.fetch()
        }
      )
    }
  }
}
</script>
