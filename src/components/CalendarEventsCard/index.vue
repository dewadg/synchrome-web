<template>
  <VCard>
    <VToolbar
      card
      prominent
    >
      <VToolbarTitle>Daftar Event</VToolbarTitle>
      <VSpacer />
      <VBtn
        :disabled="value.length === 0"
        :dark="value.length > 0"
        color="red"
        small
        class="ml-2"
        @click="clearEvents"
      >
        Kosongkan Event
      </VBtn>
    </VToolbar>
    <VList>
      <VListGroup
        v-for="item in groupedEvents"
        :key="item.name"
        no-action
      >
        <VListTile slot="activator">
          <VListTileAvatar>
            <VIcon>event</VIcon>
          </VListTileAvatar>
          <VListTileContent>
            <VListTileTitle>
              {{ item.name }} ({{ item.data.length }})
            </VListTileTitle>
          </VListTileContent>
        </VListTile>
        <VListTile
          v-for="calendarEvent in item.data"
          :key="item.index + calendarEvent.start"
        >
          <VListTileContent>
            <VListTileTitle>
              <strong>{{ calendarEvent.start }}</strong>: {{ calendarEvent.title }}
            </VListTileTitle>
          </VListTileContent>
        </VListTile>
      </VListGroup>
    </VList>
  </VCard>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    value: {
      type: Array,
      required: true
    }
  },

  computed: {
    groupedEvents () {
      let events = moment.months()
        .reduce((carry, item) => {
          const date = moment(item, 'MMMM')

          carry[date.format('MM')] = {
            index: parseInt(date.format('M'), 10),
            name: item,
            data: []
          }

          return carry
        }, {})

      this.value.forEach((item) => {
        const date = moment(item.start)

        events[date.format('MM')].data = [
          ...events[date.format('MM')].data,
          item
        ]

        events[date.format('MM')].data.sort((a, b) => {
          if (moment(a.start).isBefore(moment(b.start))) return -1
          if (moment(a.start).isAfter(moment(b.start))) return 1
          return 0
        })
      })

      events = Object.values(events)
      events.sort((a, b) => a.index - b.index)

      return events
    }
  },

  methods: {
    clearEvents () {
      this.$emit('input', [])
    }
  }
}
</script>
