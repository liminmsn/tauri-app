<template>
    <Card class="main flex-1 ml-1 overflow-y-auto shadow-md">
        <a-watermark class="h-full" content="Ant Design Vue">
            <a-spin v-if="isLod" />
            <template v-else-if="domData">
                <div v-if="current[0] == 'text'">{{ domData }}</div>
                <iframe v-else-if="current[0] == 'html'" :srcdoc="domData" />
            </template>
            <div v-else class="pt-50">
                <a-empty :image="simpleImage" description="开始你的数据抓取吧" />
            </div>
        </a-watermark>
    </Card>
</template>

<script setup lang="ts">
import { Card, Empty } from 'ant-design-vue';
import { GlobalEvent } from '@/event/GlobalEvent';
import { ref } from 'vue';
import { HomeNet } from '@/net/api/HomeNet';
import { current } from '../script';
const simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
const isLod = ref(false);
const domData = ref('');

GlobalEvent.on('y_input', async ({ detail }: CustomEvent) => {
    isLod.value = true;
    const text = await new HomeNet(detail['searchValue']).getData()
    domData.value = text;
    isLod.value = false;
})
</script>

<style scoped>
iframe {
    width: 100%;
    height: 100%;
    border: none;
}
:deep(.ant-card-body){
    padding: 0 !important;
}
</style>