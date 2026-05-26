import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HabitSnap – Photo-verify habit streaks with AI",
  description: "Snap photos of completed habits, let AI verify authenticity, and maintain accountability streaks. Built for fitness enthusiasts and habit coaches."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6846b2f0-c8ab-4aa6-9a52-5a420bf7a078"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
