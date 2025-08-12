<template>
  <main class="container px-2">
    <!-- <iframe ref="web" src="https://poki.com/zh"></iframe> -->
    <Button @click="open()">start</Button>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Button } from "ant-design-vue";
import { NetBase } from "@/net/NetBase";
async function open() {
  new NetBase()
}
</script>

<style scoped></style>