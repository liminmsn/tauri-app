import { XYPosition } from "@vue-flow/core";

export interface FNodeData<T> {
    raw: T
    current: any,
    task?: () => void
}

export abstract class FNode<T> {
    position: XYPosition = { x: 0, y: 0 };
    type: string = 'default';
    id: string = Date.now().toString();
    abstract data: FNodeData<T | any>;
}