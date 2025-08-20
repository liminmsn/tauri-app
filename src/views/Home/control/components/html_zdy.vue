<template>
  <div class="html_zdy">
    <VueFlow 
    v-model:nodes="nodeArr" 
    v-model:edges="edgedArr" 
    :fit-view-on-init="true" 
    :connection-mode="ConnectionMode.Strict" 
    :connection-line-style="{ stroke: '#000' }"
    @connect="(params) => onConnect(params)"
    @edge-click="(edge) => onEdgeClick(edge)">
      <Background color="var(--VITE_THEME_ONE)" />
      <Controls />
      <Panel position="top-left">
        <Space>
          <Dropdown v-for="item in flow.action.list">
            <Button type="primary" size="small">{{ item.name }}</Button>
            <template #overlay v-if="item.children">
              <Menu class="!p-0">
                <SubMenu v-for="item_ in item.children" :key="item_.name" :title="item_.name"
                  @click="item_.onDown ? item_.onDown(item_) : null">
                  <MenuItem class="!p-0" v-for="btn in item_.children" @click="btn.onDown ? btn.onDown(btn) : null">
                  <Button type="primary" ghost size="small">{{ btn.name }}</Button>
                  </MenuItem>
                </SubMenu>
              </Menu>
            </template>
          </Dropdown>
        </Space>
      </Panel>

      <template #node-downall="nodeProps">
        <DownAllNode v-bind="nodeProps" />
      </template>
    </VueFlow>
  </div>
</template>

<script setup lang="ts">
import { VueFlow, Panel, ConnectionMode, useVueFlow } from '@vue-flow/core';
import { Button, Dropdown, Menu, MenuItem, Space, SubMenu } from 'ant-design-vue';
import { Flow } from './zdy/script/Flow';
import { Background } from '@vue-flow/background';
import { Controls } from '@vue-flow/controls';
import DownAllNode from './zdy/DownAllNode.vue';
const flow = new Flow(useVueFlow());
const { nodeArr, edgedArr, vueFlow, onConnect, onEdgeClick } = flow;
</script>

<style scoped>
.html_zdy {
  height: 100%;
  /* background:
    repeating-linear-gradient(to right, transparent, var(--VITE_THEME_ONE) 0.1pt, transparent 1pt, transparent 20pt),
    repeating-linear-gradient(to bottom, transparent, var(--VITE_THEME_ONE) 0.1pt, transparent 1pt, transparent 20pt); */
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