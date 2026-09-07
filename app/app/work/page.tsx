"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/config";
import PageHeader from "@/components/PageHeader";

export default function WorkPage() {
  return (
    <div className="px-6 md:px-12 py-14 max-w-[1400px] mx-auto">
      <PageHeader
        eyebrow="CASE STUDIES"
        title="The"
        highlight="Observatory"
        description="End-to-end analyses — from raw data to executive decision. Every project follows a rigorous case study structure."
      />

      <div className="text-sm text-gray-500 mb-6">{projects.length} projects found</div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <Link
              href={`/work/${p.slug}`}
              className="group block rounded-xl border border-border bg-panel overflow-hidden hover:border-accent/40 transition-colors h-full"
            >
              <div className={`h-36 bg-gradient-to-br ${p.coverGradient} flex flex-col justify-between p-4`}>
                <span className="text-[11px] w-fit px-2 py-1 rounded-md bg-black/40 text-gray-200 border border-white/10">
                  {p.category}
                </span>
                <span className="text-lg font-bold text-white">{p.headlineStat.value}</span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">{p.domain}</span>
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}
