<template>
  <div class="w-full h-full flex pt-1">
    <Card class="card_0 w3/12 p-2 text-right bg-mk">
      <Left />
    </Card>
    <Card class="card_1 flex-1 ml-1 pl-6 py-4 bg-mk overflow-y-auto">
      <Right />
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card } from 'ant-design-vue';
import Left from "./left.vue";
import Right from './right.vue';
</script>

<style scoped>
.card_0 {
  /* border-top-left-radius: 0; */
  /* border-top-right-radius: 0; */
  /* border-bottom-right-radius: 0; */
}

.card_1 {
  /* border-top-right-radius: 0; */
  /* border-top-left-radius: 0; */
  /* border-bottom-left-radius: 0; */
}
</style>