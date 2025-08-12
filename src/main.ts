import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import '@/design/main.css';
import 'ant-design-vue/dist/reset.css';
import 'virtual:uno.css';
import { theme_main_init } from "./theme";

theme_main_init();
createApp(App)
.use(router)
.mount("#app");
