<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core';
import type { Node, NodeProps } from '@vue-flow/core';
const props = defineProps<NodeProps>()

const isValidTargetConnection = (_connection: { target: string | Node<any, any, string>[]; }) => {
    return !false
}
</script>

<template>
    <div class="dom-node" :data-type="props.type">
        <Handle type="source" :position="Position.Right" :is-valid-connection="isValidTargetConnection" />
         <div class="w-40 h-40 overflow-auto" style="font-size: 4pt;color: var(--VITE_THEME_ONE);">
            {{ props.data }}
         </div>
    </div>
</template>


<style scoped>
.dom-node {
    --vf-handle: var(--VITE_THEME_ONE);
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
        background-color: rgb(0, 208, 255);
    }
}
iframe{
    max-width: 100px;
    max-height: 100px;
    border: none;
    &::-webkit-scrollbar{
        appearance: none;
        width: 0;
        height: 0;
    }
    &::-webkit-scrollbar-thumb{
        width: 1px;
    }
}
</style>
