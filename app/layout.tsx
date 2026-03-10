import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adithya Upadhyayula",
  description: "I build at the intersection of medicine, computation, and community impact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
