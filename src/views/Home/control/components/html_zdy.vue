<template>
    <div class="html_zdy">
        <VueFlow :nodes="nodeArr.nodes.value" :edges="edgedArr.edges.value">
            <Panel position="top-left">
                <Space>
                    <Dropdown v-for="item in flow.action.list">
                        <Button type="primary" size="small">{{ item.name }}</Button>
                        <template #overlay v-if="item.children">
                            <Menu class="!p-0">
                                <SubMenu v-for="item_ in item.children" :key="item_.name" :title="item_.name"
                                    @click="item_.onDown ? item_.onDown(item_) : null">
                                    <MenuItem class="!p-0" v-for="btn in item_.children"
                                        @click="btn.onDown ? btn.onDown(btn) : null">
                                    <Button type="primary" ghost size="small">{{ btn.name }}</Button>
                                    </MenuItem>
                                </SubMenu>
                            </Menu>
                        </template>
                    </Dropdown>
                </Space>
            </Panel>
        </VueFlow>
        <!-- <VueFlow class="h-full w-full" :nodes="nodeArr.nodes.value" :edges="edgedArr.edges.value" :nodesDraggable="true"
            :nodesConnectable="true" :edgesUpdatable="true" :autoConnect="false" @connect="handleConnect"
            @edge-update="handleEdgeUpdate" @edge-remove="handleEdgeRemove">
            <Panel position="top-left">
                <Space>
                    <Dropdown v-for="item in flow.action.list">
                        <Button type="primary" size="small">{{ item.name }}</Button>
                        <template #overlay v-if="item.children">
                            <Menu class="!p-0">
                                <SubMenu v-for="item_ in item.children" :key="item_.name" :title="item_.name"
                                    @click="item_.onDown ? item_.onDown(item_) : null">
                                    <MenuItem class="!p-0" v-for="btn in item_.children"
                                        @click="btn.onDown ? btn.onDown(btn) : null">
                                    <Button type="primary" ghost size="small">{{ btn.name }}</Button>
                                    </MenuItem>
                                </SubMenu>
                            </Menu>
                        </template>
                    </Dropdown>
                </Space>
            </Panel>
            <template #node-special="specialNodeProps">
                <SpecialNode v-bind="specialNodeProps" />
            </template>
            <template #edge-special="specialEdgeProps">
                <SpecialEdge v-bind="specialEdgeProps" />
            </template>
        </VueFlow> -->
    </div>
</template>

<script setup lang="ts">
import { VueFlow, Panel, useVueFlow } from '@vue-flow/core'
import { Button, Dropdown, Menu, MenuItem, Space, SubMenu } from 'ant-design-vue'
import { Flow } from './zdy/script/Flow'
const flow = new Flow();
const { nodeArr, edgedArr } = flow;
const { onInit, findNode, fitView, snapToGrid } = useVueFlow()
snapToGrid.value = true

onInit((instance) => {
    console.log(instance);
    fitView()
    const node = findNode('1')
    if (node) {
        node.position = { x: 100, y: 100 }
    }
})
</script>

<style>
.html_zdy {
    height: 100%;
    background:
        repeating-linear-gradient(to right, transparent, var(--VITE_THEME_ONE_BG) 0.1pt, transparent 1pt, transparent 20pt),
        repeating-linear-gradient(to bottom, transparent, var(--VITE_THEME_ONE_BG) 0.1pt, transparent 1pt, transparent 20pt);
}
</style>