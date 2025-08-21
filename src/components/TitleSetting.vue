<template>
    <Popover trigger="click" placement="bottom">
        <template #content>
            <Checkbox v-model:checked="a">夜间模式</Checkbox>
        </template>
        <slot></slot>
    </Popover>
</template>

<script setup lang="ts">
import { theme_main } from '@/theme';
import { Checkbox, Popover } from 'ant-design-vue';
import { theme } from "ant-design-vue";
import { ref, watch } from 'vue';
const a = ref(false);
watch(a, (newVal) => {
    if (newVal) {
        theme_main.algorithm = theme.darkAlgorithm
    } else {
        theme_main.algorithm = theme.defaultAlgorithm
    }
});
</script>