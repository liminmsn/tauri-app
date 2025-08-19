import { Ref } from "vue";
import { Edge } from "@vue-flow/core";
import { edges } from "../data";

export class EdgeArr{
    edges: Ref<Edge[]>;
    constructor() {
        this.edges = edges;
    }
}