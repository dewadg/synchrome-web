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
          <VListTile :to="{ name: 'tpp.create' }">
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
              <td>{{ item.value }}</td>
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
  </PageWrapper>
</template>

<script>
import { mapActions } from 'vuex'
import TppControl from '@/components/Renderless/TppControl'
import breadcrumbs from './breadcrumbs'
import { DESTROY_TPP } from '@/stores/types/tppTypes'

export default {
  name: 'TppIndex',

  components: {
    TppControl
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
