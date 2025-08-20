import { Node, Position } from "@vue-flow/core";
import { Flow } from "./Flow";
import { domData } from "@/views/Home/script";

interface ActionItemType {
    id: string;
    name: string;
    children?: ActionItemType[]
    onDown?: (args: ActionItemType) => void;
}

export class Action {
    list: ActionItemType[] = [];
    constructor(private flow: Flow) {
        this.init();
    }
    private init() {
        this.list = [
            {
                id: '0',
                name: '对象',
                children: [
                    {
                        id: '0-1',
                        name: "获取",
                        children: [
                            {
                                id: '0-0-1',
                                name: "网络请求DOM",
                                onDown: this._onDown.bind(this)
                            },
                            {
                                id: '0-0-2',
                                name: "DOM子元素",
                                onDown: this._onDown.bind(this)
                            }
                        ]
                    }
                ],
            },
            {
                id: '1',
                name: '输出',
                onDown: this._onDown,
                children: [],
            }
        ]
    }
    private _onDown(_args: ActionItemType) {
        switch (_args.id) {
            case '0-0-1':
                const node_dom: Node = {
                    id: '0',
                    type: 'dom',
                    data: { type: 'obj', data: domData },
                    position: { x: 10, y: 50 },
                };
                this.flow.vueFlow.addNodes(node_dom);
                break;
            case '0-0-2':
                const node_tag: Node = {
                    position: { x: 100, y: 100 },
                    id: Date.now().toString(),
                    type: 'downall',
                    data: { type: 'fun', data: {} },
                };
                this.flow.vueFlow.addNodes(node_tag)
                break;
        }
    }
}