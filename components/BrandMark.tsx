export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg className="brand-mark__glyph" viewBox="0 0 64 42" fill="none" focusable="false">
        <path className="brand-mark__structure" d="M4 36 19.5 6h4L39 36" stroke="currentColor" strokeWidth="5.5" strokeLinejoin="bevel" />
        <path className="brand-mark__crossbar" d="M12.5 26h18" stroke="currentColor" strokeWidth="4.5" strokeLinecap="square" />
        <path className="brand-mark__structure" d="M41 18v10.5c0 5.3 2.4 8 7.5 8s7.5-2.7 7.5-8V18" stroke="currentColor" strokeWidth="5.5" strokeLinecap="square" strokeLinejoin="round" />
        <circle className="brand-mark__atom" cx="57.5" cy="7.5" r="2.7" />
      </svg>
      <span className="brand-mark__index">79</span>
    </span>
  );
}
