<template>
    <Flex wrap="wrap" gap="20" justify="start" align="start">
        <Ycard v-for="(item, index) in dataArr" :key="index" :item="item" class="w-30" />
    </Flex>
    <div class="w-full text-center">
        <Spin class="mt-20" v-if="loding" tip="正在全网搜索" />
        <Empty class="mt-40" v-if="dataArr.length === 0 && loding == false" description="学海无涯苦作帆？"
            :image="Empty.PRESENTED_IMAGE_SIMPLE" />
    </div>
</template>
<script setup lang="ts">
import { Empty, Flex, Spin } from "ant-design-vue";
import Ycard from "@/components/Ycard.vue";
import { home } from "../home";
const { loding, dataArr } = home;
</script>