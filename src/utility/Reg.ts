/** 判断是否是有效的 url 链接（支持 http/https/www） */
export const isValidUrl = (url: string) =>
  /^(https?:\/\/)?(www\.)?[\w\-]+(\.[\w\-]+)+([\/\w\-\.?%&=]*)?$/.test(url);