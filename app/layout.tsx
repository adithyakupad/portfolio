import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/Footer";
import { SiteNav } from "@/components/SiteNav";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Adithya Upadhyayula — Biology × Machines",
    template: "%s — Adithya Upadhyayula",
  },
  description:
    "Adithya Upadhyayula is a biomedical engineer at Georgia Tech working across medical robotics and biological computing.",
  openGraph: {
    title: "Adithya Upadhyayula — Biology × Machines",
    description:
      "Biomedical engineering at the interface of living systems and machines.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={instrumentSerif.variable}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteNav />
        <div id="main-content" tabIndex={-1}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
