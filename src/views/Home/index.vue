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
async function open() {
  const res = await fetch("https://www.jiumodiary.com/init_hubs.php", {
    method: "POST",
    body: `q=小草&remote_ip=&time_int=${Date.now()}`
  });
  console.log(await res.text());
  
}
</script>

<style scoped></style>