<template>
  <PageWrapper :breadcrumbs="breadcrumbs">
    <UtilityCard title="Daftar ASN">
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
          <VListTile @click="$router.push({ name: 'asn.create' })">
            <VListTileTitle>Tambah ASN</VListTileTitle>
          </VListTile>
        </UtilityCardMenu>
      </template>
      <AsnControl ref="asnControl">
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
              <td>{{ item.agency.name }}</td>
              <td class="text-xs-right">
                <VBtn
                  small
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
      </AsnControl>
    </UtilityCard>
  </PageWrapper>
</template>

<script>
import { mapActions } from 'vuex'
import AsnControl from '@/components/Renderless/AsnControl'
import breadcrumbs from './breadcrumbs'
import { DESTROY_ASN } from '@/stores/types/asnTypes'

export default {
  name: 'AsnIndex',

  components: {
    AsnControl
  },

  data () {
    return {
      breadcrumbs,
      query: '',
      tableHeaders: [
        {
          value: 'id',
          text: 'NIP',
          sortable: false
        },
        {
          value: 'name',
          text: 'ASN',
          sortable: true
        },
        {
          value: 'agency.name',
          text: 'OPD',
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
      deleteAsn: DESTROY_ASN
    }),

    refreshTable () {
      this.$refs.asnControl.fetch()
    },

    deleteHandler (id) {
      this.$confirm(
        'Hapus ASN',
        'Apakah anda yakin ingin menghapus data ASN ini ini?',
        async () => {
          await this.deleteAsn(id)
          await this.$refs.asnControl.fetch()
        }
      )
    }
  }
}
</script>
