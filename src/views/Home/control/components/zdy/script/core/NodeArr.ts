import { Node } from "@vue-flow/core";
import { FNode } from "./FNode";
import { nodes } from "../data";
import { ref, Ref } from "vue";

export class NodeArr extends FNode {
    nodes: Ref<Node[]> = ref([]);
    constructor() {
        super();
        this.nodes.value = nodes.value;
    }
    addNode(node: Node) {
        this.nodes.value.push(node);
    }
}