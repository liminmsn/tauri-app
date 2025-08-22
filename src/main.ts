import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import '@/design/main.css';
import 'ant-design-vue/dist/reset.css';
import 'virtual:uno.css';
import './design/main.css';
import { theme_init } from "./theme";

theme_init();
createApp(App)
.use(router)
.mount("#app");
