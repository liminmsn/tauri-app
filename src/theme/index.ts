import { theme } from "ant-design-vue";
import { ThemeConfig } from "ant-design-vue/es/config-provider/context";

export const theme_main: ThemeConfig = {
    algorithm: theme.defaultAlgorithm,
    token: {
        colorPrimary: '',
    }
}
export function theme_main_init() {
    theme_main.token!.colorPrimary = import.meta.env['VITE_THEME_ONE'];
    const domStyle = document.documentElement.style;
    domStyle.setProperty('--VITE_THEME_ONE_BG', import.meta.env['VITE_THEME_ONE_BG']);
}
