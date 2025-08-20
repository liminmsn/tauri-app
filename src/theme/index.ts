import { theme } from "ant-design-vue";
import { ThemeConfig } from "ant-design-vue/es/config-provider/context";
import { reactive } from "vue";

export const theme_main: ThemeConfig = reactive({
    algorithm: theme.defaultAlgorithm,
    token: {}
})

export function init_theme() {
    try {
        const theme_arr = JSON.parse(import.meta.env.VITE_THEME_ARR);
        let theme_color = localStorage.getItem("theme_color");
        if (theme_color) {
            theme_main.token!.colorPrimary = theme_color;
        } else {
            theme_main.token!.colorPrimary = theme_arr[0];
            localStorage.setItem("theme_color", theme_arr[0]);
        }
    } catch (error) {
        alert("Failed to initialize theme");
    }
}