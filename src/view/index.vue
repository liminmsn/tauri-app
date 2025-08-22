<template>
  <a-dropdown :trigger="['contextmenu']">
    <main class="p1 w-full flex" style="height: calc(100% - 28px);">
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
</script>
<style scoped></style>