class WebDom extends DOMParser {
    constructor(dom: string) {
        super()
        this.parseFromString(dom, 'text/html')
    }
}