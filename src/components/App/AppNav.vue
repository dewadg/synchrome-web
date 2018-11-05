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
    {
      to: 'users',
      label: 'Pengguna',
      icon: 'fa-user'
    },
    { divider: true }
  ]
}
</script>