import { colorArr, ColorOpacity } from "@/utility/Color";
import { theme } from "ant-design-vue";
import { ThemeConfig } from "ant-design-vue/es/config-provider/context";
import { reactive } from "vue";

export const theme_main: ThemeConfig = reactive({
    algorithm: theme.defaultAlgorithm,
    token: {},
})


export function theme_main_init() {
    //是否夜间
    let theme_mode = localStorage.getItem('theme_mode');
    theme_color_mode(theme_mode ? Number(theme_mode) : 0)
    //主题色
    let color = localStorage.getItem('app_theme');
    if (color == null) {
        color = colorArr[0];
        localStorage.setItem('app_theme', color);
    }
    theme_main.token!.colorPrimary = color;
    const domStyle = document.documentElement.style;
    domStyle.setProperty('--VITE_THEME_ONE', color);
    domStyle.setProperty('--VITE_THEME_ONE_BG', ColorOpacity(color));
}

export function theme_color_mode(isDark: number) {
    if (isDark == 1) {
        theme_main.token = {
            colorBgContainer: '#00000099',
            colorBgBase: '#00000000',
            colorText: 'rgba(255, 255, 255, 0.85)',
            colorPrimary: localStorage.getItem('app_theme') ?? ''
        }
        theme_main.components = {
            
        }
    } else {
        theme_main.token = {
            colorPrimary: localStorage.getItem('app_theme') ?? ''
        }
    }
    localStorage.setItem('theme_mode', isDark.toString());
}