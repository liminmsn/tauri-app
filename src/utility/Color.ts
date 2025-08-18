export let colorArr: string[] = [];
try {
    const app_theme_arr = localStorage.getItem('app_theme_arr');
    if (app_theme_arr == null) {
        colorArr = JSON.parse(import.meta.env['VITE_COLOR_ARR']);
        localStorage.setItem('app_theme_arr', JSON.stringify(colorArr));
    } else {
        colorArr = JSON.parse(app_theme_arr);
    }
} catch (error) {
    alert("配置.env格式错误")
}
export function ColorOpacity(color: string) {
    return color.concat('11');
}