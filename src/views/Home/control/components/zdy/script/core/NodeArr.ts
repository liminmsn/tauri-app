import { Node } from "@vue-flow/core";
import { nodes } from "../data";
import { ref, Ref } from "vue";

export class NodeArr {
    nodes: Ref<Node[]> = ref([]);
    constructor() {
        this.nodes.value = nodes.value;
    }
    addNode(node: Node) {
        if (!this.nodes.value.includes(node)) {
            this.nodes.value.push(node);
        }
    }
}