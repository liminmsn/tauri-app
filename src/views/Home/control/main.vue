<template>
    <Card class="main flex-1 ml-1 shadow-md overflow-auto" :ref="main">
        <a-watermark class="h-full" :content="water_mark">
            <div class="text-center" v-if="isLod">
                <a-spin class="mt-50" />
            </div>
            <template v-else-if="domData">
                <Html_text v-if="current[0] == 'text'">{{ domData }}</Html_text>
                <iframe v-else-if="current[0] == 'html'" :srcdoc="domData" />
            </template>
            <div v-else class="pt-50">
                <a-empty :image="simpleImage" :description="main_tips" />
            </div>
        </a-watermark>
        <a-float-button-group shape="square" :style="{ right: '10px', bottom: '15px' }">
            <a-back-top :visibility-height="0" />
        </a-float-button-group>
    </Card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Card, Empty } from 'ant-design-vue';
import { GlobalEvent } from '@/event/GlobalEvent';
import { HomeNet } from '@/net/api/HomeNet';
import { current, SearchHistory } from '../script';
import Html_text from './components/html_text.vue';
const water_mark = import.meta.env['VITE_MAIN_WATER_MARK'];
const main_tips = import.meta.env['VITE_MAIN_TIPS'];
const simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
const isLod = ref(false);
const domData = ref('');
const main = ref();

GlobalEvent.on('y_input', async ({ detail }: CustomEvent) => {
    console.log(main);
    
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