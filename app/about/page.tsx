"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Github, Mail } from "lucide-react";
import { profile, portfolioGrowth } from "@/config";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <div className="px-6 md:px-12 py-14 max-w-[1200px] mx-auto">
      <PageHeader eyebrow="ABOUT ME" title="The analyst behind" highlight="the dashboards" />

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10">
        <div>
          {profile.aboutStory.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-gray-400 leading-relaxed mb-4"
            >
              {p}
            </motion.p>
          ))}

          <div className="mt-6 rounded-xl border border-border bg-panel p-5">
            <div className="text-xs text-gray-500 mb-1">EDUCATION</div>
            <div className="text-white font-semibold">{profile.education.degree}</div>
            <div className="text-sm text-gray-400">{profile.education.college}</div>
            <div className="text-xs text-gray-600 mt-1">{profile.education.years}</div>
          </div>

          <div className="space-y-3 mt-6">
            {profile.aboutBullets.map((b) => (
              <div key={b} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-mint mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">{b}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-8">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border hover:border-accent/50 transition-colors text-gray-200 text-sm px-4 py-2 rounded-lg"
            >
              <Github size={15} /> GitHub
            </a>
            <a
              href={profile.socials.email}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dim transition-colors text-white text-sm px-4 py-2 rounded-lg"
            >
              <Mail size={15} /> Get in Touch
            </a>
          </div>
        </div>

        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-border bg-panel p-6 flex flex-col items-center text-center"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-accent/40 shadow-glow mb-4">
              <Image
                src={profile.photo}
                alt={profile.name}
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="text-white font-semibold">{profile.name}</div>
            <div className="text-xs text-gray-400 mt-0.5">{profile.role}</div>
          </motion.div>

          <div className="rounded-xl border border-border bg-panel p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-500">Portfolio growth</span>
              <span className="text-xs text-mint">{portfolioGrowth.growthRate}</span>
            </div>
            <div className="flex items-end gap-1.5 h-16">
              {portfolioGrowth.trend.map((v, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-accent-dim to-accent-soft"
                  style={{ height: `${(v / Math.max(...portfolioGrowth.trend)) * 100}%` }}
                />
              ))}
            </div>
            <div className="text-xs text-gray-600 mt-3">Score: {portfolioGrowth.score}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
