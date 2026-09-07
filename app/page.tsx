"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { profile, heroStats, domains, tools, projects } from "@/config";
import StatCard from "@/components/StatCard";
import DashboardMock from "@/components/DashboardMock";

export default function HomePage() {
  return (
    <div className="px-6 md:px-12 py-14 max-w-[1400px] mx-auto">
      <section className="grid lg:grid-cols-2 gap-14 items-center min-h-[70vh]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border border-accent/40 shrink-0">
              <Image
                src={profile.photo}
                alt={profile.name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-wrap gap-2">
            <span className="text-[11px] px-3 py-1 rounded-full border border-border bg-panel text-mint">
              ● Open to new opportunities
            </span>
            <span className="text-[11px] px-3 py-1 rounded-full border border-border bg-panel text-gray-400">
              {domains.join(" & ")}
            </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl md:text-6xl font-bold text-white leading-[1.08] text-balance"
          >
            Turning data into{" "}
            <span className="text-accent-soft">insights</span> that drive
            better business decisions.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-400 mt-6 text-base md:text-lg max-w-xl leading-relaxed"
          >
            I'm <span className="text-white font-medium">{profile.name}</span>, a Data
            Analyst who transforms raw, messy data into boardroom-ready insight — using{" "}
            <span className="text-white">SQL, Python, Power BI, Excel</span> and modern data
            visualisation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3 mt-8"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dim transition-colors text-white text-sm font-medium px-5 py-2.5 rounded-lg"
            >
              View Case Studies <ArrowRight size={15} />
            </Link>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border hover:border-accent/50 transition-colors text-gray-200 text-sm font-medium px-5 py-2.5 rounded-lg"
            >
              <Github size={15} /> GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border hover:border-accent/50 transition-colors text-gray-200 text-sm font-medium px-5 py-2.5 rounded-lg"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 max-w-lg"
          >
            {heroStats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <DashboardMock />
        </div>
      </section>

      <section id="insights" className="mt-24">
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="text-accent-soft text-xs tracking-wide mb-2">FEATURED WORK</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Recent case studies</h2>
          </div>
          <Link href="/work" className="text-sm text-gray-400 hover:text-accent-soft inline-flex items-center gap-1">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group rounded-xl border border-border bg-panel overflow-hidden hover:border-accent/40 transition-colors"
            >
              <div className={`h-32 bg-gradient-to-br ${p.coverGradient} flex items-end p-4`}>
                <span className="text-[11px] px-2 py-1 rounded-md bg-black/40 text-gray-200 border border-white/10">
                  {p.category}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-accent-soft">{p.headlineStat.value}</span>
                  <span className="text-[11px] text-gray-600">{p.year}</span>
                </div>
                <h3 className="text-white font-semibold group-hover:text-accent-soft transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1.5 line-clamp-2">{p.summary}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.tools.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-panel2 border border-border text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-2xl border border-border bg-panel p-6 md:p-8">
        <div className="text-accent-soft text-xs tracking-wide mb-2">TOOLKIT</div>
        <h2 className="text-2xl font-bold text-white mb-5">Tools I work with</h2>
        <div className="flex flex-wrap gap-2.5">
          {tools.map((t) => (
            <span key={t} className="text-sm px-3.5 py-1.5 rounded-lg border border-border bg-panel2 text-gray-300">
              {t}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
