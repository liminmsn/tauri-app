<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core';
import type { Node, NodeProps } from '@vue-flow/core';

const isValidTargetConnection = (connection: { target: string | Node<any, any, string>[]; }) => {
    console.log(connection)
    console.count();
    return false
}
const props = defineProps<NodeProps>()
const { data } = props;
</script>

<template>
    <div class="downall-node" :data-type="data.type">
        <Handle type="target" :position="Position.Left" />
        <Handle type="source" :position="Position.Right" :is-valid-connection="isValidTargetConnection" />
        {{ data }}
    </div>
</template>


<style>
.downall-node {
    /* --vf-handle: #ff0101; */
    min-width: 100px;
    gap: 4px;
    padding: 8px;
    background: white;
    border: 1px solid var(--vf-handle);
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
