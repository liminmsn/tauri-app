export class WebDom extends DOMParser {
    public dom: Document;
    constructor(dom: string) {
        super()
        this.dom = this.parseFromString(dom, 'text/html')
    }
}