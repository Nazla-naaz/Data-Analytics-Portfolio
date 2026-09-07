"use client";

import { Download, Mail } from "lucide-react";
import { profile, domains, tools, heroStats } from "@/config";
import PageHeader from "@/components/PageHeader";

export default function ForRecruitersPage() {
  return (
    <div className="px-6 md:px-12 py-14 max-w-[900px] mx-auto">
      <PageHeader
        eyebrow="RECRUITER SUMMARY"
        title="For"
        highlight="Recruiters"
        description="The quick version: who I am, what I can do, and how to reach me."
      />

      <div className="grid sm:grid-cols-4 gap-3 mb-8">
        {heroStats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-panel px-4 py-3.5">
            <div className="text-xl font-bold text-white">{s.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-panel p-6 mb-6">
        <div className="text-xs text-gray-500 mb-2">ROLE</div>
        <div className="text-white font-semibold mb-4">{profile.role}</div>
        <div className="text-xs text-gray-500 mb-2">DOMAINS</div>
        <div className="flex flex-wrap gap-2 mb-4">
          {domains.map((d) => (
            <span key={d} className="text-xs px-3 py-1 rounded-full bg-panel2 border border-border text-gray-300">
              {d}
            </span>
          ))}
        </div>
        <div className="text-xs text-gray-500 mb-2">TOOLS</div>
        <div className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <span key={t} className="text-xs px-3 py-1 rounded-full bg-panel2 border border-border text-gray-300">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        
        <a
          href={profile.socials.email}
          className="inline-flex items-center gap-2 border border-border hover:border-accent/50 transition-colors text-gray-200 text-sm px-4 py-2 rounded-lg"
        >
          <Mail size={15} /> Email Me
        </a>
      </div>
    </div>
  );
}
