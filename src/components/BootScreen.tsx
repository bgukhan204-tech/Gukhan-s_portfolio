import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, CheckCircle2, Cpu, ShieldCheck, Activity, FastForward } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

interface Props {
  onComplete: () => void;
}

interface BootLog {
  id: number;
  time: string;
  category: string;
  message: string;
  status: 'PENDING' | 'RUNNING' | 'OK' | 'ONLINE';
  delay: number;
}

export const BootScreen: React.FC<Props> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState<BootLog[]>([]);
  const [isDone, setIsDone] = useState(false);

  const logs: BootLog[] = [
    { id: 1, time: '0.12s', category: 'KERNEL', message: 'Initializing Neural Architecture Core v4.2.0-LTS...', status: 'OK', delay: 200 },
    { id: 2, time: '0.65s', category: 'CHECK: AI/ML', message: 'Validating PyTorch, RoBERTa & TensorRT Quantization pipelines...', status: 'OK', delay: 700 },
    { id: 3, time: '1.20s', category: 'CHECK: BACKEND', message: 'Connecting Java 21 / Spring Boot 3 & Kafka event stream brokers...', status: 'OK', delay: 1300 },
    { id: 4, time: '1.75s', category: 'CHECK: FRONTEND', message: 'Mounting React 19, TypeScript strict engine & Tailwind canvas...', status: 'OK', delay: 1900 },
    { id: 5, time: '2.25s', category: 'CHECK: DATA', message: 'Indexing Qdrant vector shards & PostgreSQL ACID ledger...', status: 'OK', delay: 2400 },
    { id: 6, time: '2.80s', category: 'SYSTEM', message: 'Core Competencies verified. Status: ONLINE (100% Ready)', status: 'ONLINE', delay: 2900 },
  ];

  useEffect(() => {
    // Progressive log reveal
    const timers: NodeJS.Timeout[] = [];

    logs.forEach((log) => {
      const timer = setTimeout(() => {
        setVisibleLogs(prev => [...prev, log]);
        cyberAudio.playBootBeep(500 + log.id * 120, 0.04);
      }, log.delay);
      timers.push(timer);
    });

    // Progress bar animation over ~3.2 seconds
    const interval = setInterval(() => {
      setProgress(old => {
        if (old >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.min(100, old + Math.floor(Math.random() * 8) + 4);
        return step;
      });
    }, 120);

    // Complete sequence trigger
    const completeTimer = setTimeout(() => {
      setIsDone(true);
      cyberAudio.playSuccess();
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 500);
      timers.push(finishTimer);
    }, 3200);

    timers.push(completeTimer);

    // Key listener to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'Enter' || e.code === 'Escape') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      timers.forEach(t => clearTimeout(t));
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="system-boot-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02, filter: 'blur(8px)' }}
        transition={{ duration: 0.55, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 bg-[#0B1121] flex flex-col items-center justify-center p-4 md:p-8 select-none font-mono text-slate-200"
      >
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,41,59,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,41,59,0.25)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 pointer-events-none" />

        {/* Ambient glow */}
        <div className="absolute w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute w-96 h-96 bg-[#A855F7]/10 rounded-full blur-3xl translate-y-24 pointer-events-none" />

        <div className="relative w-full max-w-2xl bg-[#0F172A]/90 border border-slate-800 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Terminal Window Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0B1121] border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs text-slate-400 font-mono ml-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
                system_boot.sh — ai_engineer_core
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-[#00F0FF] border border-[#00F0FF]/30">
                BOOT SEQUENCE
              </span>
              <button
                id="btn-skip-boot"
                type="button"
                onClick={onComplete}
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-[#00F0FF] transition-colors cursor-pointer py-0.5 px-2 rounded hover:bg-slate-800"
                title="Skip sequence"
              >
                <FastForward className="w-3.5 h-3.5" />
                <span>Skip</span>
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 md:p-6 space-y-3 min-h-[300px] text-xs md:text-sm">
            {/* Header Telemetry */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pb-3 border-b border-slate-800 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>ARCH: x86_64 / CUDA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#A855F7]" />
                <span>VRAM: 32GB ALLOC</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>INTEGRITY: 100%</span>
              </div>
            </div>

            {/* Live Boot Logs */}
            <div className="space-y-2.5 pt-1">
              {visibleLogs.map((log) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start justify-between gap-2"
                >
                  <div className="flex items-start gap-2 overflow-hidden">
                    <span className="text-slate-500 shrink-0">[{log.time}]</span>
                    <span className="text-[#00F0FF] font-semibold shrink-0">[{log.category}]</span>
                    <span className="text-slate-300 truncate">{log.message}</span>
                  </div>

                  <span
                    className={`shrink-0 text-xs px-2 py-0.5 rounded font-mono font-bold ${
                      log.status === 'ONLINE'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 glow-cyan animate-pulse'
                        : 'bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30'
                    }`}
                  >
                    {log.status === 'ONLINE' ? '● ONLINE' : '✓ OK'}
                  </span>
                </motion.div>
              ))}

              {visibleLogs.length < logs.length && (
                <div className="flex items-center gap-2 text-slate-500 animate-pulse pt-1">
                  <span className="inline-block w-2 h-4 bg-[#00F0FF]" />
                  <span>Scanning core competencies & model weights...</span>
                </div>
              )}
            </div>

            {/* Progress Bar & Status */}
            <div className="pt-4 mt-4 border-t border-slate-800 space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#00F0FF] animate-spin" />
                  {isDone ? 'System Boot Complete' : 'Executing Diagnostic Handshake...'}
                </span>
                <span className="text-[#00F0FF] font-bold">{progress}%</span>
              </div>

              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#A855F7]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                />
              </div>

              <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1">
                <span>Identity: Motivated AI & Data Science Engineer</span>
                <span className="text-slate-400">Press SPACE or click to skip</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
