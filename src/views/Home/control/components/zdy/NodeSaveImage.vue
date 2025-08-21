<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core';
import type { NodeProps } from '@vue-flow/core';
import { FNodeData } from './script/lib/core/FNode';
import { ref } from 'vue';
import { Button, Space, Tag } from 'ant-design-vue';
import { ImgSave } from "@/utility/ImgSave";

const props = defineProps<NodeProps>()
const { data } = props;
data.task = function (data_: FNodeData<any>) {
    val.value = data_.current;
}

const val = ref([]);
const loading = ref(false);
function SaveImage() {
    loading.value = true;
    const arr = val.value.map(item => { return { src: item, select: true } });
    ImgSave.imgTagToFile(arr).then(() => {
        loading.value = false;
    });
}
</script>

<template>
    <div class="image-node" :data-type="props.type">
        <Handle type="target" :position="Position.Left" />
        <Space direction="vertical">
            <Tag color="success">数量：{{ val.length }}</Tag>
            <Button :loading="loading" :disabled="val.length === 0" size="small" type="primary"
                @click="SaveImage()">保存</Button>
        </Space>
    </div>
</template>


<style scoped>
.image-node {
    --vf-handle: var(--VITE_THEME_ONE);
    min-width: 100px;
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
        background-color: rgb(255, 0, 0);
    }
}
</style>
