<template>
    <Popover placement="bottomLeft" trigger="click">
        <template #content>
            <list class="min-w-60" size="small" :data-source="SearchHistory.history">
                <template #renderItem="{ item }">
                    <list-item>
                        <tag color="cyan">{{ item }}</tag>
                        <template #actions>
                        </template>
                    </list-item>
                </template>
            </list>
        </template>
        <slot></slot>
    </Popover>
</template>

<script setup lang="ts">
import { SearchHistory } from '@/views/Home/script';
import { List, ListItem, Popover, Tag } from 'ant-design-vue';
</script>