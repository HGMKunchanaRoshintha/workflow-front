import React from 'react'
import { useState } from 'react';
import ReactFlow from 'react-flow-renderer'

const elements = [
    { id:'1', data: {label: 'Node 1'}, position: {x:250, y:5}},
    { id:'2', data: {label: <div>Node 2</div>}, position: {x:100, y:100}},
    { id:'el-2', source: '1', target: '2', animated: true},
];

const initialNodes = [
    {
      id: '1',
      type: 'input',
      data: { label: 'Input Node' },
      position: { x: 250, y: 25 },
    },
  
    {
      id: '2',
      // you can also pass a React component as a label
      data: { label: <div>Default Node</div> },
      position: { x: 100, y: 125 },
    },
    {
      id: '3',
      type: 'output',
      data: { label: 'Output Node' },
      position: { x: 250, y: 250 },
    },
  ];
  
  const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3', animated: true },
  ];
// const ReactRenderFlow = () => {
//     return (
        
//     )
// }

export default function Home() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
  return (
    <div style={{width:'100%', height: '100vh'}} className="container">
       
        <ReactFlow nodes={nodes} edges={edges} fitView />
    </div>
  )
}
