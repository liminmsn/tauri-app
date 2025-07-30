<template>
    <div class="title_bar flex pt-1 px-1">
        <div class="w-100 flex-1"></div>
        <div class="title_bar_items flex gap-1">
            <Button type="default" size="small" shape="default" @click="bnt_click(0)">
                <MinusOutlined />
            </Button>
            <Button type="default" size="small" shape="default" @click="bnt_click(1)">
                <FullscreenOutlined v-if="isFullScreen" />
                <FullscreenExitOutlined v-else />
            </Button>
            <Button type="primary" size="small" shape="default" danger @click="bnt_click(2)">
                <CloseOutlined />
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MinusOutlined, FullscreenExitOutlined, FullscreenOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { Window } from '@tauri-apps/api/window';
import { Button } from 'ant-design-vue';
import { onMounted, ref } from 'vue';
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