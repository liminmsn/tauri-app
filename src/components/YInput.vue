<template>
  <InputSearch class="shadow-md bg-transparent rounded-md w-100" size="small" v-model:value="value"
    placeholder="https://* || http://*" :enter-button="customIcon" @search="onSearch">
  </InputSearch>
</template>
<script setup lang="ts">
import { SendOutlined } from '@ant-design/icons-vue';
import { InputSearch } from 'ant-design-vue';
import { h, ref } from 'vue';
const value = ref<string>('');
const customIcon = h(SendOutlined);

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', value.value);
};
</script>
<style scoped></style>