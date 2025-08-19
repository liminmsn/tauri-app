import { Position } from "@vue-flow/core";
import { Flow } from "../Flow";

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
                                name: "请求的dom",
                                onDown: this._onDown.bind(this)
                            }
                        ]
                    }
                ],
            },
            {
                id: '1',
                name: '编辑',
                onDown: this._onDown,
                children: [],
            }
        ]
    }
    private _onDown(_args: ActionItemType) {
        // alert(_args.id)
        switch (_args.id) {
            case '0-0-1':
                const node = {
                    id: Date.now().toString(),
                    type: 'input',
                    data: { label: 'DOM' },
                    position: { x: 10, y: 50 },
                    sourcePosition: Position.Right,
                    style: {
                        width: '80px',
                        '--vf-handle': 'var(--VITE_THEME_ONE)',
                        border: '1px solid var(--VITE_THEME_ONE)',
                        background: 'var(--VITE_THEME_ONE_BG)'
                    },
                };
                this.flow.nodeArr.nodes.value.push(node);
                break;
        }
    }
}