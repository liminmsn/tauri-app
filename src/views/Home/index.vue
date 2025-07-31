<template>
  <main class="container px-2">
    <!-- <iframe ref="web" src="https://poki.com/zh"></iframe> -->
    <Button @click="open()">start</Button>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Button } from "ant-design-vue";
import { fetch } from '@tauri-apps/plugin-http';
function open() {
  fetch("https://www2.jiumodiary.com/init_hubs.php", {
    method: 'POST',
    body:null
  })
}
</script>

<style scoped></style>