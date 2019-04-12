<template>
  <PageWrapper :breadcrumbs="breadcrumbs">
    <UtilityCard title="Daftar TPP">
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
            <VListTileTitle>Tambah TPP</VListTileTitle>
          </VListTile>
        </UtilityCardMenu>
      </template>
      <TppControl ref="tppControl">
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
              <td>{{ item.value | rupiah }}</td>
              <td class="text-xs-right">
                <VBtn
                  small
                  @click="$router.push({ name: 'tpp.edit', params: { id: item.id } })"
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
      </TppControl>
    </UtilityCard>
    <TppModal ref="tppModal" />
  </PageWrapper>
</template>

<script>
import { mapActions } from 'vuex'
import TppControl from '@/components/Renderless/TppControl'
import TppModal from '@/components/Modals/TppModal'
import breadcrumbs from './breadcrumbs'
import { DESTROY_TPP } from '@/stores/types/tppTypes'
import { rupiah } from '@/filters/currency'

export default {
  name: 'TppIndex',

  components: {
    TppControl,
    TppModal
  },

  filters: {
    rupiah
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
          text: 'TPP',
          sortable: true
        },
        {
          value: 'value',
          text: 'Besaran',
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
      deleteTpp: DESTROY_TPP
    }),

    refreshTable () {
      this.$refs.tppControl.fetch()
    },

    showModal (editMode = false, id = null) {
      this.$refs.tppModal.open(editMode, id)
    },

    deleteHandler (id) {
      this.$confirm(
        'Hapus TPP',
        'Apakah anda yakin ingin menghapus data TPP ini ini?',
        async () => {
          await this.deleteTpp(id)
          await this.$refs.tppControl.fetch()
        }
      )
    }
  }
}
</script>
