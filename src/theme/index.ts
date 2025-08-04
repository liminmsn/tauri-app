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
    // const colors = ['#F1F8E9','#FDF5E6','#F3E5F5','#F0F4C3','#E0F2F1'];
    const colors = ['#C5E1A5','#E0C4A0','#D1C4E9','#AED581','#80CBC4'];
    return colors[Math.floor(colors.length * Math.random())];
}