"use client";

import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/config";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <div className="px-6 md:px-12 py-14 max-w-[700px] mx-auto">
      <PageHeader eyebrow="GET IN TOUCH" title="Contact" description="Open to data analyst roles, internships and freelance projects." />

      <div className="rounded-xl border border-border bg-panel p-6 space-y-4">
        <ContactRow icon={<Mail size={16} />} label="Email" value={profile.socials.email.replace("mailto:", "")} href={profile.socials.email} />
        <ContactRow icon={<Github size={16} />} label="GitHub" value={profile.socials.github.replace("https://", "")} href={profile.socials.github} />
        <ContactRow icon={<Linkedin size={16} />} label="LinkedIn" value={profile.socials.linkedin.replace("https://", "")} href={profile.socials.linkedin} />
        <ContactRow icon={<MapPin size={16} />} label="Location" value={profile.location} />
      </div>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-panel2 transition-colors">
      <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent-soft">
        {icon}
      </div>
      <div>
        <div className="text-[11px] text-gray-500">{label}</div>
        <div className="text-sm text-gray-200">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
