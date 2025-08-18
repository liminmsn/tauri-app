<template>
    <Popover placement="bottom" trigger="click">
        <template #content>
            <Card class="w-40">
                <div>
                    <label>夜间：</label>
                    <Switch size="small" v-model:checked="checked">
                        <template #checkedChildren>
                            🌙
                        </template>
                        <template #unCheckedChildren>
                            ☀️
                        </template>
                    </Switch>
                </div>
                <div class="pb-1">
                    <div class="flex">
                        <label>主题：</label>
                        <!-- 添加自定义颜色 -->
                        <Popover placement="bottom" trigger="click">
                            <template #content>
                                <Card class="p-1">
                                    <div class="mb-1"><input type="color" v-model="theme_color"></input></div>
                                    <!-- {{ theme_color }} -->
                                    <Button size="small" type="primary" @click="addTheme(theme_color)">添加</Button>
                                </Card>
                            </template>
                            <div class="w-5 h-5 rounded-sm cursor-pointer">
                                <PlusOutlined />
                            </div>
                        </Popover>
                    </div>
                    <Flex class="p-1" gap="small" wrap="wrap" justify="flex-start">
                        <div v-for="color in theme_color_arr" :style="{ background: color }"
                            :class="theme_color == color ? 'color_select' : ''"
                            class="w-5 h-5 rounded-sm cursor-pointer" @click="setThemeColor(color)"></div>
                    </Flex>
                </div>
            </Card>
        </template>
        <slot></slot>
    </Popover>
</template>

<script setup lang="ts">
import { theme_color_mode, theme_main } from '@/theme';
import { colorArr, ColorOpacity } from '@/utility/Color';
import { PlusOutlined } from '@ant-design/icons-vue';
import { Button, Card, Flex, Popover, Switch } from 'ant-design-vue';
import { reactive, ref, watch } from 'vue';

//夜间
const checked = ref<boolean>(localStorage.getItem('theme_mode') as any == 1 ? true : false);
watch(checked, (val) => {
    theme_color_mode(Number(val))
});

//主题色
const theme_color_arr = reactive(colorArr);
const theme_color = ref(localStorage.getItem('app_theme'));
function setThemeColor(color: string) {
    theme_main.token!.colorPrimary = color;
    const domStyle = document.documentElement.style;
    domStyle.setProperty('--VITE_THEME_ONE', color);
    domStyle.setProperty('--VITE_THEME_ONE_BG', ColorOpacity(color));
    theme_color.value = color;
    localStorage.setItem('app_theme', color);
}
function addTheme(color: string | null) {
    if (color) {
        theme_color_arr.push(color);
        localStorage.setItem('theme_color_arr', JSON.stringify(theme_color_arr));
        setThemeColor(color);
    }
}
</script>

<style scoped>
.color_select {
    border: 2px solid;
}
</style>