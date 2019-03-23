<template>
  <PageWrapper :breadcrumbs="breadcrumbs">
    <UtilityCard title="Daftar Eselon">
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
          <VListTile :to="{ name: 'echelons.create' }">
            <VListTileTitle>Tambah Eselon</VListTileTitle>
          </VListTile>
        </UtilityCardMenu>
      </template>
      <EchelonControl ref="echelonControl">
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
              <td>{{ item.type.name }}</td>
              <td class="text-xs-right">
                <VBtn
                  small
                  @click="$router.push({ name: 'echelons.edit', params: { id: item.id } })"
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
      </EchelonControl>
    </UtilityCard>
  </PageWrapper>
</template>

<script>
import { mapActions } from 'vuex'
import EchelonControl from '@/components/Renderless/EchelonControl'
import { DESTROY_ECHELON } from '@/stores/types/echelonTypes'
import breadcrumbs from './breadcrumbs'

export default {
  name: 'EchelonIndex',

  components: {
    EchelonControl
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
          text: 'Eselon',
          sortable: true
        },
        {
          value: 'name',
          text: 'Jenis',
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
      deleteEchelon: DESTROY_ECHELON
    }),

    refreshTable () {
      this.$refs.echelonControl.fetch()
    },

    deleteHandler (id) {
      this.$confirm(
        'Hapus Eselon',
        'Apakah anda yakin ingin menghapus data eselon ini?',
        async () => {
          await this.deleteEchelon(id)
          await this.$refs.echelonControl.fetch()
        }
      )
    }
  }
}
</script>
