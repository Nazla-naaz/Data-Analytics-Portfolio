"use client";

import { Download } from "lucide-react";
import { profile } from "@/config";
import PageHeader from "@/components/PageHeader";

export default function ResumePage() {
  return (
    <div className="px-6 md:px-12 py-14 max-w-[900px] mx-auto">
      <PageHeader
        eyebrow="CV"
        title="Resume"
        description="A quick summary of my experience, education and tools — or download the full PDF."
      />

      <div className="rounded-xl border border-border bg-panel p-6 mb-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="text-white font-semibold">{profile.name} — {profile.role}</div>
          <div className="text-sm text-gray-500">{profile.location}</div>
        </div>
        {/* TODO: replace href with a link to your hosted resume PDF (e.g. in /public) */}
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dim transition-colors text-white text-sm px-4 py-2 rounded-lg"
        >
          <Download size={15} /> Download PDF
        </a>
      </div>

      <div className="rounded-xl border border-border bg-panel p-6">
        <div className="text-xs text-gray-500 mb-1">EDUCATION</div>
        <div className="text-white font-semibold">{profile.education.degree}</div>
        <div className="text-sm text-gray-400">{profile.education.college}</div>
        <div className="text-xs text-gray-600">{profile.education.years}</div>
      </div>
    </div>
  );
}
