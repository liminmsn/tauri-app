
<template>
  <ConfigProvider
    :theme="theme_main">
    <App>
      <TitleBar/>
      <RouterView />
    </App>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { App, ConfigProvider } from 'ant-design-vue';
import TitleBar from './components/TitleBar.vue';
import { theme_main } from './theme';
</script>

<style>
:root {
  /* font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #0f0f0f;
  background-color: #f6f6f6; */
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
</style>