<template>
    <Popover trigger="click" placement="bottom">
        <template #content>
            
        </template>
        <slot></slot>
    </Popover>
</template>

<script setup lang="ts">
import { Popover } from 'ant-design-vue';
</script>