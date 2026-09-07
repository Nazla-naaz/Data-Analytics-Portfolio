"use client";

import { motion } from "framer-motion";

export default function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-10"
    >
      {eyebrow && (
        <div className="text-accent-soft text-xs tracking-wide mb-3">{eyebrow}</div>
      )}
      <h1 className="text-3xl md:text-[2.6rem] font-bold text-white leading-tight text-balance">
        {title} {highlight && <span className="text-accent-soft">{highlight}</span>}
      </h1>
      {description && (
        <p className="text-gray-400 mt-3 max-w-2xl leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
