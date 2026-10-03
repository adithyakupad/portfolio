type ProjectVisualProps = {
  kind: "limbo" | "instinct" | "jarvis";
  className?: string;
  idPrefix?: string;
};

export function HeroAtmosphere() {
  return (
    <div className="hero-atmosphere" aria-hidden="true">
      <div className="hero-atmosphere__light" />
      <svg className="hero-atmosphere__svg" viewBox="0 0 1300 920" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="heroVein" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#250309" stopOpacity="0" />
            <stop offset=".42" stopColor="#FF0846" stopOpacity=".48" />
            <stop offset=".57" stopColor="#ffb8b2" stopOpacity=".87" />
            <stop offset=".66" stopColor="#9B0721" stopOpacity=".42" />
            <stop offset="1" stopColor="#18070b" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="heroCore">
            <stop offset="0" stopColor="#f2a1a0" stopOpacity=".65" />
            <stop offset=".3" stopColor="#FF0846" stopOpacity=".5" />
            <stop offset=".7" stopColor="#590515" stopOpacity=".4" />
            <stop offset="1" stopColor="#590515" stopOpacity="0" />
          </radialGradient>
          <filter id="heroBlur"><feGaussianBlur stdDeviation="34" /></filter>
          <filter id="heroSoft"><feGaussianBlur stdDeviation="8" /></filter>
        </defs>
        <ellipse cx="985" cy="455" rx="420" ry="660" fill="url(#heroCore)" filter="url(#heroBlur)" />
        <g className="hero-atmosphere__membranes" fill="none">
          <path d="M813-90 C580 120 1050 255 776 465 S1024 724 793 1010" stroke="url(#heroVein)" strokeWidth="190" filter="url(#heroBlur)" />
          <path d="M1086-80 C831 163 1214 248 1002 448 S1136 739 1098 1020" stroke="url(#heroVein)" strokeWidth="112" filter="url(#heroSoft)" opacity=".8" />
          <path d="M594-90 C809 155 487 296 730 463 S568 779 676 1020" stroke="url(#heroVein)" strokeWidth="72" filter="url(#heroBlur)" opacity=".55" />
          <path d="M826-80 C590 190 1054 235 792 483 S1060 732 799 1000" stroke="#ffd1d5" strokeWidth="2" opacity=".42" />
          <path d="M1121-65 C857 149 1242 267 1033 457 S1169 725 1117 982" stroke="#FF718F" strokeWidth="1.5" opacity=".4" />
          <path d="M918-34 C1200 137 758 320 1089 478 S852 750 1043 991" stroke="#ffe1d7" strokeWidth="1" opacity=".22" />
        </g>
        <g opacity=".22" fill="none" stroke="#e5a4a3">
          <ellipse cx="1000" cy="461" rx="299" ry="395" transform="rotate(-13 1000 461)" />
          <ellipse cx="1000" cy="461" rx="332" ry="420" transform="rotate(-13 1000 461)" />
          <ellipse cx="1000" cy="461" rx="372" ry="452" transform="rotate(-13 1000 461)" />
        </g>
      </svg>
      <div className="hero-atmosphere__grain" />
    </div>
  );
}

function SignalVisual({ idPrefix }: { idPrefix: string }) {
  return (
    <div className="visual visual--limbo" aria-hidden="true">
      <div className="visual__grid" />
      <svg viewBox="0 0 900 600" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id={`${idPrefix}-trace`} x1="0" x2="1">
            <stop stopColor="#E1DBC1" stopOpacity=".08" />
            <stop offset=".48" stopColor="#E1DBC1" />
            <stop offset="1" stopColor="#FF0846" />
          </linearGradient>
          <filter id={`${idPrefix}-glow`}><feGaussianBlur stdDeviation="8" /></filter>
        </defs>
        <g className="visual__engineering" fill="none" stroke="#E1DBC1" strokeWidth="1.2">
          <path d="M650 505 L650 355 Q650 318 682 309 L708 304 L709 196 Q709 166 727 164 Q746 164 746 195 L746 287 L761 282 L769 151 Q770 129 787 129 Q807 130 805 153 L798 278 L813 280 L825 176 Q827 156 845 158 Q862 161 857 183 L844 292 L866 304 L877 245 Q884 225 899 232" />
          <path d="M650 391 Q686 369 712 393 L745 431 L766 388 Q782 373 797 389 L809 431 Q821 448 844 429 L887 361" />
          <path d="M650 505 Q748 541 851 490 L899 390" />
          <path d="M676 383 L676 315 M727 166 L727 293 M789 133 L789 281 M844 160 L836 287" opacity=".45" />
          <circle cx="674" cy="386" r="5" fill="#FF0846" stroke="none" />
          <circle cx="765" cy="389" r="5" fill="#FF0846" stroke="none" />
          <circle cx="843" cy="429" r="5" fill="#FF0846" stroke="none" />
        </g>
        <path className="signal-trace signal-trace--glow" d="M0 325 L52 325 L67 321 L78 326 L92 323 L109 340 L119 294 L132 356 L144 311 L157 324 L182 322 L202 327 L218 289 L232 347 L247 319 L274 323 L295 326 L313 308 L326 343 L338 321 L363 324 L388 324 L408 313 L423 334 L436 322 L458 326 L478 292 L493 352 L505 309 L519 326 L540 323 L566 327 L580 318 L592 326 L615 324" fill="none" stroke="#FF0846" strokeWidth="18" opacity=".34" filter={`url(#${idPrefix}-glow)`} />
        <path className="signal-trace" d="M0 325 L52 325 L67 321 L78 326 L92 323 L109 340 L119 294 L132 356 L144 311 L157 324 L182 322 L202 327 L218 289 L232 347 L247 319 L274 323 L295 326 L313 308 L326 343 L338 321 L363 324 L388 324 L408 313 L423 334 L436 322 L458 326 L478 292 L493 352 L505 309 L519 326 L540 323 L566 327 L580 318 L592 326 L615 324" fill="none" stroke={`url(#${idPrefix}-trace)`} strokeWidth="2.5" />
        <path d="M615 324 H678" stroke="#FF0846" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="615" cy="324" r="5" fill="#FF0846" />
      </svg>
      <div className="visual__label micro">INPUT / EMG SIGNAL</div>
      <div className="visual__label visual__label--right micro">OUTPUT / PHYSICAL CONTROL</div>
    </div>
  );
}

function InstinctVisual() {
  return (
    <div className="visual visual--instinct" aria-hidden="true">
      <div className="visual__grid" />
      <svg viewBox="0 0 900 600" preserveAspectRatio="xMidYMid meet">
        <g fill="none" stroke="#E1DBC1" opacity=".2">
          <circle cx="445" cy="292" r="88" />
          <circle cx="445" cy="292" r="164" />
          <circle cx="445" cy="292" r="246" />
          <circle cx="445" cy="292" r="322" />
          <path d="M0 292 H900 M445 0 V600" />
        </g>
        <g fill="none" stroke="#E1DBC1" strokeWidth="1.5">
          <rect className="tracking-frame tracking-frame--one" x="174" y="160" width="164" height="281" rx="1" opacity=".7" />
          <rect className="tracking-frame tracking-frame--two" x="624" y="118" width="139" height="247" rx="1" opacity=".7" />
          <path d="M254 236 a23 23 0 1 0 0-46 a23 23 0 1 0 0 46 M222 296 Q254 242 286 296 V368 H222Z" opacity=".55" />
          <path d="M694 193 a20 20 0 1 0 0-40 a20 20 0 1 0 0 40 M668 248 Q694 205 721 248 V319 H668Z" opacity=".55" />
        </g>
        <path className="trajectory-trace" d="M283 371 Q453 464 667 259" fill="none" stroke="#FF0846" strokeWidth="3" strokeDasharray="6 9" />
        <circle cx="445" cy="292" r="7" fill="#FF0846" />
        <circle cx="667" cy="259" r="7" fill="#FF0846" />
        <path d="M436 283 L445 292 L454 283 M659 248 L667 259 L680 257" fill="none" stroke="#E1DBC1" strokeWidth="2" />
      </svg>
      <div className="visual__label micro">FIELD / PERCEPTION</div>
      <div className="visual__label visual__label--right micro">VECTOR / HAPTIC RESPONSE</div>
    </div>
  );
}

function JarvisVisual() {
  return (
    <div className="visual visual--jarvis" aria-hidden="true">
      <div className="visual__grid" />
      <span className="visual--jarvis__letter">J</span>
      <span className="visual--jarvis__orbit visual--jarvis__orbit--one" />
      <span className="visual--jarvis__orbit visual--jarvis__orbit--two" />
      <div className="visual__label micro">ENTRY / 003</div>
      <div className="visual__label visual__label--right micro">DOCUMENTATION FORTHCOMING</div>
    </div>
  );
}

export function ProjectVisual({ kind, className = "", idPrefix = "project" }: ProjectVisualProps) {
  return (
    <div className={`project-visual ${className}`}>
      {kind === "limbo" && <SignalVisual idPrefix={idPrefix} />}
      {kind === "instinct" && <InstinctVisual />}
      {kind === "jarvis" && <JarvisVisual />}
    </div>
  );
}

export function BiologicalVisual() {
  return (
    <div className="bio-visual" aria-hidden="true">
      <svg viewBox="0 0 900 900" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="bioMembrane">
            <stop stopColor="#d83b4f" stopOpacity=".1" />
            <stop offset=".48" stopColor="#b61731" stopOpacity=".34" />
            <stop offset=".75" stopColor="#E1DBC1" stopOpacity=".1" />
            <stop offset="1" stopColor="#2a030a" stopOpacity="0" />
          </radialGradient>
          <filter id="bioBlur"><feGaussianBlur stdDeviation="24" /></filter>
        </defs>
        <ellipse cx="462" cy="430" rx="370" ry="344" fill="url(#bioMembrane)" filter="url(#bioBlur)" />
        <g fill="none" stroke="#efb2b8">
          <path className="bio-network-line" d="M178 398 C190 226 325 119 474 132 C659 145 751 278 737 451 C727 629 606 745 451 739 C276 730 162 603 178 398Z" opacity=".47" />
          <path className="bio-network-line bio-network-line--two" d="M222 404 C229 270 347 170 478 173 C631 180 698 305 693 452 C685 590 588 692 455 687 C318 683 209 566 222 404Z" opacity=".22" />
          <path className="bio-network-line bio-network-line--three" d="M278 410 C279 323 367 229 476 232 C580 239 642 336 638 447 C631 551 549 628 455 625 C357 621 270 531 278 410Z" opacity=".2" />
          <path d="M306 317 C413 392 484 345 605 287 M284 488 C395 447 495 509 667 531 M375 197 C343 326 392 451 294 578 M594 226 C538 357 601 480 551 666" opacity=".3" />
        </g>
        <g fill="#f5d1d5">
          <circle cx="306" cy="317" r="4" /><circle cx="605" cy="287" r="4" />
          <circle cx="667" cy="531" r="4" /><circle cx="294" cy="578" r="4" />
          <circle cx="551" cy="666" r="4" />
        </g>
      </svg>
    </div>
  );
}

export function ResearchVisual() {
  return (
    <div className="research-visual" role="img" aria-label="Conceptual illustration of a coronary plaque cross-section and computational imaging grid; not patient data">
      <div className="research-visual__grid" />
      <svg viewBox="0 0 1000 680" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <radialGradient id="plaqueCore">
            <stop stopColor="#101010" />
            <stop offset=".4" stopColor="#21201f" />
            <stop offset=".56" stopColor="#FF0846" />
            <stop offset=".72" stopColor="#590515" />
            <stop offset=".89" stopColor="#242020" />
            <stop offset="1" stopColor="#0b0b0b" />
          </radialGradient>
          <filter id="plaqueSoft"><feGaussianBlur stdDeviation="6" /></filter>
        </defs>
        <ellipse cx="500" cy="340" rx="280" ry="263" fill="url(#plaqueCore)" opacity=".88" />
        <path d="M330 335 C341 219 435 167 530 178 C642 190 693 277 667 381 C646 475 555 524 462 500 C373 479 316 422 330 335Z" fill="#100f0f" />
        <path d="M326 336 C341 219 434 165 530 178 C642 190 693 277 667 381 C646 475 555 524 462 500 C373 479 316 422 326 336Z" fill="none" stroke="#f0d6d2" strokeWidth="2" opacity=".68" />
        <path d="M263 298 C279 148 400 70 545 94 C692 118 780 249 739 416 C699 561 565 630 427 589 C304 551 242 448 263 298Z" fill="none" stroke="#FF0846" strokeWidth="18" opacity=".3" filter="url(#plaqueSoft)" />
        <path d="M263 298 C279 148 400 70 545 94 C692 118 780 249 739 416 C699 561 565 630 427 589 C304 551 242 448 263 298Z" fill="none" stroke="#d7a7a8" strokeWidth="1" opacity=".62" />
        <g fill="none" stroke="#E1DBC1" opacity=".38">
          <path d="M500 60 V154 M500 522 V622 M166 340 H300 M692 340 H834" />
          <circle cx="500" cy="340" r="300" strokeDasharray="2 14" />
        </g>
        <g fill="#E1DBC1">
          <circle cx="500" cy="60" r="3" /><circle cx="166" cy="340" r="3" /><circle cx="834" cy="340" r="3" />
        </g>
      </svg>
      <span className="research-visual__annotation micro">MORPHOLOGY / SIGNAL / OUTCOME</span>
      <span className="research-visual__disclaimer micro">CONCEPTUAL VISUALIZATION · NOT PATIENT DATA</span>
    </div>
  );
}
