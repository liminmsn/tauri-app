<template>
    <Card class="title_bar flex-1 shadow-md rounded-md px-1">
        <slot name="default"></slot>
    </Card>
</template>
<script setup lang="ts">
import { Card } from 'ant-design-vue';
</script>

<style scoped>
:deep(.ant-card-body){
    display: flex;
    align-items: center;
}
</style>