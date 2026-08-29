import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, CORE_TECH_STACK, TOOLS_AND_PLATFORMS } from '../data/portfolioData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onReplayBoot?: () => void;
  onToggleMatrix?: () => void;
}

interface CommandLog {
  id: number;
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<Props> = ({ 
  isOpen, 
  onClose, 
  onOpenResume, 
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 0,
      command: 'init',
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-teal-400 font-bold">Gukhan B Engineering CLI [v2.0.0]</p>
          <p className="text-slate-400">Type <span className="text-teal-300 font-bold">help</span> to view available commands.</p>
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (cmdStr: string) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    const [command, ...args] = raw.toLowerCase().split(' ');
    setHistory(prev => [...prev, raw]);
    setHistoryIdx(-1);

    let output: React.ReactNode = null;

    switch (command) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-teal-400 font-bold">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
              <p><span className="text-teal-300">whoami</span> - Display candidate profile</p>
              <p><span className="text-teal-300">projects</span> - List flagship engineering projects</p>
              <p><span className="text-teal-300">skills</span> - Display core stack and tools</p>
              <p><span className="text-teal-300">resume</span> - Open printable ATS resume</p>
              <p><span className="text-teal-300">contact</span> - Output direct email & links</p>
              <p><span className="text-teal-300">clear</span> - Clear terminal logs</p>
            </div>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-teal-400 font-bold">{PERSONAL_INFO.name} — {PERSONAL_INFO.title}</p>
            <p className="text-slate-300">{PERSONAL_INFO.bio}</p>
            <p className="text-emerald-400">{PERSONAL_INFO.educationSummary}</p>
            <p className="text-slate-400">Status: {PERSONAL_INFO.status}</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="text-teal-400 font-bold">ENGINEERED PRODUCTION SYSTEMS:</p>
            {PROJECTS_DATA.map((p, i) => (
              <div key={p.id} className="p-2 rounded bg-slate-900 border border-slate-800 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-100 font-bold">0{i+1}. {p.title}</span>
                  <span className="text-teal-400">{p.metrics[0]?.value}</span>
                </div>
                <p className="text-slate-400 mt-0.5">{p.tagline}</p>
                <p className="text-teal-300 text-[11px] mt-1">Stack: {p.techStack.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-teal-400 font-bold">TECHNICAL SKILLS SUMMARY:</p>
            <p className="text-slate-300">Core: {CORE_TECH_STACK.map(s => s.name).join(', ')}</p>
            <p className="text-slate-300">Tools: {TOOLS_AND_PLATFORMS.map(s => s.name).join(', ')}</p>
          </div>
        );
        break;

      case 'resume':
        output = <p className="text-emerald-400">Opening ATS resume viewer modal...</p>;
        setTimeout(() => onOpenResume(), 300);
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-slate-300">
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-teal-400 underline">{PERSONAL_INFO.email}</a></p>
            <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-teal-400 underline">{PERSONAL_INFO.github}</a></p>
            <p>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-teal-400 underline">{PERSONAL_INFO.linkedin}</a></p>
          </div>
        );
        break;

      case 'clear':
        setLogs([]);
        return;

      default:
        output = (
          <p className="text-rose-400">
            command not found: "{raw}". Type <span className="text-teal-300">help</span> to view commands.
          </p>
        );
    }

    setLogs(prev => [...prev, { id: Date.now(), command: raw, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0) {
        const nextIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(nextIdx);
        setInput(history[nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIdx !== -1) {
        const nextIdx = historyIdx + 1;
        if (nextIdx >= history.length) {
          setHistoryIdx(-1);
          setInput('');
        } else {
          setHistoryIdx(nextIdx);
          setInput(history[nextIdx] || '');
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      id="terminal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-3xl h-[500px] bg-[#0A192F] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-mono text-xs text-white">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#071322] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-300 font-mono flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-teal-400" />
              gukhan@developer:~ (bash)
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <button
              id="terminal-btn-close"
              type="button"
              onClick={onClose}
              className="p-1 rounded hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Log Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0A192F]">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-teal-400">visitor@portfolio:~$</span>
                <span className="text-slate-100 font-semibold">{log.command}</span>
              </div>
              <div className="pl-4">{log.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#071322] border-t border-slate-800 flex items-center gap-2">
          <span className="text-teal-400 shrink-0 font-bold">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'projects', or 'whoami'..."
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-xs font-mono"
          />
          <button
            type="button"
            onClick={() => {
              handleCommand(input);
              setInput('');
            }}
            className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
