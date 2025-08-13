import { NetBase } from "../NetBase";

export class HomeNet extends NetBase {
    constructor(url: string) {
        super('')
        this.setUrl(url)
        this.get()
    }
    async getData(): Promise<string> {
        return new Promise(async (res) => {
            this.send(response => {
                console.log(response);
                res(response.text());
            })
        })
    }
}