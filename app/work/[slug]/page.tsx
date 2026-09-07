import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/config";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="px-6 md:px-12 py-14 max-w-[900px] mx-auto">
      <Link href="/work" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-accent-soft mb-8">
        <ArrowLeft size={14} /> Back to Work
      </Link>

      <div className={`rounded-2xl h-40 md:h-56 bg-gradient-to-br ${project.coverGradient} mb-8 flex items-end p-6`}>
        <span className="text-xs px-3 py-1 rounded-full bg-black/40 text-gray-200 border border-white/10">
          {project.category}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-gray-500">
        <span>{project.domain}</span>
        <span>·</span>
        <span>{project.year}</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h1>
      <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">{project.summary}</p>

      <div className="flex flex-wrap gap-2 mb-10">
        {project.tools.map((t) => (
          <span key={t} className="text-xs px-3 py-1 rounded-full bg-panel2 border border-border text-gray-400">
            {t}
          </span>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-panel p-5 mb-10 flex items-center gap-4">
        <div>
          <div className="text-2xl font-bold text-accent-soft">{project.headlineStat.value}</div>
          <div className="text-xs text-gray-500">{project.headlineStat.label}</div>
        </div>
      </div>

      <div className="space-y-8">
        {project.sections.map((s, i) => (
          <div key={s.heading} className="border-l-2 border-accent/30 pl-5">
            <div className="text-xs text-gray-600 mb-1">0{i + 1}</div>
            <h2 className="text-lg font-semibold text-white mb-2">{s.heading}</h2>
            <p className="text-gray-400 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
