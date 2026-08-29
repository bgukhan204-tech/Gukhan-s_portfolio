import React, { useState } from 'react';
import { ArchitectureDiagram } from '../types';
import { Database, Cpu, ArrowRight, Shield, Layers, HardDrive, CheckCircle } from 'lucide-react';

interface Props {
  diagram: ArchitectureDiagram;
  compact?: boolean;
}

export const ArchitectureDiagramView: React.FC<Props> = ({ diagram, compact = false }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'input':
        return <Layers className="w-3.5 h-3.5 text-[#00F0FF]" />;
      case 'model':
        return <Cpu className="w-3.5 h-3.5 text-[#A855F7]" />;
      case 'database':
        return <Database className="w-3.5 h-3.5 text-emerald-400" />;
      case 'output':
        return <CheckCircle className="w-3.5 h-3.5 text-[#00F0FF]" />;
      default:
        return <HardDrive className="w-3.5 h-3.5 text-sky-400" />;
    }
  };

  const getNodeColor = (type: string, isHovered: boolean) => {
    if (isHovered) {
      return 'border-[#00F0FF] bg-[#00F0FF]/15 text-white shadow-lg shadow-[#00F0FF]/20';
    }
    switch (type) {
      case 'input':
        return 'border-slate-700 bg-slate-900/90 text-slate-200';
      case 'model':
        return 'border-[#A855F7]/40 bg-[#A855F7]/10 text-purple-200';
      case 'database':
        return 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200';
      case 'output':
        return 'border-[#00F0FF]/50 bg-[#00F0FF]/10 text-cyan-200';
      default:
        return 'border-slate-800 bg-slate-900/80 text-slate-300';
    }
  };

  if (compact) {
    return (
      <div className="w-full bg-[#0B1121]/90 rounded-lg p-3 border border-slate-800/90 space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1 text-[#00F0FF]">
            <Cpu className="w-3 h-3" />
            ARCHITECTURE FLOW
          </span>
          <span className="text-[10px] text-slate-500">{diagram.nodes.length} Pipeline Stages</span>
        </div>

        {/* Compact Horizontal Node Chain */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1.5 no-scrollbar">
          {diagram.nodes.map((node, idx) => (
            <React.Fragment key={node.id}>
              <div
                className={`shrink-0 px-2.5 py-1.5 rounded-md border text-[11px] font-mono flex items-center gap-1.5 transition-all ${
                  node.type === 'model'
                    ? 'bg-[#A855F7]/15 border-[#A855F7]/40 text-purple-200'
                    : node.type === 'output'
                    ? 'bg-[#00F0FF]/15 border-[#00F0FF]/40 text-cyan-200 font-semibold'
                    : 'bg-slate-900 border-slate-800 text-slate-300'
                }`}
              >
                {getNodeIcon(node.type)}
                <span className="truncate max-w-[110px]">{node.label}</span>
              </div>

              {idx < diagram.nodes.length - 1 && (
                <span className="text-slate-600 font-mono text-xs shrink-0 flex items-center">
                  →
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#0B1121] rounded-xl p-4 md:p-6 border border-slate-800 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800 text-xs font-mono">
        <span className="text-[#00F0FF] font-semibold flex items-center gap-2">
          <Cpu className="w-4 h-4" />
          {diagram.title}
        </span>
        <div className="flex items-center gap-3 text-[11px] text-slate-400">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#00F0FF]" /> Ingress/Output</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#A855F7]" /> Model/Ensemble</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Database</span>
        </div>
      </div>

      {/* Grid of Interconnected Flow Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {diagram.nodes.map((node, i) => {
          const isHovered = activeNode === node.id;
          return (
            <div
              key={node.id}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              className={`p-3.5 rounded-lg border transition-all cursor-pointer relative overflow-hidden ${getNodeColor(
                node.type,
                isHovered
              )}`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-slate-950/60 border border-slate-800">
                    {getNodeIcon(node.type)}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold font-mono tracking-tight text-slate-100">{node.label}</h5>
                    {node.sublabel && (
                      <p className="text-[11px] text-slate-400 font-mono mt-0.5">{node.sublabel}</p>
                    )}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-500 font-semibold">0{i + 1}</span>
              </div>

              {/* Stage Type Tag */}
              <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="uppercase text-[9px] px-1.5 py-0.5 rounded bg-slate-950/80 border border-slate-800">
                  {node.type}
                </span>
                <span className="text-slate-500">Node ID: {node.id}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Data Flow Connections Summary */}
      <div className="pt-2 border-t border-slate-800/80">
        <h6 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
          Data Stream Connections:
        </h6>
        <div className="flex flex-wrap gap-2">
          {diagram.connections.map((conn, idx) => (
            <div
              key={idx}
              className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-slate-300 flex items-center gap-1.5"
            >
              <span className="text-[#00F0FF]">{conn.from}</span>
              <ArrowRight className="w-3 h-3 text-slate-500" />
              <span className="text-[#A855F7]">{conn.to}</span>
              {conn.label && (
                <span className="text-[10px] text-slate-400 bg-slate-950 px-1.5 py-0.2 rounded border border-slate-800 ml-1">
                  ({conn.label})
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
