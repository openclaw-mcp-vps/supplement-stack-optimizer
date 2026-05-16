import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supplement Stack Optimizer",
  description: "Optimize supplement combinations for your health goals. Get personalized stacks with timing, dosages, and interaction warnings."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2a4d5bd4-0d11-41c7-99cb-7a154cec9dec"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
