<template>
    <Input v-model:value="label" placeholder="任何书籍" @keyup.enter="search_()" />
    <Button class="my-2 w-full" style="font-family: 'sys';" type="primary" @click="search_()">
        查找书籍
    </Button>
    <List class="h-110 overflow-y-auto" :data-source="labelHistory" :locale="{ emptyText: '暂无记录' }" size="small">
        <template #renderItem="{ item }">
            <div class="flex">
                <Tag class="m-1" @click="search_(item)" style="cursor: pointer;">
                    <CloseCircleOutlined style="color: red;" @click.stop="home.delLabelHistory(item)" />
                    <span style="font-family: 'sys';">{{ item }}</span>
                </Tag>
            </div>
        </template>
    </List>
</template>

<script setup lang="ts">
import { Button, Tag, Input, List } from 'ant-design-vue';
import { CloseCircleOutlined } from '@ant-design/icons-vue';
import { home } from './home'
const { label, search_, labelHistory } = home;
</script>