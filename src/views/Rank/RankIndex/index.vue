<template>
  <PageWrapper>
    <UtilityCard title="Daftar Golongan">
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
          <VListTile @click="showModal(false, null)">
            <VListTileTitle>Tambah Golongan</VListTileTitle>
          </VListTile>
        </UtilityCardMenu>
      </template>
      <RankControl ref="rankControl">
        <template slot-scope="{ items, loading }">
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
            <template v-slot:items="{ item }">
              <td v-html="item.id" />
              <td v-html="item.name" />
              <td class="text-xs-right">
                <VBtn
                  @click="showModal(true, item.id)"
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
      </RankControl>
    </UtilityCard>
    <RankModal
      ref="rankModal"
      @submit="refreshTable"
    />
  </PageWrapper>
</template>

<script>
import RankControl from '@/components/Renderless/RankControl'
import RankModal from '@/components/Modals/RankModal'
import { mapActions } from 'vuex'

export default {
  name: 'RankIndex',

  components: {
    RankControl,
    RankModal
  },

  data () {
    return {
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
      deleteRank: 'Rank/delete'
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
