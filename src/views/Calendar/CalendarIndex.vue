<template>
  <PageWrapper>
    <VCard>
      <VToolbar
        flat
        card
        prominent
      >
        <VToolbarTitle>Daftar Kalender Kerja</VToolbarTitle>
        <VBtn
          @click="$router.push({ name: 'calendars.create' })"
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
      <CalendarControl ref="calendarControl">
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
              <td v-html="props.item.dateRange" />
            </template>
          </VDataTable>
        </template>
      </CalendarControl>
    </VCard>
  </PageWrapper>
</template>

<script>
import {
  Vue,
  Component
} from 'vue-property-decorator'
import CalendarControl from '@/components/Renderless/CalendarControl'

@Component({
  components: {
    CalendarControl
  }
})
export default class CalendarIndex extends Vue {
  query = ''

  get tableHeaders () {
    return [
      {
        value: 'id',
        text: 'Kode',
        sortable: false
      },
      {
        value: 'name',
        text: 'Kalender',
        sortable: true
      },
      {
        value: 'dateRange',
        text: 'Masa Berlaku',
        sortable: false
      }
    ]
  }
}
</script>

<style>

</style>
