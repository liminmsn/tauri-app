import { ref } from "vue"
import type { Node, Edge } from '@vue-flow/core'

export const nodes = ref<Node[]>([
    {
        id: '1',
        type: 'input',
        position: { x: 10, y: 50 },
        data: { label: '<h1>123</h1>' },
    },
    {
        id: '2',
        position: { x: 100, y: 100 },
        data: { label: 'Node 2' },
    },

    {
        id: '3',
        type: 'output',
        position: { x: 400, y: 200 },
        data: { label: 'Node 3' },
    },

    {
        id: '4',
        type: 'special',
        position: { x: 400, y: 200 },
        data: {
            label: 'Node 4',
            hello: 'world',
        },
    },
])

export const edges = ref<Edge[]>([
    {
        id: 'e1->2',
        source: '1',
        target: '2',
    },

    {
        id: 'e2->3',
        source: '2',
        target: '3',
        animated: true,
    },

    {
        id: 'e3->4',
        type: 'special',
        source: '3',
        target: '4',

        data: {
            hello: 'world',
        }
    },
])