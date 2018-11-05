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
import Vue from 'vue';
import Component from 'vue-class-component'

@Component({
  props: {
    value: {
      type: Boolean,
      default: true
    }
  }
})
export default class AppNav extends Vue {
  menus = [
    {
      to: 'dashboard',
      label: 'Dasbor',
      icon: 'fa-puzzle-piece'
    },
    { divider: true },

    // Master Data
    { subheader: 'Data Utama' },
    {
      to: 'opd',
      label: 'OPD',
      icon: 'fa-building'
    },
    {
      to: 'echelons',
      label: 'Eselon',
      icon: 'fa-users'
    },
    {
      to: 'ranks',
      label: 'Golongan',
      icon: 'fa-users'
    },
    {
      to: 'functional-positions',
      label: 'Jabatan Fungsional',
      icon: 'fa-level-up-alt'
    },
    {
      to: 'asn',
      label: 'ASN',
      icon: 'fa-user'
    },
    {
      to: 'calendars',
      label: 'Kalender Kerja',
      icon: 'fa-calendar-alt'
    },
    {
      to: 'workshifts',
      label: 'Shift Kerja',
      icon: 'fa-clipboard'
    },
    { divider: true },

    // App
    { subheader: 'Pengaturan' },
    {
      to: 'users',
      label: 'Pengguna',
      icon: 'fa-user'
    },
    {
      to: 'configs',
      label: 'Konfigurasi',
      icon: 'fa-cogs'
    }
  ]
}
</script>