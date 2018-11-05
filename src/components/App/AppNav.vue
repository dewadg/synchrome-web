<template>
  <VNavigationDrawer
    :value="value"
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
  ]
}
</script>