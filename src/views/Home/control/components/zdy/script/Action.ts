import { Flow } from "./Flow";
import { FUNNode } from "./lib/FUNNode";

interface ActionItemType {
    id: string;
    name: string;
    children?: ActionItemType[]
    onDown?: (args: ActionItemType) => void;
}
//#TODO：功能在这里加
export class Action {
    list: ActionItemType[] = [];
    constructor(private flow: Flow) {
        this.list = [
            {
                id: '0',
                name: '操作',
                children: [
                    {
                        id: '0-0',
                        name: "获取",
                        children: [
                            {
                                id: '0-0-0',
                                name: "TagAll",
                                onDown: this._onDown.bind(this)
                            }
                        ]
                    },
                    {
                        id: '0-1',
                        name: "视图",
                        children: [
                            {
                                id: '0-1-0',
                                name: "View",
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
                        name: "保存",
                        children: [
                            {
                                id: '1-0-0',
                                name: "SaveImg",
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
        // 执行
        if (_args.id === '2') {
            this.flow.vueFlow.edges.value.forEach(item => {
                if (item.targetNode.data.task) {
                    item.targetNode.data.task(item.sourceNode.data)
                }
            });
        } else if (_args.id === '0-0-0') {
            const node_tag = new FUNNode('1', 'TagAll')
            this.flow.addNode(node_tag)
        } else if (_args.id === '0-1-0') {
            const node_view = new FUNNode(Date.now().toString(), 'View')
            this.flow.addNode(node_view)
        } else if (_args.id === '1-0-0') {
            const node_image_save = new FUNNode('3', 'ImageSave')
            this.flow.addNode(node_image_save);
        }
    }
}