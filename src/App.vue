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
import TitleBar from './components/TitleBar.vue';
import { init_theme, theme_main } from './theme';
import { onMounted } from 'vue';

onMounted(() => {
  init_theme()
})
</script>

<style>

</style>