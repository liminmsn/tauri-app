<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core';
import type { NodeProps } from '@vue-flow/core';
import { Input, Space, Tag } from 'ant-design-vue';
import { ref } from 'vue';
import { FNodeData } from './script/lib/core/FNode';
import { WebDom } from '@/utility/WebDom';
const one = ref('img');
const two = ref('src');

const props = defineProps<NodeProps>()
const { data } = props;
data.task = function (data_: FNodeData<any>) {
    const { dom } = data_.current as WebDom;
    console.dir(dom);
    const tags = Array.from(dom.getElementsByTagName(one.value));
    const vals = tags.map(tag => tag.getAttribute('src')).filter(item => item != null);
    data.current = vals;
}
</script>

<template>
    <div class="tagall-node" :data-type="props.type">
        <Handle type="target" :position="Position.Left" />
        <Handle type="source" :position="Position.Right" />
        <Space direction="vertical">
            <Input size="small" placeholder="标签:img a audio" v-model:value="one" />
            <Input size="small" placeholder="属性:src href url" v-model:value="two" />
            <Tag v-if="data['current']['length'] > 0" color="success">查找结果:{{ data['current']['length'] }}</Tag>
        </Space>
    </div>
</template>


<style scoped>
.tagall-node {
    --vf-handle: var(--VITE_THEME_ONE);
    max-width: 150px;
    padding: 8px;
    border: 1px solid var(--vf-handle);
    background-color: var(--VITE_THEME_ONE_BG);
    border-radius: 4px;

    &::after {
        position: absolute;
        border-radius: 2px;
        right: 2px;
        top: 2px;
        font-size: 4pt;
        content: attr(data-type);
        color: white;
        padding-inline: 4px;
        background-color: rgb(191, 0, 255);
    }
}
</style>
