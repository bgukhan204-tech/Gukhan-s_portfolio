import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ShieldCheck, 
  Upload, 
  Camera, 
  Video, 
  Image as ImageIcon,
  CheckCircle2, 
  AlertTriangle, 
  Sliders, 
  Cpu, 
  Film, 
  Eye, 
  Layers,
  Sparkles,
  Maximize2,
  FileVideo
} from 'lucide-react';

export const DeepShieldVideoDemo: React.FC = () => {
  const [viewMode, setViewMode] = useState<'video-demo' | 'live-interactive'>('video-demo');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playbackTime, setPlaybackTime] = useState<number>(0); // 0 to 79 seconds (1:19)
  const totalDuration = 79; // 1:19
  const [activeTab, setActiveTab] = useState<'image' | 'camera' | 'video'>('image');
  
  // Interactive mode states
  const [interactiveImageStatus, setInteractiveImageStatus] = useState<'idle' | 'analyzing' | 'done'>('done');
  const [interactiveVideoStatus, setInteractiveVideoStatus] = useState<'idle' | 'analyzing' | 'done'>('done');
  const [interactiveCameraActive, setInteractiveCameraActive] = useState<boolean>(false);
  const [uploadedVideoFile, setUploadedVideoFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Video walkthrough automated timeline progression
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && viewMode === 'video-demo') {
      interval = setInterval(() => {
        setPlaybackTime((prev) => {
          if (prev >= totalDuration) {
            return 0; // loop
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, viewMode]);

  // Sync virtual screen in video demo based on playback timestamp
  useEffect(() => {
    if (viewMode === 'video-demo') {
      if (playbackTime < 20) {
        setActiveTab('image');
      } else if (playbackTime >= 20 && playbackTime < 36) {
        setActiveTab('camera');
      } else {
        setActiveTab('video');
      }
    }
  }, [playbackTime, viewMode]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleCustomVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setUploadedVideoFile(url);
      setViewMode('live-interactive');
      setActiveTab('video');
    }
  };

  return (
    <div className="space-y-4 text-slate-200">
      {/* Top Header & Mode Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/40">
              <Film className="w-3.5 h-3.5" />
              <span>Project Video Walkthrough</span>
            </span>
            <span className="text-xs text-slate-400 font-mono">DeepShield AI Engine</span>
          </div>
          <h3 className="text-lg font-bold text-white font-serif mt-1">
            Deepfake Detection & AI Multimedia Verification
          </h3>
        </div>

        <div className="flex items-center gap-2 bg-[#0A192F] p-1 rounded-lg border border-slate-800 text-xs">
          <button
            type="button"
            onClick={() => {
              setViewMode('video-demo');
              setIsPlaying(true);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer ${
              viewMode === 'video-demo'
                ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Video Walkthrough (1:19)</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('live-interactive')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer ${
              viewMode === 'live-interactive'
                ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </button>
        </div>
      </div>

      {/* Main Video Frame & App View */}
      <div className="relative rounded-2xl bg-[#070D18] border-2 border-slate-800 shadow-2xl overflow-hidden">
        {/* DeepShield Application Interface UI */}
        <div className="p-4 sm:p-6 max-w-3xl mx-auto space-y-6">
          
          {/* DeepShield App Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-slate-950 shadow-md">
                <ShieldCheck className="w-5 h-5 font-bold" />
              </div>
              <span className="text-base font-bold tracking-tight text-white font-sans">
                DeepShield
              </span>
            </div>

            <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-teal-950/60 border border-teal-500/40 text-[11px] font-mono text-teal-300">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>AI + ELA Active</span>
            </div>
          </div>

          {/* Engine Banner */}
          <div className="text-center space-y-2 py-1">
            <span className="inline-block px-3 py-0.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-[10px] uppercase tracking-wider text-teal-400 font-bold">
              Multi-Modal Detection Engine
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Detect Deepfakes, AI Images & Edits
            </h2>
            <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
              Dual-layer analysis: our Deep Learning model detects face-swaps while Error Level Analysis catches AI-generated content and pixel manipulation.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-[#0A192F] border border-slate-800 text-[11px] text-slate-300">
                🖼️ AI-Generated Images
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0A192F] border border-slate-800 text-[11px] text-slate-300">
                👤 Face Swaps
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0A192F] border border-slate-800 text-[11px] text-slate-300">
                ✂️ Edited Photos
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0A192F] border border-slate-800 text-[11px] text-slate-300">
                🎥 Videos
              </span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex rounded-xl bg-[#0A192F] p-1 border border-slate-800 max-w-md mx-auto">
            <button
              type="button"
              onClick={() => setActiveTab('image')}
              className={`flex-1 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'image'
                  ? 'bg-[#112240] text-teal-300 shadow border border-teal-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Image Analysis</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('camera')}
              className={`flex-1 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'camera'
                  ? 'bg-[#112240] text-teal-300 shadow border border-teal-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Use Camera</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('video')}
              className={`flex-1 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'video'
                  ? 'bg-[#112240] text-teal-300 shadow border border-teal-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Video Analysis</span>
            </button>
          </div>

          {/* TAB 1: IMAGE ANALYSIS VIEW */}
          {activeTab === 'image' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0A192F] border border-slate-800 flex flex-col items-center justify-center text-center space-y-3">
                <div className="relative w-48 h-48 rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-md">
                  <img
                    src="/my_pic.jpeg"
                    onError={(e) => {
                      e.currentTarget.src = '/my pic .jpeg';
                    }}
                    alt="Analyzed subject"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] text-teal-300 border border-teal-500/30">
                    Sample Ingestion
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setInteractiveImageStatus('analyzing');
                    setTimeout(() => setInteractiveImageStatus('done'), 600);
                  }}
                  className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-2 hover:brightness-110 transition-all cursor-pointer shadow-lg shadow-teal-500/20"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{interactiveImageStatus === 'analyzing' ? 'Analyzing...' : 'Analyze Image'}</span>
                </button>
              </div>

              {/* Analysis Result Card */}
              <div className="p-4 rounded-xl bg-[#0A192F] border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="font-bold text-white text-sm">Authentic Image</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">95.46% confidence</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 font-bold">
                      STATUS: GENUINE
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#070D18] border border-slate-800 text-xs text-slate-300 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Context & Reason</span>
                  <p>Pristine sensor noise, clean frequency compression, and consistent facial geometry detected. Content is genuine.</p>
                </div>

                {/* Score Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-emerald-400">✓ AUTHENTIC: 95.46%</span>
                    <span className="text-red-400">⚠ MANIPULATED: 4.54%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-red-950 overflow-hidden flex">
                    <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: '95.46%' }} />
                    <div className="h-full bg-red-500 transition-all duration-500" style={{ width: '4.54%' }} />
                  </div>
                </div>

                {/* Breakdown Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  <div className="p-3 rounded-lg bg-[#070D18] border border-slate-800 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-200">Deep Learning Model</span>
                      <span className="text-[11px] text-slate-400">4.53% Fake</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      Detects face-swap deepfakes by analyzing facial inconsistencies.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#070D18] border border-slate-800 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-200">ELA Analysis</span>
                      <span className="text-[11px] text-slate-400">6.53%</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      Error Level Analysis detects AI-generated content and pixel edits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: USE CAMERA VIEW */}
          {activeTab === 'camera' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0A192F] border border-slate-800 flex flex-col items-center justify-center text-center space-y-3">
                <div className="relative w-full max-w-sm aspect-video rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-md flex items-center justify-center">
                  <img
                    src="/my_pic.jpeg"
                    onError={(e) => {
                      e.currentTarget.src = '/my pic .jpeg';
                    }}
                    alt="Webcam capture feed"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-red-950/80 text-[10px] text-red-300 border border-red-500/40 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                    <span>LIVE WEBCAM STREAM</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="px-5 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Take Photo</span>
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>

              {/* Analysis Result Card */}
              <div className="p-4 rounded-xl bg-[#0A192F] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="font-bold text-white text-sm">Authentic Camera Feed</span>
                  </div>
                  <span className="text-xs text-slate-400">96.48% confidence (STATUS: GENUINE)</span>
                </div>
                <p className="text-xs text-slate-300">
                  Continuous eye blinks, sub-pixel micro-tremors, and natural lighting reflections verified.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: VIDEO ANALYSIS VIEW (From the uploaded video WIN_20260327_12_10_25_Pro.mp4) */}
          {activeTab === 'video' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0A192F] border border-slate-800 space-y-3">
                <div className="p-3 rounded-lg bg-[#070D18] border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-teal-950/60 text-teal-400 border border-teal-500/40">
                      <FileVideo className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">WIN_20260327_12_10_25_Pro.mp4</span>
                      <span className="text-[11px] text-slate-400">19.6 MB • 272 frames</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setInteractiveVideoStatus('analyzing');
                      setTimeout(() => setInteractiveVideoStatus('done'), 700);
                    }}
                    className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>{interactiveVideoStatus === 'analyzing' ? 'Analyzing...' : 'Analyze Video'}</span>
                  </button>
                </div>
              </div>

              {/* Video Analysis Results */}
              <div className="p-4 rounded-xl bg-[#0A192F] border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-semibold block">Video Analysis Results</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="font-bold text-white text-base">Authentic Video</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-emerald-300">91.9% confidence</span>
                    <span className="text-[10px] block px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 font-bold mt-0.5">
                      STATUS: GENUINE
                    </span>
                  </div>
                </div>

                {/* 4 Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  <div className="p-2.5 rounded-lg bg-[#070D18] border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase block">Duration</span>
                    <span className="text-sm font-bold text-white">9.1s</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#070D18] border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase block">Total Frames</span>
                    <span className="text-sm font-bold text-white">272</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#070D18] border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase block">Frames Analyzed</span>
                    <span className="text-sm font-bold text-white">12</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#070D18] border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase block">ELA Score</span>
                    <span className="text-sm font-bold text-teal-300">6.72%</span>
                  </div>
                </div>

                {/* Confidence Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-emerald-400">✓ AUTHENTIC: 91.9%</span>
                    <span className="text-red-400">⚠ MANIPULATED: 8.1%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-red-950 overflow-hidden flex">
                    <div className="h-full bg-emerald-500" style={{ width: '91.9%' }} />
                    <div className="h-full bg-red-500" style={{ width: '8.1%' }} />
                  </div>
                </div>

                {/* Frame-by-frame Timeline (from the video!) */}
                <div className="p-3.5 rounded-xl bg-[#070D18] border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-200">FRAME-BY-FRAME TIMELINE</span>
                    <div className="flex items-center gap-3 text-[11px]">
                      <span className="flex items-center gap-1 text-emerald-400"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Real</span>
                      <span className="flex items-center gap-1 text-red-400"><span className="w-2 h-2 rounded-full bg-red-500" /> Manipulated</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-6 sm:grid-cols-12 gap-1 text-center pt-1 font-mono">
                    {[
                      { time: '0s', score: '0%' },
                      { time: '0.7s', score: '0%' },
                      { time: '1.5s', score: '2%' },
                      { time: '2.2s', score: '1%' },
                      { time: '3.0s', score: '12%' },
                      { time: '3.7s', score: '3%' },
                      { time: '4.4s', score: '78%', warn: true },
                      { time: '5.2s', score: '0%' },
                      { time: '5.9s', score: '1%' },
                      { time: '6.6s', score: '0%' },
                      { time: '7.3s', score: '0%' },
                      { time: '8.1s', score: '0%' }
                    ].map((frame, idx) => (
                      <div 
                        key={idx} 
                        className={`p-1.5 rounded text-[10px] border ${
                          frame.warn 
                            ? 'bg-red-950/80 border-red-500 text-red-300 font-bold' 
                            : 'bg-[#0A192F] border-slate-800 text-emerald-300'
                        }`}
                      >
                        <span className="text-[9px] text-slate-400 block">{frame.time}</span>
                        <span>{frame.score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DeepShield Footer */}
          <div className="text-center text-[10px] text-slate-500 border-t border-slate-800/80 pt-3">
            DeepShield AI • Dual-Engine Detection (ELA + Deep Learning) • For investigative use only
          </div>
        </div>

        {/* Video Scrubber & Playback Controls Bar */}
        {viewMode === 'video-demo' && (
          <div className="bg-[#0A192F] border-t border-slate-800 p-3 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold transition-colors cursor-pointer"
                title={isPlaying ? 'Pause Demo' : 'Play Demo'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={() => setPlaybackTime(0)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                title="Restart from beginning"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <span className="font-mono text-slate-300 font-medium">
                {formatTime(playbackTime)} / {formatTime(totalDuration)}
              </span>
            </div>

            {/* Scrubber Bar */}
            <div className="w-full sm:flex-1 sm:max-w-md mx-2 flex items-center">
              <input
                type="range"
                min={0}
                max={totalDuration}
                value={playbackTime}
                onChange={(e) => setPlaybackTime(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
              />
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full Video Demo Synced</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
