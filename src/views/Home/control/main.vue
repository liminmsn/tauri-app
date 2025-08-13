<template>
    <Card class="main flex-1 ml-1 shadow-md overflow-auto" id="main">
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
        <BackTop v-if="topBtn" shape="square" :visibility-height="0" @click="scrollTop"
            :style="{ right: '10px', bottom: '15px' }" />
    </Card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { BackTop, Card, Empty } from 'ant-design-vue';
import { GlobalEvent } from '@/event/GlobalEvent';
import { HomeNet } from '@/net/api/HomeNet';
import { current, SearchHistory } from '../script';
import Html_text from './components/html_text.vue';
const water_mark = import.meta.env['VITE_MAIN_WATER_MARK'];
const main_tips = import.meta.env['VITE_MAIN_TIPS'];
const simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
const topBtn = ref(false);
const isLod = ref(false);
const domData = ref('');

let dom: HTMLElement | null;
onMounted(() => {
    dom = document.getElementById('main');
    if (dom) {
        dom.onscroll = (ev: Event) => {
            const ent = (ev.target as HTMLDivElement);
            const top = ent.scrollTop;
            const div = ent.clientHeight;
            // console.log(top, div);
            topBtn.value = top > div;
        }
    }
})
// 滚动到顶部
function scrollTop() {
    if (dom) {
        dom.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }
}
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