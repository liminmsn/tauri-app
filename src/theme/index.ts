import { theme } from "ant-design-vue";
import { ThemeConfig } from "ant-design-vue/es/config-provider/context";

export const theme_main: ThemeConfig = {
    algorithm: theme.compactAlgorithm,
    token: {
        // colorPrimary: '#8AA624',
    }
}

export function rdmColor() {
    return '#' + Math.floor(Math.random() * 0x999999).toString(16).padStart(6, '0');
}

export function rdmColorTwo() {
    const colors = ['#FE7743', '#8AA624', '#799EFF'];
    return colors[Math.floor(colors.length * Math.random())];
}