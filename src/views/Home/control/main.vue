<template>
    <Card class="main flex-1 ml-1 overflow-y-auto shadow-md">
        <a-watermark class="h-full" :content="water_mark">
            <div class="w-full h-full text-center" v-if="isLod">
                <a-spin class="mt-50" />
            </div>
            <template v-else-if="domData">
                <div v-if="current[0] == 'text'">{{ domData }}</div>
                <iframe v-else-if="current[0] == 'html'" :srcdoc="domData" />
            </template>
            <div v-else class="pt-50">
                <a-empty :image="simpleImage" :description="main_tips" />
            </div>
        </a-watermark>
    </Card>
</template>

<script setup lang="ts">
import { Card, Empty } from 'ant-design-vue';
import { GlobalEvent } from '@/event/GlobalEvent';
import { ref } from 'vue';
import { HomeNet } from '@/net/api/HomeNet';
import { current, SearchHistory } from '../script';
const water_mark = import.meta.env['VITE_MAIN_WATER_MARK'];
const main_tips = import.meta.env['VITE_MAIN_TIPS'];
const simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
const isLod = ref(false);
const domData = ref('');

GlobalEvent.on('y_input', async ({ detail }: CustomEvent) => {
    isLod.value = true;
    const text = await new HomeNet(detail['searchValue']).getData()
    domData.value = text;
    isLod.value = false;
    SearchHistory.add(detail['searchValue']);
})
</script>

<style scoped>
iframe {
    width: 100%;
    height: 100%;
    border: none;
}

:deep(.ant-card-body) {
    padding: 0 !important;
}
</style>