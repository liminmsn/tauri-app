<template>
  <ConfigProvider :theme="theme_main">
    <App>
      <TitleBar>
        <template #title_end_element>
          <YInput />
        </template>
      </TitleBar>
      <RouterView />
    </App>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { App, ConfigProvider } from 'ant-design-vue';
import { theme_main } from './theme';
import TitleBar from './components/TitleBar.vue';
import YInput from './components/YInput.vue';
</script>