<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core';
import type { NodeProps } from '@vue-flow/core';
import { FNodeData } from './script/lib/core/FNode';

const props = defineProps<NodeProps>()
const { data } = props;
data.task = function (data_: FNodeData<any>) {
    data['current'] = data_.current;
}
</script>

<template>
    <div class="view-node" :data-type="props.type">
        <Handle type="target" :position="Position.Left" />
        {{ data['current'] }}
    </div>
</template>


<style scoped>
.view-node {
    --vf-handle: var(--VITE_THEME_ONE);
    min-width: 100px;
    min-height: 100px;
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

iframe {
    max-width: 100px;
    max-height: 100px;
    border: none;

    &::-webkit-scrollbar {
        appearance: none;
        width: 0;
        height: 0;
    }

    &::-webkit-scrollbar-thumb {
        width: 1px;
    }
}
</style>
