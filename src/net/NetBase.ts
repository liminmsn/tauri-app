import { fetch } from '@tauri-apps/plugin-http';
export class NetBase {
    private url: string = import.meta.env['VITE_URL']
    private method: 'GET' | 'POST' = 'GET';
    private body?: BodyInit;
    private header = {}
    constructor(url = '') {
        this.url.concat(url)
    }
    /**
     * @param args 示范:'&name=a&age=25'
     * @returns {NetBase}
     */
    get(argument?: string): NetBase {
        this.method = 'GET';
        if (argument) {
            this.url.concat(argument);
        }
        return this;
    }
    /**
     * @param args 示范:'{name:'a',age:25}'
     * @returns {NetBase}
     */
    post(body: BodyInit): NetBase {
        this.method = 'POST';
        this.body = body;
        return this;
    }
    async then(): Promise<Response> {
        const res = await fetch(this.url, { headers: this.header, method: this.method, body: this.body });
        return res;
    }
}