<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core';
import type { Node, NodeProps } from '@vue-flow/core';
const props = defineProps<NodeProps>()

const isValidTargetConnection = (connection: { target: string | Node<any, any, string>[]; }) => {
    // console.count();
    // console.log(connection)
    return !false
}
</script>

<template>
    <div class="dom-node" :data-type="props.data.type">
        <Handle type="source" :position="Position.Right" :is-valid-connection="isValidTargetConnection" />
        {{ props.data }}
    </div>
</template>


<style>
.dom-node {
    --vf-handle: var(--VITE_THEME_ONE);
    min-width: 100px;
    gap: 4px;
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
</style>
