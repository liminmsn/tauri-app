export class GlobalEvent {
    private static emitter = new EventTarget();
    static dispatch(key: string, parame: object) {
        this.emitter.dispatchEvent(new CustomEvent(key, { detail: parame }));
    }
    static on(key: string, fun: (e: CustomEvent) => void) {
        //@ts-ignore
        this.emitter.addEventListener(key, fun)
    }
    static distory(key: string) {
        this.emitter.removeEventListener(key, () => { })
    }
}