/** 判断是否是有效的 http 或 https 开头的网址 */
export const isValidUrl = (url: string) =>/^[a-zA-Z]+:\/\/[^\s]+$/.test(url);
