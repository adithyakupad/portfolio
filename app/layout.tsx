import type { Metadata } from "next";
import { Instrument_Serif, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { SiteNav } from "@/components/SiteNav";
import { ScrollReveals } from "@/components/ScrollReveals";
import { FrostedLight } from "@/components/FrostedLight";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Adithya Upadhyayula — Biology × Machines",
    template: "%s — Adithya Upadhyayula",
  },
  description:
    "Medical robotics, biological computing, and the systems between. Adithya Upadhyayula at Georgia Tech.",
  openGraph: {
    title: "Adithya Upadhyayula — Biology × Machines",
    description:
      "Biomedical engineering at the interface of living systems and machines.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${geistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteNav />
        <ScrollReveals />
        <FrostedLight />
        <div id="main-content" tabIndex={-1}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
