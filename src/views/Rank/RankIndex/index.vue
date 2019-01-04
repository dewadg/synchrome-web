<template>
  <PageWrapper>
    <UtilityCard title="Daftar Golongan">
      <template slot="toolbar">
        <UtilityCardSearchBar
          placeholder="Pencarian"
          v-model="query"
        />
        <UtilityCardMenu>
          <VListTile @click="refreshTable">
            <VListTileTitle>Perbarui</VListTileTitle>
          </VListTile>
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
            <template
              slot="items"
              slot-scope="props"
            >
              <td v-html="props.item.id" />
              <td v-html="props.item.name" />
              <td class="text-xs-right">
                <VBtn
                  @click="showModal(true, props.item.id)"
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
