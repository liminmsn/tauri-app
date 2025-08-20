import { Flow } from "./Flow";
import { FUNNode } from "./lib/FUNNode";

interface ActionItemType {
    id: string;
    name: string;
    children?: ActionItemType[]
    onDown?: (args: ActionItemType) => void;
}

export class Action {
    list: ActionItemType[] = [];
    constructor(private flow: Flow) {
        this.list = [
            {
                id: '0',
                name: '编辑',
                children: [
                    {
                        id: '0-0',
                        name: "获取",
                        children: [
                            {
                                id: '0-0-0',
                                name: "所有元素属性列表",
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
                children: [
                    {
                        id: '1-0',
                        name: "视图",
                        children: [
                            {
                                id: '1-0-0',
                                name: "Text",
                                onDown: this._onDown.bind(this)
                            }
                        ]
                    }
                ],
            },
            {
                id: '2',
                name: '运行',
                onDown: this._onDown.bind(this),
            }
        ]
    }
    private _onDown(_args: ActionItemType) {
        if (_args.id === '0-0-0') {
            const node_tag = new FUNNode('1', 'TagAll', {
                raw: {},
                current: {}
            })
            this.flow.vueFlow.addNodes(node_tag)
        }
        else if (_args.id === '1-0-0') {
            const node_view = new FUNNode('2', 'View', {
                raw: {},
                current: {}
            })
            this.flow.vueFlow.addNodes(node_view)
        }
        // 执行
        else if (_args.id === '2') {
            this.flow.vueFlow.edges.value.forEach(item => {
                // console.log(item.sourceNode);
                // console.log(item.targetNode);
                if (item.targetNode.data.task) {
                    item.targetNode.data.task(item.sourceNode.data)
                }
            });
        }
    }
}