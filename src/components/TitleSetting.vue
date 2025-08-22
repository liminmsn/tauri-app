<template>
    <Popover trigger="click" placement="bottom">
        <template #content>
            <Switch v-model:checked="dark" @change="ToggleDark">
                <template #checkedChildren>🌆</template>
                <template #unCheckedChildren>🌅</template>
            </Switch>
            <div class="flex flex-wrap gap-1 mt-1 max-w-29">
                <div v-for="color in theme_color_arr" :data-color="color" @click="SetThemeColor(color)"
                    :class="color == theme_main.token?.colorPrimary ? 'select_color' : ''"
                    :style="{ backgroundColor: color }" class="w-5 h-5 cursor-pointer rounded-sm">
                </div>
                <Popover trigger="click" placement="right">
                    <template #content>
                        <input type="color" v-model="color_val">
                        <Button @click="addThemeColor(color_val)" class="ml-1" type="primary">确定</Button>
                    </template>
                    <div class="w-5 h-5 cursor-pointer rounded-sm text-center"
                        style="border: 1px solid var(--THEME_COLOR);line-height: 1.3;color: var(--THEME_COLOR);">
                        <PlusOutlined />
                    </div>
                </Popover>
            </div>
        </template>
        <slot></slot>
    </Popover>
</template>

<script setup lang="ts">
import { SetThemeColor, theme_main } from '@/theme';
import { PlusOutlined } from '@ant-design/icons-vue';
import { Button, message, Popover, Switch } from 'ant-design-vue';
import { theme } from "ant-design-vue";
import { ref } from 'vue';
const theme_color_arr: string[] = JSON.parse(localStorage.getItem('theme_color_arr') ?? '[]');
const color_val = ref('');
const dark = ref(false);
function ToggleDark(dark: any) {
    theme_main.algorithm = dark ? theme.darkAlgorithm : theme.defaultAlgorithm;
    localStorage.setItem('theme_dark', String(dark));
}
function addThemeColor(color: string) {
    if (!theme_color_arr.includes(color)) {
        theme_color_arr.push(color);
        localStorage.setItem('theme_color_arr', JSON.stringify(theme_color_arr));
        SetThemeColor(color);
        message.success(`已经添加：${color}`);
    }
}
</script>

<style lang="css">
.select_color {
    box-shadow: 0 0 6px var(--THEME_COLOR);
}

input[type="color"] {
    transform: translateY(3px);
    width: 28px;
    cursor: pointer;
    border: none;
}
</style>