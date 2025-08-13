<template>
    <Popover placement="bottomLeft" trigger="hover">
        <template #content>
            <list class="min-w-60" size="small" :data-source="SearchHistory.history">
                <template #renderItem="{ item }">
                    <list-item>
                        <tag color="volcano"  @click="onClick(item)">{{ item }}</tag>
                        <template #actions>
                            <Button size="small" type="link" danger :icon="h(MinusCircleOutlined)"
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
import { SearchHistory } from '@/views/Home/script';
import { MinusCircleOutlined } from '@ant-design/icons-vue';
import { Button, List, ListItem, Popover, Tag } from 'ant-design-vue';
import { h } from 'vue';

function onClick(item: string) {
    GlobalEvent.dispatch('y_input', { searchValue: item });
}
</script>