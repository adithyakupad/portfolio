import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adithya Upadhyayula | Portfolio",
  description: "Portfolio rebuild in progress.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
