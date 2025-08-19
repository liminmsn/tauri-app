<template>
    <div class="html_zdy">
        <VueFlow class="h-full w-full" :nodes="nodes" :edges="edges">
            <Panel position="top-left">
                <Space>
                    <Dropdown>
                        <Button type="primary" size="small">对象</Button>
                        <template #overlay>
                            <Menu>
                                <MenuItem class="!p-0">A</MenuItem>
                            </Menu>
                        </template>
                    </Dropdown>
                    <Button type="primary" size="small">对象</Button>
                </Space>
            </Panel>
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
import { VueFlow, Panel } from '@vue-flow/core'
import SpecialNode from './zdy/SpecialNode.vue'
import SpecialEdge from './zdy/SpecialEdge.vue'
import { Button, Dropdown, Menu, MenuItem, Space } from 'ant-design-vue'
import { Flow } from './zdy/script/Flow'
const flow = new Flow();
const { nodes, edges } = flow;
</script>

<style>
.html_zdy {
    height: 100%;
    background:
        repeating-linear-gradient(to right, transparent, var(--VITE_THEME_ONE_BG) 0.1pt, transparent 1pt, transparent 20pt),
        repeating-linear-gradient(to bottom, transparent, var(--VITE_THEME_ONE_BG) 0.1pt, transparent 1pt, transparent 20pt);
}
</style>