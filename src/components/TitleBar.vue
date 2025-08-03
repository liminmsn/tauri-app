<template>
    <Card class="title_bar flex justify-between !p-1 bg-mk bg_svg">
        <div class="w-100 flex-1 pl-1">
            全网找书
        </div>
        <div class="title_bar_items flex gap-1">
            <Button type="default" size="small" shape="default" @click="bnt_click(0)">
                <MinusOutlined />
            </Button>
            <!-- <Button type="default" size="small" shape="default" @click="bnt_click(1)">
                <FullscreenOutlined v-if="isFullScreen" />
                <FullscreenExitOutlined v-else />
            </Button> -->
            <Button type="primary" size="small" shape="default" danger @click="bnt_click(2)">
                <CloseOutlined />
            </Button>
        </div>
    </Card>
</template>

<script setup lang="ts">
import { MinusOutlined, FullscreenExitOutlined, FullscreenOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { Window } from '@tauri-apps/api/window';
import { Button, Card } from 'ant-design-vue';
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
    font-family: 'sys';
    -webkit-app-region: drag;
}

.ant-card {
    /* border-bottom-right-radius: 0; */
    /* border-bottom-left-radius: 0; */
}

:deep(.ant-card-body) {
    display: flex;
    width: 100%;
}

.title_bar_items {
    -webkit-app-region: no-drag;
}
</style>