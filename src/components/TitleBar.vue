<template>
    <div class="title_bar flex pt-1 px-1">
        <Card class="flex-1 w-40 pl-1">
            <div class="flex items-center">
                <CodeSandboxCircleFilled style="color: var(--THEME_COLOR);font-size: 14pt;" />
                <span class="ml-1" style="color: var(--THEME_COLOR);">{{ title }}</span>
            </div>
        </Card>
        <div class="px-1 title_bar_items">
            <TitleSetting>
                <Button type="default" size="small" :icon="h(SettingOutlined)"></Button>
            </TitleSetting>
        </div>
        <Card class="w-20 mr-1"></Card>
        <div class="title_bar_items flex gap-1">
            <Button type="default" size="small" shape="default" @click="bnt_click(0)">
                <MinusOutlined />
            </Button>
            <Button type="primary" size="small" shape="default" danger @click="bnt_click(2)">
                <CloseOutlined />
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MinusOutlined, CloseOutlined, CodeSandboxCircleFilled, SettingOutlined } from '@ant-design/icons-vue';
import { Window } from '@tauri-apps/api/window';
import { Button, Card } from 'ant-design-vue';
import { h, onMounted, ref } from 'vue';
import TitleSetting from './TitleSetting.vue';
const title = import.meta.env.VITE_TITLE;
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
</style>