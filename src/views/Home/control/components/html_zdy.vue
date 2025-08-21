<template>
  <div class="html_zdy">
    <VueFlow v-model:nodes="nodeArr" v-model:edges="edgedArr" :fit-view-on-init="true"
      :connection-mode="ConnectionMode.Strict"
      @connect="(params) => flow.onConnect(params)" @edge-click="(edge) => flow.onEdgeClick(edge)">
      <Background color="var(--VITE_THEME_ONE)" />
      <Controls />
      <Panel position="top-left">
        <Space>
          <Dropdown v-for="item in flow.action.list">
            <Button type="primary" ghost size="small" @click="item.onDown ? item.onDown(item) : null">{{ item.name }}</Button>
            <template #overlay v-if="item.children">
              <Menu class="!p-0">
                <SubMenu v-for="item_ in item.children" :key="item_.name" :title="item_.name"
                  @click.stop="item_.onDown ? item_.onDown(item_) : null">
                  <MenuItem class="!p-0" v-for="btn in item_.children" @click.stop="btn.onDown ? btn.onDown(btn) : null">
                  <Button type="primary" ghost size="small">{{ btn.name }}</Button>
                  </MenuItem>
                </SubMenu>
              </Menu>
            </template>
          </Dropdown>
        </Space>
      </Panel>

      <template #node-Dom="nodeProps">
        <NodeDom v-bind="nodeProps" />
      </template>
      <template #node-TagAll="nodeProps">
        <NodeTagAll v-bind="nodeProps" />
      </template>
      <template #node-View="nodeProps">
        <NodeView v-bind="nodeProps" />
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
import NodeDom from './zdy/NodeDom.vue';
import NodeTagAll from './zdy/NodeTagAll.vue';
import NodeView from './zdy/NodeView.vue';
const flow = new Flow(useVueFlow());
const { nodeArr, edgedArr } = flow;
</script>

<style scoped>
.html_zdy {
  height: 100%;
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