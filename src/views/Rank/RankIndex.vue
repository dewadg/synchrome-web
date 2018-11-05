<template>
  <PageWrapper>
    <VCard>
      <VToolbar
        flat
        card
        prominent
      >
        <VToolbarTitle>Daftar Golongan</VToolbarTitle>
        <VBtn
          @click="showModal"
          small
          color="primary"
          class="ml-3"
        >
          Tambah Baru
        </VBtn>
        <VSpacer />
        <VTextField
          prepend-icon="search"
          placeholder="Pencarian"
          v-model="query"
        />
      </VToolbar>
      <RankControl ref="rankControl">
        <template slot-scope="{ items }">
          <VDataTable
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
                <VBtn small>Sunting</VBtn>
                <VBtn small>Hapus</VBtn>
              </td>
            </template>
          </VDataTable>
        </template>
      </RankControl>
    </VCard>
    <RankModal
      ref="rankModal"
      @submit="refreshTable"
    />
  </PageWrapper>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import RankControl from '@/components/Renderless/RankControl'
import RankModal from './RankModal'

@Component({
  components: {
    RankControl,
    RankModal
  }
})
export default class RankIndex extends Vue {
  query = ''

  tableHeaders = [
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

  refreshTable () {
    this.$refs.rankControl.fetchHandler()
  }

  showModal () {
    this.$refs.rankModal.open()
  }
}
</script>
