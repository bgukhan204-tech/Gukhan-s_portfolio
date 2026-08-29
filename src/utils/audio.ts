// Web Audio API synthesized subtle cyber feedback sounds

class CyberSoundEngine {
  private ctx: AudioContext | null = null;
  private enabled: boolean = false;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  public toggleSound(state?: boolean): boolean {
    this.enabled = state !== undefined ? state : !this.enabled;
    if (this.enabled) {
      this.initCtx();
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      this.playBeep(880, 0.05, 'sine', 0.04);
    }
    return this.enabled;
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public playBootBeep(freq = 440, duration = 0.06) {
    if (!this.enabled) return;
    this.playBeep(freq, duration, 'triangle', 0.03);
  }

  public playClick(freq = 1200) {
    if (!this.enabled) return;
    this.playBeep(freq, 0.03, 'sine', 0.02);
  }

  public playSuccess() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    
    // Two-tone chime
    this.playToneAt(now, 523.25, 0.08, 'sine', 0.04); // C5
    this.playToneAt(now + 0.08, 659.25, 0.12, 'sine', 0.04); // E5
    this.playToneAt(now + 0.16, 783.99, 0.2, 'sine', 0.05); // G5
  }

  public playPulse() {
    if (!this.enabled) return;
    this.playBeep(240, 0.15, 'sawtooth', 0.02);
  }

  private playToneAt(time: number, freq: number, duration: number, type: OscillatorType, gainVal: number) {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, time);

      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(gainVal, time + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(time);
      osc.stop(time + duration);
    } catch {
      // Audio context might be restricted before interaction
    }
  }

  private playBeep(freq: number, duration: number, type: OscillatorType = 'sine', maxGain = 0.03) {
    this.initCtx();
    if (!this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;

      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(maxGain, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + duration);
    } catch {
      // ignore
    }
  }
}

export const cyberAudio = new CyberSoundEngine();
