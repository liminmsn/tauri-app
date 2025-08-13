<template>
  <main class="flex p-1" style="height: calc(100% - 32px);">
    <Left />
    <Main />
  </main>
</template>

<script setup lang="ts">
import { Card } from "ant-design-vue";
import Left from "./control/left.vue";
import Main from "./control/main.vue";
</script>

<style scoped></style>