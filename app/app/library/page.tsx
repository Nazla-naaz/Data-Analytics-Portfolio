"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, BookOpen } from "lucide-react";
import { books, libraryCategories } from "@/config";
import PageHeader from "@/components/PageHeader";
import { cn } from "@/lib/utils";

export default function LibraryPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? books : books.filter((b) => b.category === active);

  return (
    <div className="px-6 md:px-12 py-14 max-w-[1200px] mx-auto">
      <PageHeader
        eyebrow="READING LIST"
        title="Books that"
        highlight="shaped my thinking."
        description="A curated shelf on analytics, statistics, behaviour, and decision-making — with my own notes."
      />

      <div className="flex flex-wrap gap-2 mb-8">
        {libraryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "text-sm px-4 py-1.5 rounded-full border transition-colors",
              active === cat
                ? "bg-accent/15 border-accent/40 text-accent-soft"
                : "border-border text-gray-400 hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="rounded-xl border border-border bg-panel p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-panel2 border border-border flex items-center justify-center">
                <BookOpen size={16} className="text-accent-soft" />
              </div>
              <span className="text-[10px] tracking-wide text-gray-500">{b.category.toUpperCase()}</span>
            </div>
            <h3 className="text-white font-semibold leading-snug mb-1">{b.title}</h3>
            <div className="text-xs text-gray-500 mb-2">by {b.author}</div>
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  size={12}
                  className={idx < b.rating ? "fill-amber text-amber" : "text-gray-700"}
                />
              ))}
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">{b.blurb}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
