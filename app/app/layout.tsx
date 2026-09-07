import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { profile } from "@/config";

// Using the system font stack (see globals.css) instead of next/font/google
// so the project builds without needing network access to Google Fonts.
// Swap in next/font/google (Inter, JetBrains Mono) any time if you'd prefer.

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-base font-sans antialiased">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 min-w-0">
            <MobileNav />
            <main className="bg-dot-grid">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
