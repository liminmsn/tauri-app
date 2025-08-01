<template>
  <div class="w-full h-full flex pt-1">
    <Card class="card_0 p-2 bg-mk">
      <Card class="mb-2 w-60 h-10" size="small">
      </Card>
      <Button type="primary" @click="search_()">GO</Button>
    </Card>
    <Card class="card_1 flex-1 ml-1 p-1 bg-mk overflow-y-auto">
      <Flex>
        <Card size="small" v-for="item in dataArr" :key="item.info">
          <template #title>
            {{ item.details }}
          </template>
        </Card>
      </Flex>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Button, Card, Flex } from "ant-design-vue";
import { search, Source } from "@/api/Search";
const label = ref('');
const dataArr = ref<Source[]>([]);
function search_() {
  search("小草").then(val => dataArr.value = val?.sources || [])
}
</script>

<style scoped>
.card_0 {
  /* border-top-right-radius: 0; */
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
}

.card_1 {
  /* border-top-left-radius: 0; */
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>