<template>
    <div class="flex p-2 pb-0">
        <div class="title_bar flex-1 shadow-md bg-white rounded-md px-1 mr-1 flex justify-between"
            :style="{ color: theme_one }">
            <span class="font-400">{{ title }}</span>
        </div>
        <div class="mr-1">
            <slot name="title_end_element" />
        </div>
        <Space class="justify-end title_bar_items" :size="2">
            <Button class="shadow-md" type="default" size="small" shape="default" @click="bnt_click(0)">
                <MinusOutlined />
            </Button>
            <Button class="shadow-md" type="default" size="small" shape="default" @click="bnt_click(1)">
                <FullscreenOutlined v-if="isFullScreen" />
                <FullscreenExitOutlined v-else />
            </Button>
            <Button class="shadow-md" type="primary" size="small" shape="default" @click="bnt_click(2)">
                <CloseOutlined />
            </Button>
        </Space>
    </div>
</template>

<script setup lang="ts">
import { MinusOutlined, FullscreenExitOutlined, FullscreenOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { Window } from '@tauri-apps/api/window';
import { Button, Space } from 'ant-design-vue';
import { onMounted, ref } from 'vue';
const title = import.meta.env['VITE_TITLE'];
const theme_one = import.meta.env['VITE_THEME_ONE'];

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
}

.title_bar_items {
    -webkit-app-region: no-drag;
}

:deep(.ant-card-body) {
    padding: 0 !important;
}
</style>