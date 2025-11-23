import { useCallback } from 'react';
import {
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
  MiniMap,
  BackgroundVariant,
  ReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Layers } from 'lucide-react';
import { authClient } from '@/lib/auth-client';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Start Here' },
    position: { x: 250, y: 50 },
    style: {
      background: '#fff',
      border: '1px solid #cbd5e1',
      borderRadius: '8px',
      padding: '12px 16px',
      fontWeight: 500,
      color: '#334155',
      fontSize: '14px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
    },
  },
  {
    id: '2',
    data: { label: 'Process Node' },
    position: { x: 250, y: 150 },
    style: {
      background: '#fff',
      border: '1px solid #cbd5e1',
      borderRadius: '8px',
      padding: '12px 16px',
      fontWeight: 500,
      color: '#334155',
      fontSize: '14px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    style: { stroke: '#cbd5e1', strokeWidth: 2 },
  },
];

export function RightPanel() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const { data: session } = authClient.useSession();


  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="flex-1 flex flex-col h-full ">
      <div className="px-6 py-4 border-b  shadow-soft">
        <div className="flex items-center gap-3">
          <div>Welcome {session?.user.email}</div>
          <h2 className="text-xl font-semibold text-slate-800">Here is your Canvas 👇</h2>
        </div>
        
      </div>

      <div className="flex-1 relative h-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          className="sketchy-canvas"
        >
          <Background
            variant={BackgroundVariant.Cross}
            gap={20}
            size={1}
            color="oklch(49.1% 0.27 292.581)"
          />
          <Controls className="sketchy-controls text-black" />
          {/* <MiniMap
            nodeColor="#fff"
            nodeStrokeColor="#cbd5e1"
            nodeStrokeWidth={1}
            maskColor="rgba(0, 0, 0, 0.08)"
            className="sketchy-minimap"
          /> */}
        </ReactFlow>
      </div>
    </div>
  );
}
