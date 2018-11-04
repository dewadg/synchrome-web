<template>
  <VNavigationDrawer
    v-model="drawer"
    fixed
    app
  >
    <VList>
      <template v-for="(menu, index) in menus">
        <VListTile :key="index">
          <VListTileAction>
            <VIcon v-html="menu.icon" />
          </VListTileAction>
          <VListTileContent>
            <VListTileTitle>
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

@Component
export default class AppNav extends Vue {
  drawer = null

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
  ]
}
</script>