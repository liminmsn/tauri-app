<template>
  <div class="w-full h-full flex pt-1">
    <Card class="card_0 w3/12 p-2 bg-mk">
      <Input v-model:value="label" class="mb-1" @keyup.enter="search_()" />
      <Button size="small" type="primary" @click="search_()">查找</Button>
    </Card>
    <Card class="card_1 flex-1 ml-1 pl-6 pt-4 bg-mk overflow-y-auto">
      <Flex wrap="wrap" gap="20" justify="start" align="start">
        <Ycard v-for="(item, index) in dataArr" :key="index" :item="item" class="w-30" />
      </Flex>
      <div class="w-full text-center">
        <Spin class="mt-20" v-if="loding" />
        <Empty class="mt-40" v-if="dataArr.length === 0 && loding == false" description="" />
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Button, Card, Empty, Flex, Input, Spin } from "ant-design-vue";
import { search, Source } from "@/api/Search";
import Ycard from "@/components/Ycard.vue";
const label = ref('');
const dataArr = ref<Source[]>([]);
const loding = ref(false);
function search_() {
  dataArr.value = [];
  loding.value = true;
  search(label.value).then(val => {
    dataArr.value = val?.sources || [];
    loding.value = false;
  })
}
</script>

<style scoped>
.card_0 {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
}

.card_1 {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>