import { Edge, Node } from "@vue-flow/core";
import { edges, nodes } from "./data";
import { Ref } from "vue";
import '@vue-flow/core/dist/style.css';
import '@vue-flow/core/dist/theme-default.css';

export class Flow {
    nodes: Ref<Node[]>;
    edges: Ref<Edge[]>;
    constructor() {
        this.nodes = nodes;
        this.edges = edges;
    }
    addNode() {
        // this.nodes.value.push()
    }
}