<template>
  <a-dropdown :trigger="['contextmenu']">
    <main class="p1 w-full flex" style="height: calc(100% - 28px);">
      <Shell />
    </main>
    <template #overlay>
      <a-menu>
        <a-menu-item key="1">1st menu item</a-menu-item>
        <a-menu-item key="2">2nd menu item</a-menu-item>
        <a-menu-item key="3">3rd menu item</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import { Button, Card } from 'ant-design-vue';
import Shell from './views/Shell.vue';
</script>
<style scoped></style>