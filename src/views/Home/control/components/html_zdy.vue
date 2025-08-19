<template>
    <div class="html_zdy">
        <div class="w-full px-1 py-1 pos-absolute z10" style="background-color: var(--VITE_THEME_ONE_BG);">
            <Space>
                <Button type="primary" size="small">对象</Button>
                <Button type="primary" size="small">操作</Button>
            </Space>
        </div>
        <VueFlow class="h-full w-full" :nodes="nodes" :edges="edges">
            <template #node-special="specialNodeProps">
                <SpecialNode v-bind="specialNodeProps" />
            </template>
            <template #edge-special="specialEdgeProps">
                <SpecialEdge v-bind="specialEdgeProps" />
            </template>
        </VueFlow>
    </div>
</template>

<script setup lang="ts">
import { VueFlow } from '@vue-flow/core'
import SpecialNode from './zdy/SpecialNode.vue'
import SpecialEdge from './zdy/SpecialEdge.vue'
import { edges, nodes } from './zdy/script/main'
import { Button, Space } from 'ant-design-vue'

</script>

<style>
.html_zdy {
    height: 100%;
    /* background: ; */
}
</style>