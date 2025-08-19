import { Ref } from "vue";
import { FEdge } from "./FEdge";
import { Edge } from "@vue-flow/core";
import { edges } from "../data";

export class EdgeArr extends FEdge {
    edges: Ref<Edge[]>;
    constructor() {
        super();
        this.edges = edges;
    }
}