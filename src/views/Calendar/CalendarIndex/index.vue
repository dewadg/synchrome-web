<template>
  <PageWrapper>
    <UtilityCard title="Daftar Kalender Kerja">
      <template slot="toolbar">
        <VTextField
          prepend-icon="search"
          placeholder="Pencarian"
          v-model="query"
        />
        <VMenu
          bottom
          left
        >
          <VBtn
            slot="activator"
            icon
          >
            <VIcon>more_vert</VIcon>
          </VBtn>
          <VList>
            <VListTile :to="{ name: 'calendars.create' }">
              <VListTileTitle>Tambah Kalender Kerja</VListTileTitle>
            </VListTile>
          </VList>
        </VMenu>
      </template>
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
              <td class="text-xs-right">
                <VBtn @click="$router.push({ name: 'calendars.edit', params: { id: props.item.id } })">
                  Sunting
                </VBtn>
              </td>
            </template>
          </VDataTable>
        </template>
      </CalendarControl>
    </UtilityCard>
  </PageWrapper>
</template>

<script>
import CalendarControl from '@/components/Renderless/CalendarControl'

export default {
  name: 'CalendarIndex',

  components: {
    CalendarControl
  },

  data () {
    return {
      query: ''
    }
  },

  computed: {
    tableHeaders () {
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
        },
        {
          value: null,
          text: 'Tindakan',
          sortable: false,
          align: 'right'
        }
      ]
    }
  }
}
</script>
