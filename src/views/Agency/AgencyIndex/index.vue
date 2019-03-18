<template>
  <PageWrapper :breadcrumbs="breadcrumbs">
    <UtilityCard title="Daftar OPD">
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
          <VListTile :to="{ name: 'agencies.create' }">
            <VListTileTitle>Tambah OPD</VListTileTitle>
          </VListTile>
        </UtilityCardMenu>
      </template>
      <AgencyControl ref="agencyControl">
        <template #default="{ items, loading }">
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
            <template #items="{ item }">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td class="text-xs-right">
                <VBtn
                  small
                  @click="$router.push({ name: 'agencies.edit', params: { id: item.id } })"
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
      </AgencyControl>
    </UtilityCard>
  </PageWrapper>
</template>

<script>
import { mapActions } from 'vuex'
import AgencyControl from '@/components/Renderless/AgencyControl'
import { DESTROY_AGENCY } from '@/stores/types/agencyTypes'
import breadcrumbs from './breadcrumbs'

export default {
  name: 'AgencyIndex',

  components: {
    AgencyControl
  },

  data () {
    return {
      breadcrumbs,
      query: '',
      tableHeaders: [
        {
          value: 'id',
          text: 'Kode',
          sortable: false
        },
        {
          value: 'name',
          text: 'OPD',
          sortable: true
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
      deleteAgency: DESTROY_AGENCY
    }),

    refreshTable () {
      this.$refs.agencyControl.fetch()
    },

    deleteHandler (id) {
      this.$confirm(
        'Hapus OPD',
        'Apakah anda yakin ingin menghapus data OPD ini?',
        async () => {
          await this.deleteAgency(id)
          await this.$refs.agencyControl.fetch()
        }
      )
    }
  }
}
</script>
