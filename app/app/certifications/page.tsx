"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/config";
import PageHeader from "@/components/PageHeader";

export default function CertificationsPage() {
  return (
    <div className="px-6 md:px-12 py-14 max-w-[1100px] mx-auto">
      <div className="text-xs text-gray-600 mb-4">Home &gt; Certifications</div>
      <PageHeader
        eyebrow="CREDENTIALS"
        title="Certifications"
        description="Professional credentials and ongoing learning — each one backed by real project work and assessments."
      />

      <div className="text-sm text-mint mb-5">
        ✓ Completed ({certifications.completed.length})
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {certifications.completed.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-xl border border-border bg-panel p-5"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center mb-4">
              <Award size={18} className="text-accent-soft" />
            </div>
            <div className="text-[11px] tracking-wide text-gray-500 mb-1">{c.issuer.toUpperCase()}</div>
            <h3 className="text-lg font-semibold text-white mb-1">{c.title}</h3>
            <div className="text-xs text-gray-500 mb-4">{c.meta}</div>
            <div className="flex flex-wrap gap-1.5">
              {c.tags.map((t) => (
                <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-panel2 border border-border text-gray-400">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
