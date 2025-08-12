<template>
  <main class="flex p-2 pt-1" style="height: calc(100% - 32px);">
    <Card class="w2/10 shadow-md">
      a
    </Card>
    <Card class="w8/10 ml-1 shadow-md">
      a
    </Card>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Button, Card } from "ant-design-vue";
import { NetBase } from "@/net/NetBase";
async function open() {
  new NetBase()
}
</script>

<style scoped>
</style>