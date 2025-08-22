<template>
  <a-dropdown :trigger="['contextmenu']">
    <main class="p1 w-full flex" style="height: calc(100% - 28px);">
      <Card class="p-2 h-full w-40 mr-1">
        <Button type="primary" @click="obj.emit('a', { a: 'hello world' })">start</Button>
      </Card>
      <Card class="p-2 h-full w-full">
        {{ label }}
      </Card>
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
import { useGlobalEvent } from "@/event/GlobalEvent";
import { Button, Card } from "ant-design-vue";
import { ref } from "vue";
const label = ref('');
const obj = useGlobalEvent();
obj.on('a', data => {
  console.log(data);
});
</script>
<style scoped></style>