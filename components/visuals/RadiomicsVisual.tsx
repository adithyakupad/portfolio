export function RadiomicsVisual() {
  return (
    <div className="visual visual--radiomics" role="img" aria-label="Abstract radiomics-inspired geometry; not a medical image or study result">
      <span className="visual__label">ABSTRACT IMAGING STUDY / NOT PATIENT DATA</span>
      <svg viewBox="0 0 800 420" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs><radialGradient id="radiomics-field"><stop stopColor="#FF0846" stopOpacity=".52" /><stop offset=".5" stopColor="#9B0721" stopOpacity=".27" /><stop offset="1" stopColor="#0A0A0A" stopOpacity="0" /></radialGradient></defs>
        <circle cx="400" cy="210" r="190" fill="url(#radiomics-field)" />
        <circle cx="400" cy="210" r="155" className="radiomics-visual__ring" />
        <circle cx="400" cy="210" r="102" className="radiomics-visual__ring" />
        <path className="radiomics-visual__contour" d="M286 195c-22-62 40-103 102-111 76-9 151 43 137 114-10 54-65 109-136 105-65-3-119-47-103-108Z" />
        <path className="radiomics-visual__contour" d="M337 182c24-40 94-58 137-15 39 39 6 91-43 107-52 18-111-37-94-92Z" />
        <path className="radiomics-visual__crosshair" d="M400 32V388 M222 210H578" />
      </svg>
      <span className="visual__axis">RADIOMICS / CONCEPT</span>
    </div>
  );
}
