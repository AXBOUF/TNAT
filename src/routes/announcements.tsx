import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/announcements")({
  head: () => ({
    meta: [
      { title: "Announcements — TNAT" },
      { name: "description", content: "Latest announcements from The Nepali Anonymous Traders." },
      { property: "og:title", content: "Announcements — TNAT" },
      { property: "og:description", content: "Latest announcements from The Nepali Anonymous Traders." },
    ],
  }),
  component: Announcements,
});

function Announcements() {
  return (
    <div className="min-h-screen dark-page flex items-center justify-center px-6">
      <h1 className="text-5xl md:text-8xl lg:text-9xl font-display uppercase tracking-tight leading-[0.9] text-center text-white">
        100K Funded Account<br />Giveaway<br /><span className="text-[#FF2D2D]">Live Soon</span>
      </h1>
    </div>
  );
}
