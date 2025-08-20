import { FNode, FNodeData } from "./core/FNode";

export class FUNNode extends FNode<any> {
    constructor(public id: string, public type: string, public data: FNodeData<any> = { raw: {}, current: {} }) {
        super();
        this.data = data;
    }
}