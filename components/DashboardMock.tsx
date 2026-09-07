"use client";

import { motion } from "framer-motion";
import { dashboardMock } from "@/config";

export default function DashboardMock() {
  const max = Math.max(...dashboardMock.trend);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      className="w-full max-w-[560px] rounded-xl border border-border bg-[#0D0F14] shadow-glow overflow-hidden"
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-[#0F1116]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-3 text-[11px] text-gray-500">{dashboardMock.windowTitle}</span>
        <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-mint/10 text-mint border border-mint/20">
          Revenue Growth {dashboardMock.revenueGrowth}
        </span>
      </div>

      <div className="p-4 grid grid-cols-3 gap-3">
        <MetricTile label="Total Sales" value={dashboardMock.totalRevenue} tag="↑ 24.4%" />
        <MetricTile label="Rows Analyzed" value={dashboardMock.rowsAnalyzed} tag="SQL Server" />
        <MetricTile label="ML Accuracy" value={dashboardMock.accuracy} tag="Scikit-learn" />
      </div>

      <div className="mx-4 mb-4 rounded-lg border border-border bg-panel2 p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] text-gray-500">Revenue Trend</span>
          <span className="text-[11px] text-mint">↑ 24.3%</span>
        </div>
        <svg viewBox="0 0 300 70" className="w-full h-16" preserveAspectRatio="none">
          <polyline
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            points={dashboardMock.trend
              .map(
                (v, i) =>
                  `${(i / (dashboardMock.trend.length - 1)) * 300},${70 - (v / max) * 60}`
              )
              .join(" ")}
          />
        </svg>
      </div>

      <div className="mx-4 mb-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-border bg-panel2 p-3">
          <div className="text-[11px] text-gray-500 mb-2">Orders</div>
          <div className="flex items-end gap-1 h-10">
            {[6, 9, 5, 12, 8, 14, 10].map((v, i) => (
              <div key={i} className="flex-1 bg-accent-dim/70 rounded-sm" style={{ height: `${v * 6}%` }} />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-border bg-panel2 p-3 font-mono text-[10px] leading-snug text-gray-400 overflow-hidden whitespace-pre">
          {dashboardMock.sql}
        </div>
      </div>

      <div className="flex items-center justify-between px-4 pb-3 text-[10px] text-gray-600">
        <span>Query speed</span>
        <span className="text-accent-soft">{dashboardMock.querySpeed} avg</span>
      </div>
    </motion.div>
  );
}

function MetricTile({ label, value, tag }: { label: string; value: string; tag: string }) {
  return (
    <div className="rounded-lg border border-border bg-panel2 p-3">
      <div className="text-[10px] text-gray-500 mb-1">{label}</div>
      <div className="text-base font-bold text-white">{value}</div>
      <div className="text-[10px] text-gray-600 mt-0.5">{tag}</div>
    </div>
  );
}
