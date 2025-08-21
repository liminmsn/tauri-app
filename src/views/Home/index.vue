<template>
  <main class="flex p-1" style="height: calc(100% - 32px);">
    <Left v-if="showLeft" class="mr-1" />
    <Main />
  </main>
</template>

<script setup lang="ts">
import Left from "./control/left.vue";
import Main from "./control/main.vue";
import { showLeft } from "./script";
</script>

<style></style>