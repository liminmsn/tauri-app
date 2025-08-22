import { App, inject, InjectionKey } from "vue";
export const GlobalEventKey: InjectionKey<GlobalEvent> = Symbol('GlobalEvent');

export function useGlobalEvent(): GlobalEvent {
    const event = inject<GlobalEvent>(GlobalEventKey);
    if (!event) {
        throw new Error('GlobalEvent not provided!');
    }
    return event;
}
export class GlobalEvent extends EventTarget {
    emit(key: string, data?: any) {
        this.dispatchEvent(new CustomEvent(key, {
            detail: data,
        }));
    }
    on(key: string, callback: (data?: CustomEvent) => void, options?: AddEventListenerOptions) {
        this.addEventListener(key, callback as any, options)
    }
    install(app: App) {
        app.provide(GlobalEventKey, this);
        app.config.globalProperties.$event = this;
    }
}