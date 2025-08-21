<template>
    <div class="flex p-1 pb-0">
        <Y_card class="max-w-40 min-w-40">
            <img src="/icon/icon_0.png" style="height: 14pt;" class="" />
            <span class="pl-1" style="color: var(--VITE_THEME_ONE);line-height: 1.5;">{{ title }}</span>
        </Y_card>
        <Button class="shadow-md mx-1" size="small" shape="default">
            <Title_bar_history>
                <HistoryOutlined />
            </Title_bar_history>
        </Button>
        <Button class="shadow-md mr-1" size="small" shape="default" @click="clear">
            <ClearOutlined />
        </Button>
        <div class="!w-full flex-1 shadow-md rounded-md max-w-110 min-w-90">
            <slot name="title_end_element" />
        </div>
        <Button class="shadow-md ml-1 flex items-center" size="small" shape="default">
            <Switch size="small" v-model:checked="showLeft" />
        </Button>
        <Button class="shadow-md ml-1" size="small" shape="default">
            <Title_bar_setting>
                <SettingOutlined />
            </Title_bar_setting>
        </Button>
        <Y_card class="mx-1"></Y_card>
        <Space class="justify-end title_bar_items" :size="2">
            <Button class="shadow-md" type="default" size="small" shape="default" @click="bnt_click(0)">
                <MinusOutlined />
            </Button>
            <Button class="shadow-md" type="primary" size="small" shape="default" @click="bnt_click(2)">
                <CloseOutlined />
            </Button>
        </Space>
    </div>
</template>

<script setup lang="ts">
import { MinusOutlined, CloseOutlined, HistoryOutlined, ClearOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { Window } from '@tauri-apps/api/window';
import { Button, Space, Switch } from 'ant-design-vue';
import { ref } from 'vue';
import Y_card from './y_card.vue';
import Title_bar_history from './title_bar_history.vue';
import { clear, showLeft } from '@/views/Home/script';
import Title_bar_setting from './title_bar_setting.vue';
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