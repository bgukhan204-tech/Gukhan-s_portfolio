import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  ShieldAlert, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  Terminal, 
  CreditCard, 
  Key,
  Layers,
  Search
} from 'lucide-react';
import { cyberAudio } from '../utils/audio';

import { DeepShieldVideoDemo } from './DeepShieldVideoDemo';

interface Props {
  demoType: 'deepfake-detector' | 'phishing-detector' | 'spring-checkout' | 'defect-scanner' | 'rag-retriever';
}

export const InteractiveSimulator: React.FC<Props> = ({ demoType }) => {
  if (demoType === 'deepfake-detector') {
    return <DeepShieldVideoDemo />;
  }
  // Simulator 1: Phishing Dual-Engine
  const [urlInput, setUrlInput] = useState('https://secure-login.paypa1-security-verification.com/auth');
  const [phishingResult, setPhishingResult] = useState<{
    status: 'idle' | 'running' | 'done';
    score: number;
    verdict: 'MALICIOUS_PHISHING' | 'BENIGN_SAFE';
    latency: number;
    tokens: { word: string; weight: number }[];
    heuristics: string[];
  }>({ status: 'idle', score: 0, verdict: 'BENIGN_SAFE', latency: 0, tokens: [], heuristics: [] });

  const runPhishingAnalysis = (inputUrl = urlInput) => {
    cyberAudio.playClick();
    setPhishingResult(prev => ({ ...prev, status: 'running' }));

    setTimeout(() => {
      cyberAudio.playSuccess();
      const isMalicious = inputUrl.toLowerCase().includes('paypa1') || 
                          inputUrl.toLowerCase().includes('verify') || 
                          inputUrl.toLowerCase().includes('bank') ||
                          inputUrl.toLowerCase().includes('free');
      
      const score = isMalicious ? 96.8 : 4.2;
      const verdict = isMalicious ? 'MALICIOUS_PHISHING' : 'BENIGN_SAFE';
      
      const parts = inputUrl.split(/[/.:?=&-]+/).filter(Boolean);
      const tokens = parts.map(word => ({
        word,
        weight: word.includes('paypa1') || word.includes('security') || word.includes('verify')
          ? 0.94
          : Math.random() * 0.35 + 0.05
      }));

      setPhishingResult({
        status: 'done',
        score,
        verdict,
        latency: Math.floor(Math.random() * 8) + 32, // 32-40ms
        tokens,
        heuristics: isMalicious 
          ? ["Homograph Character Spoofing ('1' for 'l')", "High Shannon Entropy in Subdomain", "Unregistered SSL Issuer Hash"]
          : ["Valid Domain Signature", "Zero Lexical Redirection Flags", "Standard TLS Handshake"]
      });
    }, 600);
  };

  // Simulator 2: Spring Boot & Razorpay Checkout
  const [checkoutStep, setCheckoutStep] = useState<'idle' | 'authorizing' | 'kafka_event' | 'razorpay_webhook' | 'completed'>('idle');
  const [orderLogs, setOrderLogs] = useState<string[]>([]);

  const triggerCheckout = () => {
    cyberAudio.playClick();
    setCheckoutStep('authorizing');
    setOrderLogs(['[00ms] POST /api/v1/orders/checkout payload signed with JWT (Bearer eyJhbGciOiJIUzI1Ni...)']);

    setTimeout(() => {
      setCheckoutStep('kafka_event');
      setOrderLogs(prev => [
        ...prev,
        '[45ms] Acquiring Distributed Redis Lock (key: order_lock_9482)',
        '[65ms] Kafka Topic Published -> [payment.orders.init] (Partition 3, Offset 104291)'
      ]);

      setTimeout(() => {
        setCheckoutStep('razorpay_webhook');
        setOrderLogs(prev => [
          ...prev,
          '[92ms] Razorpay Webhook Ingress (Event: payment.captured, Signature: HMAC-SHA256 valid)',
          '[112ms] Inventory Deducted. ACID Transaction Committed to PostgreSQL Cluster'
        ]);

        setTimeout(() => {
          setCheckoutStep('completed');
          cyberAudio.playSuccess();
          setOrderLogs(prev => [
            ...prev,
            '[124ms] Order #ORD-88291 Settled. Status: SUCCESS (Latency: 124ms, Zero Dropped Packets)'
          ]);
        }, 400);
      }, 500);
    }, 500);
  };

  // Simulator 3: Defect Scanner
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'detected'>('idle');
  const [defectType, setDefectType] = useState('Micro-Crack / Solder Bridge');

  const runDefectScan = () => {
    cyberAudio.playClick();
    setScanState('scanning');
    setTimeout(() => {
      cyberAudio.playSuccess();
      setScanState('detected');
    }, 500);
  };

  if (demoType === 'phishing-detector') {
    return (
      <div className="space-y-4 font-mono">
        <div className="flex items-center justify-between text-xs text-slate-300">
          <span className="text-[#00F0FF] flex items-center gap-1.5 font-bold">
            <Zap className="w-3.5 h-3.5" />
            LIVE INFERENCE TEST: SENTINEL-AI ENSEMBLE
          </span>
          <span className="text-slate-500 text-[11px]">RoBERTa + Bi-LSTM Engine</span>
        </div>

        {/* Input & Sample buttons */}
        <div className="space-y-2">
          <div className="flex gap-2">
            <input
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="Enter suspicious URL or payload string..."
              className="flex-1 px-3.5 py-2 rounded-lg bg-[#0B1121] border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-[#00F0FF]"
            />
            <button
              type="button"
              onClick={() => runPhishingAnalysis()}
              disabled={phishingResult.status === 'running'}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#00F0FF] to-[#38BDF8] text-slate-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer hover:brightness-110 disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5" />
              <span>{phishingResult.status === 'running' ? 'Scanning...' : 'Analyze'}</span>
            </button>
          </div>

          {/* Quick presets */}
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400">
            <span>Test Presets:</span>
            <button
              type="button"
              onClick={() => {
                setUrlInput('https://secure-login.paypa1-security-verification.com/auth');
                runPhishingAnalysis('https://secure-login.paypa1-security-verification.com/auth');
              }}
              className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/30 hover:bg-rose-500/20"
            >
              Phishing Homograph URL
            </button>
            <button
              type="button"
              onClick={() => {
                setUrlInput('https://github.com/alexvance-ai/spring-microservices');
                runPhishingAnalysis('https://github.com/alexvance-ai/spring-microservices');
              }}
              className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20"
            >
              Legitimate GitHub Repo
            </button>
          </div>
        </div>

        {/* Results Panel */}
        {phishingResult.status === 'done' && (
          <div className="p-4 rounded-xl bg-[#0B1121] border border-slate-800 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {phishingResult.verdict === 'MALICIOUS_PHISHING' ? (
                  <ShieldAlert className="w-5 h-5 text-rose-400" />
                ) : (
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                )}
                <div>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded ${
                      phishingResult.verdict === 'MALICIOUS_PHISHING'
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
                    }`}
                  >
                    VERDICT: {phishingResult.verdict}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-400">Confidence: </span>
                <span className="text-sm font-bold text-[#00F0FF]">{phishingResult.score}%</span>
                <span className="text-[10px] text-slate-500 block">Latency: {phishingResult.latency}ms</span>
              </div>
            </div>

            {/* Token Attention Heatmap */}
            <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
              <span className="text-[11px] text-slate-400">Transformer Attention Weights (Explainability):</span>
              <div className="flex flex-wrap gap-1 p-2 rounded bg-[#0F172A] border border-slate-800 text-xs">
                {phishingResult.tokens.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: t.weight > 0.7 ? 'rgba(244, 63, 94, 0.35)' : 'rgba(0, 240, 255, 0.1)',
                      borderColor: t.weight > 0.7 ? 'rgba(244, 63, 94, 0.6)' : 'transparent',
                    }}
                    className="px-1.5 py-0.5 rounded border text-slate-200"
                    title={`Attention Weight: ${(t.weight * 100).toFixed(1)}%`}
                  >
                    {t.word}
                    <span className="text-[9px] text-slate-400 ml-1">{(t.weight * 100).toFixed(0)}%</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Heuristic Checks */}
            <div className="space-y-1 pt-1">
              <span className="text-[11px] text-slate-400">Lexical Heuristic Flags:</span>
              <ul className="text-xs space-y-1">
                {phishingResult.heuristics.map((h, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (demoType === 'spring-checkout') {
    return (
      <div className="space-y-4 font-mono">
        <div className="flex items-center justify-between text-xs text-slate-300">
          <span className="text-[#00F0FF] flex items-center gap-1.5 font-bold">
            <CreditCard className="w-3.5 h-3.5" />
            SPRING BOOT 3 & KAFKA ASYNC ORDER ENGINE
          </span>
          <span className="text-slate-500 text-[11px]">Razorpay Webhook Verification</span>
        </div>

        {/* Trigger Banner */}
        <div className="p-4 rounded-xl bg-[#0B1121] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-slate-200">Mock Order Payload #ORD-88291</div>
            <div className="text-[11px] text-slate-400">Amount: $499.00 USD | User: student_dev_01 | Items: 3</div>
          </div>

          <button
            type="button"
            onClick={triggerCheckout}
            disabled={checkoutStep !== 'idle' && checkoutStep !== 'completed'}
            className="w-full sm:w-auto px-5 py-2 rounded-lg bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer hover:brightness-110 disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5" />
            <span>{checkoutStep === 'idle' || checkoutStep === 'completed' ? 'Simulate 4.5k/req Payment Flow' : 'Processing...'}</span>
          </button>
        </div>

        {/* Workflow Stages */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
          <div className={`p-2.5 rounded-lg border text-center ${checkoutStep !== 'idle' ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-[#00F0FF]' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
            <Key className="w-3.5 h-3.5 mx-auto mb-1" />
            <span>1. JWT Auth</span>
          </div>
          <div className={`p-2.5 rounded-lg border text-center ${checkoutStep === 'kafka_event' || checkoutStep === 'razorpay_webhook' || checkoutStep === 'completed' ? 'bg-[#A855F7]/15 border-[#A855F7] text-purple-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
            <Layers className="w-3.5 h-3.5 mx-auto mb-1" />
            <span>2. Kafka Event</span>
          </div>
          <div className={`p-2.5 rounded-lg border text-center ${checkoutStep === 'razorpay_webhook' || checkoutStep === 'completed' ? 'bg-amber-500/15 border-amber-500 text-amber-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
            <CreditCard className="w-3.5 h-3.5 mx-auto mb-1" />
            <span>3. Razorpay HMAC</span>
          </div>
          <div className={`p-2.5 rounded-lg border text-center ${checkoutStep === 'completed' ? 'bg-emerald-500/15 border-emerald-500 text-emerald-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
            <CheckCircle2 className="w-3.5 h-3.5 mx-auto mb-1" />
            <span>4. ACID Commit</span>
          </div>
        </div>

        {/* Live Telemetry Log Terminal */}
        {orderLogs.length > 0 && (
          <div className="p-3.5 rounded-lg bg-[#070B14] border border-slate-800/80 text-[11px] space-y-1.5">
            <div className="text-slate-500 flex items-center justify-between pb-1 border-b border-slate-800">
              <span className="flex items-center gap-1">
                <Terminal className="w-3 h-3 text-[#00F0FF]" />
                Event Stream Worker Logs
              </span>
              <span className="text-emerald-400">P95: 124ms</span>
            </div>
            {orderLogs.map((log, i) => (
              <div key={i} className="text-slate-300 animate-fadeIn">
                {log}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (demoType === 'defect-scanner') {
    return (
      <div className="space-y-4 font-mono">
        <div className="flex items-center justify-between text-xs text-slate-300">
          <span className="text-[#00F0FF] flex items-center gap-1.5 font-bold">
            <Cpu className="w-3.5 h-3.5" />
            TENSORRT FP16 EDGE INFERENCE SIMULATOR
          </span>
          <span className="text-slate-500 text-[11px]">YOLOv8-Seg Polygon Mask</span>
        </div>

        {/* Simulated Camera Feed Frame */}
        <div className="relative w-full h-48 bg-[#070B14] rounded-xl border border-slate-700 overflow-hidden flex items-center justify-center">
          {/* PCB Grid Simulation */}
          <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
          
          <div className="relative z-10 text-center space-y-2">
            <div className="w-28 h-28 mx-auto border-2 border-dashed border-slate-600 rounded-lg flex items-center justify-center relative">
              <span className="text-[11px] text-slate-500">IC Component [BGA-256]</span>
              
              {/* Highlighted Defect Polygon */}
              {scanState === 'detected' && (
                <div className="absolute top-2 right-2 p-1 bg-rose-500/20 border-2 border-rose-500 rounded text-[9px] text-rose-300 animate-pulse font-bold">
                  Defect: Solder Bridge (98.4%)
                </div>
              )}
            </div>

            <span className="text-xs text-slate-400 block">
              {scanState === 'idle' && 'Ready for 60 FPS RTSP frame stream'}
              {scanState === 'scanning' && 'Quantizing CUDA Frame Buffer (FP16)...'}
              {scanState === 'detected' && '✓ Segmentation Complete: Polygon Mask Generated (22ms)'}
            </span>
          </div>

          <div className="absolute top-2 left-2 text-[10px] bg-slate-900/90 px-2 py-0.5 rounded text-[#00F0FF] border border-slate-700">
            FPS: 60.0 | Engine: TensorRT v10.2
          </div>
        </div>

        <button
          type="button"
          onClick={runDefectScan}
          className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#00F0FF] to-[#38BDF8] text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer hover:brightness-110"
        >
          <Play className="w-3.5 h-3.5" />
          <span>Execute Real-Time Edge Segmentation Pass</span>
        </button>
      </div>
    );
  }

  // RAG Retriever
  return (
    <div className="space-y-4 font-mono text-xs">
      <div className="flex items-center justify-between text-slate-300">
        <span className="text-[#00F0FF] flex items-center gap-1.5 font-bold">
          <Search className="w-3.5 h-3.5" />
          HYBRID DENSE + SPARSE VECTOR RETRIEVAL TEST
        </span>
        <span className="text-slate-500 text-[11px]">Qdrant + Cross-Encoder</span>
      </div>

      <div className="p-3.5 rounded-xl bg-[#0B1121] border border-slate-800 space-y-3">
        <div className="text-slate-300">
          Query: <span className="text-[#00F0FF]">"How does the Kafka transactional outbox prevent duplicate payment events?"</span>
        </div>

        <div className="space-y-2">
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
            <div className="flex justify-between text-[11px] text-slate-400 pb-1">
              <span className="text-emerald-400 font-bold">Chunk #1 (Rerank Score: 0.96)</span>
              <span>Doc: PaymentArchitecture_v3.pdf</span>
            </div>
            <p className="text-slate-300 text-[11px]">
              "The transactional outbox writes order records and outbound event messages to Postgres in a single ACID transaction. The Kafka worker then polls the outbox table with idempotent deduplication keys..."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
