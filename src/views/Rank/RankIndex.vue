<template>
  <PageWrapper>
    <VCard>
      <VToolbar
        flat
        card
        prominent
      >
        <VToolbarTitle>Daftar Golongan</VToolbarTitle>
        <VSpacer />
        <VTextField
          prepend-icon="search"
          placeholder="Pencarian"
        />
      </VToolbar>
      <RankControl>
        <template slot-scope="{ items }">
          <VDataTable
            :headers="tableHeaders"
            :items="items"
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
  </PageWrapper>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import RankControl from '@/components/Renderless/RankControl'

@Component({
  components: {
    RankControl
  }
})
export default class RankIndex extends Vue {
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
}
</script>
