import { ThemeConfig } from "ant-design-vue/es/config-provider/context";
import { theme } from "ant-design-vue";
import { reactive } from "vue";

export const theme_main: ThemeConfig = reactive({
    algorithm: theme.defaultAlgorithm,
    token: {}
})
/**初始化主题 */
export function theme_init() {
    const theme_color = localStorage.getItem('theme_color');
    if (theme_color) {
        theme_main.token!.colorPrimary = theme_color;
    } else {
        try {
            const theme_color_arr = JSON.parse(import.meta.env['VITE_THEME_COLOR']);
            localStorage.setItem('theme_color_arr', JSON.stringify(theme_color_arr));
            theme_main.token!.colorPrimary = theme_color_arr[0];
            localStorage.setItem('theme_color', theme_color_arr[0]);
        } catch (error) {
            alert(error);
        }
    }
}