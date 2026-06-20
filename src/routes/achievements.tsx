import { createFileRoute, Link } from "@tanstack/react-router";
import { Trophy, Award, Target, TrendingUp, Users, Star } from "lucide-react";
import { ShaderBg } from "@/components/shader-bg";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — TNAT" },
      { name: "description", content: "Milestones, funded accounts and community wins from The Nepali Anonymous Traders." },
      { property: "og:title", content: "Achievements — TNAT" },
      { property: "og:description", content: "Milestones, funded accounts and community wins from The Nepali Anonymous Traders." },
    ],
  }),
  component: Achievements,
});

const STATS: [string, string][] = [
  ["100+", "Active Mentees"],
  ["12", "Funded Accounts"],
  ["4.05", "Avg Profit Factor"],
  ["6 Mo", "Consistent Cohort"],
];

const MILESTONES = [
  { Icon: Trophy, title: "First Funded Cohort", date: "Mar 2026", body: "Our first batch of mentees cleared phase 1 of the funded account program — a defining moment for TNAT." },
  { Icon: Award, title: "100+ Mentees Milestone", date: "Apr 2026", body: "We crossed 100 active mentees inside the brotherhood, all trading with discipline and structure." },
  { Icon: Target, title: "90+ Zella Score", date: "May 2026", body: "Community average crossed a 90 Zella Score, reflecting strong risk management and consistency." },
  { Icon: TrendingUp, title: "61.9% Avg Trade Win", date: "May 2026", body: "Half-year aggregate stats hit a 61.9% win rate across logged community trades." },
  { Icon: Users, title: "Daily Live Streak — 180 Days", date: "Jun 2026", body: "Six straight months of daily live sessions without skipping a single market day." },
  { Icon: Star, title: "Lifetime Cohort 02 — Sold Out", date: "Jun 2026", body: "Our second lifetime cohort sold out in under 48 hours. Cohort 03 opens soon." },
];

function Achievements() {
  return (
    <div className="min-h-screen dark-page">
      <section className="relative pt-24 pb-16">
        <ShaderBg className="opacity-60" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-primary">Proof of work</p>
          <h1 className="mt-5 text-5xl md:text-7xl font-bold leading-[0.95]">
            Our <span className="text-[#FF2D2D]">Achievements</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Milestones, funded accounts and community wins — earned, not promised.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-4 gap-4">
            {STATS.map(([n, l]) => (
              <div key={l} className="rounded-2xl glass p-6 text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">{n}</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MILESTONES.map(({ Icon, title, date, body }) => (
              <article key={title} className="rounded-2xl glass p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{date}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-16 text-center text-sm text-muted-foreground">
            <Link to="/" className="text-primary underline underline-offset-4">Back home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
