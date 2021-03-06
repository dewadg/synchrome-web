<template>
  <PageWrapper :breadcrumbs="breadcrumbs">
    <UtilityCard title="Daftar Golongan">
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
          <VListTile @click="showModal(false, null)">
            <VListTileTitle>Tambah Golongan</VListTileTitle>
          </VListTile>
        </UtilityCardMenu>
      </template>
      <RankControl ref="rankControl">
        <template #default="{ items, loading }">
          <VCardText
            v-if="loading"
            class="text-xs-center"
          >
            <VProgressCircular
              :size="62"
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
                  @click="showModal(true, item.id)"
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
      </RankControl>
    </UtilityCard>
    <RankModal
      ref="rankModal"
      @submit="refreshTable"
    />
  </PageWrapper>
</template>

<script>
import { mapActions } from 'vuex'
import RankControl from '@/components/Renderless/RankControl'
import RankModal from '@/components/Modals/RankModal'
import { DESTROY_RANK } from '@/stores/types/rankTypes'
import breadcrumbs from './breadcrumbs'

export default {
  name: 'RankIndex',

  components: {
    RankControl,
    RankModal
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
          text: 'Golongan',
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
      deleteRank: DESTROY_RANK
    }),

    refreshTable () {
      this.$refs.rankControl.fetch()
    },

    showModal (editMode = false, id = null) {
      this.$refs.rankModal.open(editMode, id)
    },

    deleteHandler (id) {
      this.$confirm(
        'Hapus Golongan',
        'Apakah anda yakin ingin menghapus data golongan ini?',
        async () => {
          await this.deleteRank(id)
          await this.refreshTable()
        }
      )
    }
  }
}
</script>
