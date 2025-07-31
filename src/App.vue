<template>
  <main>
    <App class="h-full">
      <ConfigProvider :theme="theme_main">
        <TitleBar />
        <div style="height: calc(100vh - 34px);">
          <RouterView />
        </div>
      </ConfigProvider>
    </App>
  </main>
</template>

<script setup lang="ts">
import { App, ConfigProvider } from 'ant-design-vue';
import TitleBar from './components/TitleBar.vue';
import { theme_main } from './theme';
</script>

<style lang="css">
@import url('./design/index.css');
@font-face {
  font-family: 'sys';
  src: url("assets/ZiKuXingQiuFeiYangTi-2.ttf");
}
</style>