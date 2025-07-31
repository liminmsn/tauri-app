import { ClientOptions, fetch } from "@tauri-apps/plugin-http";

export class NetBase {
    static baseUrl = "https://www.jiumodiary.com";
    private init: RequestInit & ClientOptions;
    constructor(private url: string) {
        this.url = NetBase.baseUrl + this.url;
        // 初始化请求配置
        this.init = {
            headers: {
                "accept": "*/*",
                "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7",
                "content-type": "application/x-www-form-urlencoded",
                "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Google Chrome\";v=\"138\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
        }
    }
    get() {
        this.init.method = "GET";
        return this;
    }
    post(body: BodyInit | null | undefined) {
        this.init.method = "POST";
        this.init.body = body;
        return this;
    }
    send(callback?: (response: Response) => void) {
        fetch(this.url, this.init).then(callback).catch((error) => {
            console.error("Network request failed:", error);
        });
        return this;
    }
}