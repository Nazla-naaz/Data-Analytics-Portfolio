"use client";

import { motion } from "framer-motion";
import { frameworkSteps } from "@/config";
import PageHeader from "@/components/PageHeader";

export default function FrameworkPage() {
  return (
    <div className="px-6 md:px-12 py-14 max-w-[900px] mx-auto">
      <PageHeader
        eyebrow="METHODOLOGY"
        title="My Analytics"
        highlight="Framework"
        description="A rigorous, repeatable 10-step process that transforms business questions into data-driven decisions. This is how I approach every project — from a simple dashboard request to a full end-to-end analytics engagement."
      />

      <div className="space-y-4">
        {frameworkSteps.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
            className="rounded-xl border border-border bg-panel p-5 md:p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent-soft text-xs font-semibold shrink-0">
                {step.step}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white mb-1.5">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{step.body}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-[11px] text-gray-600 mb-1.5">OUTPUTS</div>
                    <div className="flex flex-wrap gap-1.5">
                      {step.outputs.map((o) => (
                        <span key={o} className="text-[11px] px-2 py-1 rounded-md bg-panel2 border border-border text-gray-300">
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-600 mb-1.5">TOOLS</div>
                    <div className="flex flex-wrap gap-1.5">
                      {step.tools.map((t) => (
                        <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-accent/5 border border-accent/20 text-accent-soft">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
