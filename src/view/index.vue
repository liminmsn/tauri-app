<template>
  <main class="p1 w-full" style="height: calc(100% - 28px);">
    <a-dropdown :trigger="['contextmenu']">
      <Card class="w-full h-full">
        <Button>start</Button>
      </Card>
      <template #overlay>
        <a-menu>
          <a-menu-item key="1">1st menu item</a-menu-item>
          <a-menu-item key="2">2nd menu item</a-menu-item>
          <a-menu-item key="3">3rd menu item</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </main>
</template>

<script setup lang="ts">
import { Button, Card } from "ant-design-vue";
</script>
<style scoped></style>