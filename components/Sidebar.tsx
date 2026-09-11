"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Briefcase,
  Lightbulb,
  BookOpen,
  Award,
  GitBranch,
  User,
  FileText,
  Mail,
  Users,
} from "lucide-react";
import { navigation, profile, portfolioGrowth } from "@/config";
import { cn } from "@/lib/utils";

const icons: Record<string, React.ElementType> = {
  Home: LayoutGrid,
  Work: Briefcase,
  Insights: Lightbulb,
  Library: BookOpen,
  Certifications: Award,
  Framework: GitBranch,
  About: User,
  Resume: FileText,
  Contact: Mail,
  "For Recruiters": Users,
};

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-[248px] lg:shrink-0 border-r border-border bg-[#0C0D11] h-screen sticky top-0 px-4 py-5">
      <Link href="/" className="flex items-center gap-2.5 px-2 mb-8">
        <div className="w-9 h-9 rounded-full overflow-hidden border border-accent/30 shrink-0">
          <Image
            src={profile.photo}
            alt={profile.name}
            width={36}
            height={36}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-sm font-semibold text-white leading-tight">
            {profile.displayName}
          </div>
          <div className="text-[10px] text-gray-500 tracking-wide leading-tight">
            DATA ANALYST
          </div>
        </div>
      </Link>

      <div className="text-[10px] tracking-[0.15em] text-gray-600 px-2 mb-2">
        NAVIGATION
      </div>

      <nav className="flex-1 flex flex-col gap-0.5">
        {navigation.map((item) => {
          const Icon = icons[item.label] ?? LayoutGrid;
          const active =
            item.href === "/"
              ? pathname === "/"
              : item.href.startsWith("/#")
              ? false
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                active
                  ? "bg-accent/10 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon
                size={16}
                className={active ? "text-accent-soft" : "text-gray-500 group-hover:text-accent-soft"}
              />
              <span>{item.label}</span>
              {active && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-soft" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-4 rounded-xl border border-border bg-panel p-3.5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] text-gray-500 tracking-wide">PORTFOLIO</span>
          <span className="text-[11px] text-gray-600">↗</span>
        </div>
        <div className="flex items-end gap-1 h-10 mb-2.5">
          {portfolioGrowth.trend.map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-accent-dim to-accent-soft"
              style={{ height: `${(v / Math.max(...portfolioGrowth.trend)) * 100}%` }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-mint">{portfolioGrowth.growthRate}</div>
            <div className="text-[10px] text-gray-500">Growth rate</div>
          </div>
          <div className="relative w-9 h-9">
            <svg viewBox="0 0 36 36" className="w-9 h-9 -rotate-90">
              <circle cx="18" cy="18" r="15" fill="none" stroke="#22262F" strokeWidth="3" />
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeDasharray={`${2 * Math.PI * 15}`}
                strokeDashoffset={`${2 * Math.PI * 15 * (1 - 0.78)}`}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[9px] text-gray-300 font-medium">
              78%
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
