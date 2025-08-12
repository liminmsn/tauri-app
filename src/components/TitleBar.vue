<template>
    <div class="title_bar flex p-2 pb-0">
        <div class="shadow-md rounded-md bg-white w8/10">
            <span class="font-bold ml-2">{{ title }}</span>
        </div>
        <div class="w2/10 text-right">
            <Button class="shadow-md mr-1" type="default" size="small" shape="default" @click="bnt_click(0)">
                <MinusOutlined />
            </Button>
            <Button class="shadow-md mr-1" type="default" size="small" shape="default" @click="bnt_click(1)">
                <FullscreenOutlined v-if="isFullScreen" />
                <FullscreenExitOutlined v-else />
            </Button>
            <Button class="shadow-md" type="primary" size="small" shape="default" @click="bnt_click(2)">
                <CloseOutlined />
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MinusOutlined, FullscreenExitOutlined, FullscreenOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { Window } from '@tauri-apps/api/window';
import { Button, Card } from 'ant-design-vue';
import { onMounted, ref } from 'vue';
const title = import.meta.env['VITE_TITLE'];
const isFullScreen = ref(true);
const appWindow = Window.getCurrent();
async function bnt_click(key: 0 | 1 | 2) {
    switch (key) {
        case 0:
            appWindow.minimize();
            break;
        case 1:
            const isFullscreen_ = await appWindow.isFullscreen();
            await appWindow.setFullscreen(!isFullscreen_);
            isFullScreen.value = isFullscreen_;
            break;
        case 2:
            appWindow.close();
            break;
    }
}

onMounted(() => {

})
</script>

<style scoped>
.title_bar {
    -webkit-app-region: drag;
    /* width: 100vw; */
    /* position: absolute;
    top: 0;
    left: 0;
    right: 0; */
}

.title_bar_items {
    -webkit-app-region: no-drag;
}

:deep(.ant-card-body) {
    padding: 0 !important;
}
</style>