<template>
  <ConfigProvider :theme="theme_main" :locale="zhCN">
    <App>
      <Title_bar>
        <template #title_end_element>
          <Y_input />
        </template>
      </Title_bar>
      <RouterView />
    </App>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { App, ConfigProvider } from 'ant-design-vue';
import { theme_main } from './theme';
import Title_bar from './components/title_bar.vue';
import Y_input from './components/y_input.vue';
import { onMounted } from 'vue';
import { SearchHistory } from './views/Home/script';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

onMounted(() => {
  SearchHistory.getHistory();
})
</script>