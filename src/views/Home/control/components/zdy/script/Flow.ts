import '@vue-flow/core/dist/style.css';
import '@vue-flow/core/dist/theme-default.css';
import '@vue-flow/controls/dist/style.css'
import { Action } from './Action';
import { Connection, Edge, EdgeMouseEvent, Node, VueFlowStore } from '@vue-flow/core';
import { domData } from '@/views/Home/script';
import { WebDom } from '@/utility/WebDom';
import { OBJNode } from './lib/OBJNode';
import { FNode } from './lib/core/FNode';
import { FUNNode } from './lib/FUNNode';
export class Flow {
    nodeArr: Node[] = [];
    edgedArr: Edge[] = [];
    action: Action;
    constructor(public vueFlow: VueFlowStore) {
        this.action = new Action(this);
        const { onInit, fitView, snapToGrid } = vueFlow;
        snapToGrid.value = !true;
        onInit((_instance) => {
            fitView()
            this._init();
        });
    }
    addNode(node: FNode<any>) {
        if (!this.vueFlow.findNode(node.id)) {
            // const w = document.body.clientWidth;
            // const h = document.body.clientHeight;
            // node.position.x = (Math.random() * w * 0.2) + (w * 0.05);
            // node.position.y = (Math.random() * h * 0.2) + (h * 0.05);
            this.vueFlow.addNodes(node);
        }
    }

    onConnect(params: Edge | Connection) {
        console.log('创建连线:', params)
        // 可以在这里添加连线验证逻辑
        // 如果验证通过，添加连线到edges数组
        this.vueFlow.addEdges([params])
    }

    onEdgeClick(edgeMouseEvent: EdgeMouseEvent) {
        console.log('点击连线:', edgeMouseEvent)
        // 可以在这里实现删除连线或其他操作
    }

    _init() {
        const node_dom = new OBJNode('0', 'Dom', {
            raw: domData,
            current: new WebDom(domData.value)
        }).setPosition({ x: 0, y: 0 });
        const node_tag = new FUNNode('1', 'TagAll').setPosition({ x: 200, y: 80 })
        this.vueFlow.addNodes(node_dom);
        this.vueFlow.addNodes(node_tag);
        this.vueFlow.addEdges({
            id: 'e0>1',
            source: '0',
            target: '1'
        });
    }
}