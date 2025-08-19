import { Node } from "@vue-flow/core";

abstract class FNode {
    node?: Node;
    createNode() {
        this.node = {
            id: String(Date.now()),
            type: '',
            position: { x: 0, y: 0 },
        }
    }
}