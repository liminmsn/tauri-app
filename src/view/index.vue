<template>
  <a-dropdown :trigger="['contextmenu']">
    <main class="p1 w-full flex" style="height: calc(100% - 28px);">
      <Shell />
    </main>
    <template #overlay>
      <Menu>
        <MenuItem key="1">1st menu item</MenuItem>
        <MenuItem key="2">2nd menu item</MenuItem>
        <MenuItem key="3">3rd menu item</MenuItem>
      </Menu>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import { Menu, MenuItem } from 'ant-design-vue';
import Shell from './views/Shell.vue';
</script>
<style scoped></style>