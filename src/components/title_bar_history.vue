<template>
    <Popover placement="bottom" trigger="focus">
        <template #content>
            <list class="min-w-40" size="small" :data-source="SearchHistory.history">
                <template #renderItem="{ item }">
                    <list-item>
                        <tag class="max-w-80 text-ellipsis overflow-hidden" color="default"  @click="onClick(item)">{{ item }}</tag>
                        <template #actions>
                            <Button size="small" type="link" danger :icon="h(CloseCircleOutlined)"
                                @click="SearchHistory.delete(item)" />
                        </template>
                    </list-item>
                </template>
            </list>
        </template>
        <slot></slot>
    </Popover>
</template>

<script setup lang="ts">
import { GlobalEvent } from '@/event/GlobalEvent';
import { SearchHistory, value } from '@/views/Home/script';
import { CloseCircleOutlined } from '@ant-design/icons-vue';
import { Button, List, ListItem, Popover, Tag } from 'ant-design-vue';
import { h } from 'vue';

function onClick(item: string) {
    value.value = item;
    GlobalEvent.dispatch('y_input', { searchValue: item });
}
</script>