<template>
    <div class="html_zdy p-2">
        <!-- <Space>
            <Input placeholder="标签" />
            <Input placeholder="属性" />
        </Space> -->
        <Form :label-col="{ span: 24 }" :wrapper-col="{ span: 6 }" autocomplete="off" :model="formState">
            <FormItem>
                <Input v-model:value="formState.one" />
            </FormItem>
            <FormItem>
                <Input v-model:value="formState.one" />
            </FormItem>
        </Form>
    </div>
</template>

<script setup lang="ts">
import { Form, FormItem, Input, Space } from 'ant-design-vue';
import { reactive } from 'vue';

interface FormState {
    one: string;
    two: string;
    remember: boolean;
}

const formState = reactive<FormState>({
    one: '',
    two: '',
    remember: true,
});
</script>