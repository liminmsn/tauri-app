<template>
  <ConfigProvider :theme="theme_main" component-size="small">
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
import { onMounted } from 'vue';

onMounted(() => {
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    const x = event.clientX;
    const y = event.clientY;
    console.log(`右键点击位置: X=${x}, Y=${y}`);
  });
});
</script>