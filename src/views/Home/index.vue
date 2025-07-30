<template>
  <main class="container px-2">
    <!-- <iframe ref="web" src="https://poki.com/zh"></iframe> -->
    <Button @click="open()">start</Button>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";
import { Button } from "ant-design-vue";
import { WebviewWindow } from "@tauri-apps/api/webviewWindow";
const greetMsg = ref("");
const name = ref("");
async function greet_() {
  greetMsg.value = await invoke("greet", { name: name.value });
}
function open() {
  const child = new WebviewWindow('second-window', {
    url: 'https://poki.com/zh',
    width: 800,
    height: 600,
    // title: '第二个窗口',
    resizable: true,
    fullscreen: true,
  });

  child.once('tauri://created', function () {
    console.log('Second window created');
  });

  child.once('tauri://error', function (e) {
    console.error('Failed to create window:', e);
  });
}
</script>

<style scoped></style>