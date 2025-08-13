<template>
    <div class="flex p-1 pb-0">
        <Y_card class="flex items-center max-w-40">
            <img src="/icon/icon_0.png" style="height: 14pt;" class="ml-2" />
            <span class="pl-2" :style="{ color: theme_one }">{{ title }}</span>
        </Y_card>
        <Button class="shadow-md mx-1" size="small" shape="default">
            <QuestionCircleOutlined />
        </Button>
        <div class="!w-full flex-1 shadow-md rounded-md">
            <slot name="title_end_element" />
        </div>
        <Y_card class="flex items-center max-w-20 mx-1"></Y_card>
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
import { MinusOutlined, FullscreenExitOutlined, FullscreenOutlined, CloseOutlined, QuestionCircleOutlined } from '@ant-design/icons-vue';
import { Window } from '@tauri-apps/api/window';
import { Button, Space } from 'ant-design-vue';
import { ref } from 'vue';
import Y_card from './y_card.vue';
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