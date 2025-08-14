<template>
    <Card class="left h-full overflow-hidden shadow-md">
        <Menu mode="vertical" v-model:selectedKeys="current" :items="items"  />
    </Card>
</template>

<script setup lang="ts">
import { h, ref } from 'vue';
import { FileTextFilled, Html5Filled, FileImageOutlined } from '@ant-design/icons-vue';
import { Card, Menu, MenuProps } from 'ant-design-vue';
import { current } from '../script/index';
const items = ref<MenuProps['items']>([
    {
        key: 'text',
        label: '.text',
        icon: () => h(FileTextFilled),
    },
    {
        key: 'html',
        label: '.html',
        icon: () => h(Html5Filled),
    },
    {
        key: 'img',
        label: '.img',
        icon: () => h(FileImageOutlined),
    }
]);
</script>

<style scoped>
:deep(.ant-card-body) {
    padding: 0 !important;
}

:deep(.ant-menu-item) {
    user-select: none;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
}
</style>