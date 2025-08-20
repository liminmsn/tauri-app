import '@vue-flow/core/dist/style.css';
import '@vue-flow/core/dist/theme-default.css';
import '@vue-flow/controls/dist/style.css'
import { Action } from './Action';
import { Connection, Edge, EdgeMouseEvent, Node, VueFlowStore } from '@vue-flow/core';

export class Flow {
    nodeArr: Node[] = [];
    edgedArr: Edge[] = [];
    action: Action;
    constructor(public vueFlow: VueFlowStore) {
        this.action = new Action(this);
        const { onInit, fitView, snapToGrid } = vueFlow;
        snapToGrid.value = true;
        onInit((_instance) => {
            fitView()
            // const node = findNode('1')
            // if (node) {
            //     //   node.position = { x: 100, y: 100 }
            // }
        });
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
}