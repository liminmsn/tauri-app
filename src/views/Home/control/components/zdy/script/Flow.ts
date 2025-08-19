import '@vue-flow/core/dist/style.css';
import '@vue-flow/core/dist/theme-default.css';
import { NodeArr } from "./core/NodeArr";
import { EdgeArr } from './core/EdgeArr';
import { Action } from './core/Action';

export class Flow {
    nodeArr: NodeArr;
    edgedArr: EdgeArr;
    action: Action;
    constructor() {
        this.nodeArr = new NodeArr();
        this.edgedArr = new EdgeArr();
        this.action = new Action(this);
    }
}