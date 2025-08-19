<template>
    <div class="html_zdy">
        <VueFlow 
            v-model:nodes="nodeArr.nodes.value" 
            v-model:edges="edgedArr.edges.value" 
            @connect="onConnect"
            @edge-click="onEdgeClick" 
            :connection-line-style="{ stroke: '#000' }"
            :connection-mode="ConnectionMode.Strict" 
            :fit-view-on-init="true">
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
    </div>
</template>

<script setup lang="ts">
import { VueFlow, Panel, ConnectionMode, useVueFlow, Connection, Edge, EdgeMouseEvent } from '@vue-flow/core';
import { Button, Dropdown, Menu, MenuItem, Space, SubMenu } from 'ant-design-vue';
import { Flow } from './zdy/script/Flow';
const flow = new Flow(useVueFlow());
const { nodeArr, edgedArr, vueFlow } = flow;

const { onInit, findNode, fitView, snapToGrid } = vueFlow;
snapToGrid.value = true;

function onConnect(params: Edge | Connection) {
    console.log('创建连线:', params)
    // 可以在这里添加连线验证逻辑
    // 如果验证通过，添加连线到edges数组
    vueFlow.addEdges([params])
}

// 处理连线点击事件
function onEdgeClick(edgeMouseEvent: EdgeMouseEvent) {
    console.log('点击连线:', edgeMouseEvent)
    // 可以在这里实现删除连线或其他操作
}

onInit((instance) => {
    fitView()
    const node = findNode('1')
    if (node) {
        node.position = { x: 100, y: 100 }
    }
});
</script>

<style>
.html_zdy {
    height: 100%;
    background:
        repeating-linear-gradient(to right, transparent, var(--VITE_THEME_ONE_BG) 0.1pt, transparent 1pt, transparent 20pt),
        repeating-linear-gradient(to bottom, transparent, var(--VITE_THEME_ONE_BG) 0.1pt, transparent 1pt, transparent 20pt);
}

/* 自定义连线样式 */
.vue-flow__edge-path {
    stroke: #555;
    stroke-width: 2;
}

.vue-flow__connection-path {
    stroke: #555;
    stroke-width: 2;
}

.vue-flow__edge.selected .vue-flow__edge-path {
    stroke: #1890ff;
}
</style>