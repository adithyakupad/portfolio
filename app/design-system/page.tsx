import { notFound } from "next/navigation";
import { FrostedPanel } from "@/components/glass/FrostedPanel";
import { LiquidGlass } from "@/components/glass/LiquidGlass";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { DisplayText } from "@/components/typography/DisplayText";
import { SectionLabel } from "@/components/typography/SectionLabel";
import { RedAtmosphere } from "@/components/visuals/RedAtmosphere";
import { SignalVisual } from "@/components/visuals/SignalVisual";
import { TrackingVisual } from "@/components/visuals/TrackingVisual";

const swatches = [
  ["Gym red", "var(--gym-red)", "#9B0721"],
  ["Bright crimson", "var(--bright-crimson)", "#FF0846"],
  ["Fossil", "var(--fossil)", "#E1DBC1"],
  ["Black", "var(--black)", "#0A0A0A"],
  ["White", "var(--white)", "#FFFFFF"],
  ["Muted fossil", "var(--fossil-muted)", "derived"],
  ["Dark crimson", "var(--crimson-dark)", "derived"],
  ["Pale rose", "var(--rose-pale)", "derived"],
];

export default function DesignSystemPage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <main className="design-system">
      <ScrollProgress />
      <section className="editorial-container design-system__intro"><SectionLabel>DEVELOPMENT ONLY / DESIGN FOUNDATION</SectionLabel><DisplayText scale="large">Materials &amp;<br /><em>motion.</em></DisplayText><p>This route previews the design language before the final homepage is built.</p></section>

      <section className="editorial-container design-system__section"><SectionLabel>01 / COLOR</SectionLabel><h2 className="type-section">A restrained palette.</h2><div className="swatch-grid">{swatches.map(([name, value, code]) => <div className="swatch" key={name}><div className="swatch__field" style={{ background: value }} /><div><span>{name}</span><code>{code}</code></div></div>)}</div></section>

      <section className="editorial-container design-system__section"><SectionLabel>02 / TYPOGRAPHY</SectionLabel><h2 className="sr-only">Typography</h2><div className="type-specimens"><DisplayText as="p" scale="hero">Biology<span className="accent-dot">.</span></DisplayText><DisplayText as="p" scale="large">Machines.</DisplayText><p className="type-body">I build systems at the boundary of biology and machines.</p><p className="type-serif">Everything between.</p><p className="type-caption">CAPTION / INFORMATION SURFACE</p><p className="type-meta">METADATA / GEORGIA TECH · 2026</p></div></section>

      <section className="design-system__material-stage"><RedAtmosphere /><div className="editorial-container design-system__section design-system__material-content"><SectionLabel>03 / MATERIAL</SectionLabel><DisplayText as="h2" scale="section">Two forms<br />of glass.</DisplayText><div className="material-comparison"><FrostedPanel tone="red"><span className="type-meta">FROST / INFORMATION</span><h3>Diffuse by design.</h3><p>Captions, metadata, and notes sit on the softer material.</p></FrostedPanel><div className="material-comparison__controls"><LiquidGlass tone="red" as="button">LIQUID / CONTROL ↗</LiquidGlass><LiquidGlass tone="light" as="button">LIGHT VARIANT ↗</LiquidGlass><LiquidGlass tone="dark" as="button">DARK VARIANT ↗</LiquidGlass></div></div></div></section>

      <section className="editorial-container design-system__section"><SectionLabel>04 / MOTION</SectionLabel><Reveal kind="mask"><DisplayText as="h2" scale="section">One motion<br />grammar.</DisplayText></Reveal><Reveal stagger className="motion-specimens"><RevealItem><div className="motion-specimen">MASKED REVEAL</div></RevealItem><RevealItem><div className="motion-specimen">STAGGERED ENTRANCE</div></RevealItem><RevealItem><div className="motion-specimen">VERTICAL RISE</div></RevealItem></Reveal><Parallax distance={38} className="motion-parallax"><span>SCROLL / PARALLAX</span><span aria-hidden="true">↗</span></Parallax></section>

      <section className="editorial-container design-system__section"><SectionLabel>05 / ILLUSTRATIVE MEDIA</SectionLabel><div className="visual-specimens"><SignalVisual /><TrackingVisual /></div><p className="type-caption">These are design placeholders. They are never presented as experimental data.</p></section>
    </main>
  );
}
