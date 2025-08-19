import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import '@/design/main.css';
import 'ant-design-vue/dist/reset.css';
import 'virtual:uno.css';
import { theme_main_init } from "./theme";
/* these are necessary styles for vue flow */
import '@vue-flow/core/dist/style.css';
/* this contains the default theme, these are optional styles */
import '@vue-flow/core/dist/theme-default.css';

theme_main_init();
createApp(App)
.use(router)
.mount("#app");
