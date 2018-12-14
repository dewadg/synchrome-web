<template>
  <VNavigationDrawer
    :value="value"
    fixed
    app
  >
    <VList>
      <template v-for="(menu, index) in menus">
        <VDivider
          v-if="menu.divider"
          :key="index"
          class="mb-2 mt-1"
        />
        <VSubheader
          v-else-if="menu.subheader"
          :key="index"
          v-html="menu.subheader"
        />
        <VListTile
          v-else
          :key="index"
          :to="{ name: menu.to }"
        >
          <VListTileAction class="grey--text text--darken-2">
            <VIcon v-html="menu.icon" />
          </VListTileAction>
          <VListTileContent>
            <VListTileTitle class="grey--text text--darken-2">
              {{ menu.label }}
            </VListTileTitle>
          </VListTileContent>
        </VListTile>
      </template>
    </VList>
  </VNavigationDrawer>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      menus: [
        {
          to: 'dashboard',
          label: 'Dasbor',
          icon: 'dashboard'
        },
        { divider: true },

        // Master Data
        { subheader: 'Data Utama' },
        {
          to: 'opd',
          label: 'OPD',
          icon: 'home'
        },
        {
          to: 'echelons',
          label: 'Eselon',
          icon: 'group'
        },
        {
          to: 'ranks',
          label: 'Golongan',
          icon: 'group'
        },
        {
          to: 'functional-positions',
          label: 'Jabatan Fungsional',
          icon: 'work'
        },
        {
          to: 'asn',
          label: 'ASN',
          icon: 'group'
        },
        {
          to: 'calendars',
          label: 'Kalender Kerja',
          icon: 'event'
        },
        {
          to: 'workshifts',
          label: 'Shift Kerja',
          icon: 'schedule'
        },
        { divider: true },

        // App
        { subheader: 'Pengaturan' },
        {
          to: 'users',
          label: 'Pengguna',
          icon: 'group'
        },
        {
          to: 'configs',
          label: 'Konfigurasi',
          icon: 'settings'
        }
      ]
    }
  }
}
</script>
