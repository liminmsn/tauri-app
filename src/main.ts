import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import '@/design/main.css';
import 'ant-design-vue/dist/reset.css';
import 'virtual:uno.css';
import './design/main.css';
import { theme_init } from "./theme";
import { GlobalEvent } from "./event/GlobalEvent";

theme_init();
const app = createApp(App);
app.use(new GlobalEvent())
app.use(router)
    .mount("#app");
