<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import type { NodeProps } from '@vue-flow/core'
const props = defineProps < NodeProps > ()
</script>

<template>
    <div class="downall-node">
        <Handle type="target" :position="Position.Left" />
        <Handle type="source" :position="Position.Right" />
        {{ props }}
    </div>
</template>


<style>
.downall-node {
    --vf-handle: #ff0101;
    min-width: 100px;
    gap: 4px;
    padding: 8px;
    background: white;
    border: 1px solid rgb(245, 99, 99);
    border-radius: 4px;
}
</style>
