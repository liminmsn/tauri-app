<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Handle, Position } from '@vue-flow/core';
import type { NodeProps } from '@vue-flow/core';
import { FNodeData } from './script/lib/core/FNode';
import { Image, Segmented, Tag } from 'ant-design-vue';
import { CopyFilled } from '@ant-design/icons-vue';
import { CopyLabel } from '@/utility/Sys';

const props = defineProps<NodeProps>()
const { data } = props;
data.task = function (data_: FNodeData<any>) {
    data['current'] = data_.current;
}
const data_ = reactive(['Text', 'Image']);
const value = ref(data_[0]);
</script>

<template>
    <div class="view-node" :data-type="props.type">
        <Handle type="target" :position="Position.Left" />
        <Handle type="source" :position="Position.Right" />
        <Segmented v-model:value="value" :options="data_" />
        <div v-if="value === 'Text'">
            <div v-for="item in data['current']" style="color: var(--VITE_THEME_ONE);" :key="item">
                <CopyFilled style="cursor: pointer;" @click="CopyLabel(item)" />
                <Tag class="mt-1 ml-1" color="default" style="color: var(--VITE_THEME_ONE);">{{ item }}</Tag>
            </div>
        </div>
        <div v-else-if="value === 'Image'" class="grid grid-cols-6 mt-1 shadow-md rounded-md overflow-hidden" style="background: var(--VITE_THEME_ONE_BG);">
            <div v-for="item in data['current']">
                <Image :src="item" />
            </div>
        </div>
    </div>
</template>


<style scoped>
.view-node {
    --vf-handle: var(--VITE_THEME_ONE);
    min-height: 100px;
    min-width: 100px;
    max-width: 800px;
    overflow-y: scroll;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid var(--vf-handle);
    background: var(--VITE_THEME_ONE_BG);

    &::after {
        position: absolute;
        border-radius: 2px;
        right: 2px;
        top: 2px;
        font-size: 4pt;
        content: attr(data-type);
        color: white;
        padding-inline: 4px;
        background-color: rgb(0, 255, 89);
    }
}
</style>
