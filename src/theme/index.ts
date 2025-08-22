import { ThemeConfig } from "ant-design-vue/es/config-provider/context";
import { theme } from "ant-design-vue";
import { reactive } from "vue";
import { ColorOpacity } from "@/util/util";

export const theme_main: ThemeConfig = reactive({
    algorithm: theme.defaultAlgorithm,
    token: {
        borderRadius: 4
    },
})
/**初始化主题 */
export function theme_init() {
    //主题色
    const theme_color = localStorage.getItem('theme_color');
    if (theme_color) {
        SetThemeColor(theme_color);
    } else {
        try {
            const theme_color_arr = JSON.parse(import.meta.env['VITE_THEME_COLOR']);
            localStorage.setItem('theme_color_arr', JSON.stringify(theme_color_arr));
            SetThemeColor(theme_color_arr[0]);
        } catch (error) {
            alert(error);
        }
    }
    //夜间
    const theme_dark = localStorage.getItem('theme_dark');
    if (theme_dark && theme_dark == 'true') {
        theme_main.algorithm = theme.darkAlgorithm;
    } else {
        theme_main.algorithm = theme.defaultAlgorithm;
        localStorage.setItem('theme_dark', 'false');
    }
}
//设置主题色
export function SetThemeColor(color: string) {
    theme_main.token!.colorPrimary = color;
    localStorage.setItem('theme_color', color);
    document.documentElement.style.setProperty('--THEME_COLOR', color);
    document.documentElement.style.setProperty('--THEME_COLOR_BG', ColorOpacity(color, '22'));
}