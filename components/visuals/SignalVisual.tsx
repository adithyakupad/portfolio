const waveform = Array.from({ length: 160 }, (_, index) => {
  const x = index * 5;
  const envelope = Math.exp(-Math.pow((x - 400) / 190, 2));
  const y = 150 + Math.sin(index * 0.66) * 43 * envelope + Math.sin(index * 1.8) * 13 * envelope;
  return `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
}).join(" ");

export function SignalVisual() {
  return (
    <div className="visual visual--signal" role="img" aria-label="Illustrative EMG-style waveform; not recorded signal data">
      <span className="visual__label">ILLUSTRATIVE SIGNAL / NOT MEASURED DATA</span>
      <svg viewBox="0 0 800 300" preserveAspectRatio="none" aria-hidden="true">
        <path className="signal-visual__baseline" d="M0 150 H800" />
        <path className="signal-visual__trace" d={waveform} />
      </svg>
      <span className="visual__axis">INPUT / EMG</span>
    </div>
  );
}
