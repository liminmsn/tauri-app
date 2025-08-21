<template>
  <ConfigProvider :theme="theme_main">
    <App>
      <TitleBar />
      <RouterView />
    </App>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { App, ConfigProvider } from 'ant-design-vue';
import { theme_main } from './theme';
import TitleBar from './components/TitleBar.vue';
</script>