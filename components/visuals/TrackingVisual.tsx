export function TrackingVisual() {
  return (
    <div className="visual visual--tracking" role="img" aria-label="Illustrative tracking boxes and trajectory; not a live detection result">
      <span className="visual__label">CONCEPT VISUAL / NOT A DETECTION RESULT</span>
      <svg viewBox="0 0 800 420" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <path className="tracking-visual__grid" d="M0 105H800 M0 210H800 M0 315H800 M160 0V420 M320 0V420 M480 0V420 M640 0V420" />
        <rect className="tracking-visual__target" x="315" y="135" width="135" height="190" rx="4" />
        <rect className="tracking-visual__target tracking-visual__target--secondary" x="555" y="82" width="91" height="126" rx="4" />
        <path className="tracking-visual__path" d="M72 348 C220 295 274 309 384 228 S558 145 690 76" />
        <circle cx="384" cy="228" r="5" fill="currentColor" />
      </svg>
      <span className="visual__axis">VISION → HAPTICS</span>
    </div>
  );
}
