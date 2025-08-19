import { Node } from "@vue-flow/core";

export abstract class FNode {
    createNode(type: 'input' | 'output' | 'special' | ''): Node {
        return {
            id: String(Date.now()),
            position: { x: 0, y: 0 },
            type: type,
        };
    }
}