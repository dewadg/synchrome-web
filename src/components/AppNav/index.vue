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
        >
          {{ menu.subheader }}
        </VSubheader>
        <VListTile
          v-else
          :key="index"
          :to="{ name: menu.to }"
        >
          <VListTileAction class="grey--text text--darken-2">
            <VIcon>
              {{ menu.icon }}
            </VIcon>
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
import menus from '@/constants/menus'

export default {
  name: 'AppNav',

  props: {
    value: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      menus
    }
  }
}
</script>
