<template>
  <InputSearch size="small" v-model:value="value" placeholder="https://* || http://*"
    :enter-button="customIcon" @search="onSearch">
  </InputSearch>
</template>
<script setup lang="ts">
import { GlobalEvent } from '@/event/GlobalEvent';
import { isValidUrl } from '@/utility/Reg';
import { value } from '@/views/Home/script';
import { SendOutlined } from '@ant-design/icons-vue';
import { InputSearch, message } from 'ant-design-vue';
import { h } from 'vue';
const customIcon = h(SendOutlined);

const onSearch = (searchValue: string) => {
  if (isValidUrl(searchValue)) {
    GlobalEvent.dispatch('y_input', { searchValue, value: value.value });
  } else {
    message.warn({
      content: () => '请输入有效的 http 或 https 网页链接地址',
      duration: 0.5,
      style: {
        scale: 0.9
      }
    });
  }
};
</script>
<style scoped>
:deep(.ant-btn-primary) {
  box-shadow: none !important;
}
</style>