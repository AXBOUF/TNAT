import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-anonymous.jpg";
import mentee1 from "@/assets/mentee-1.jpg";
import mentee2 from "@/assets/mentee-2.jpg";
import liveSession from "@/assets/live-session.jpg";
import { ArrowRight, Check, Circle, Instagram, Youtube, Twitter, MessageCircle, Heart, CheckCircle2, Flame, Megaphone, Mail, Play, Gift, Sparkles, Trophy } from "lucide-react";
import { VIDEO_ITEMS } from "@/lib/videos";
import { useHeaderScroll } from "@/hooks/use-header-scroll";
import { AnnouncementModal } from "@/components/announcement-modal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TNAT — The Nepali Anonymous Traders" },
      {
        name: "description",
        content:
          "Join the Nepali Trading Brotherhood. Daily live sessions, structured guidance, and a serious community built to help Nepali traders grow with discipline.",
      },
      { property: "og:title", content: "TNAT — The Nepali Anonymous Traders" },
      {
        property: "og:description",
        content: "A serious mentorship community for Nepali traders.",
      },
    ],
  }),
  component: Landing,
});

const NAV: { label: string; href: string; to?: string }[] = [
  { label: "Home", href: "/#home", to: "/" },
  { label: "Plans", href: "/#plans", to: "/" },
  { label: "Results", href: "/#results", to: "/" },
  { label: "Videos", href: "/#videos", to: "/" },
  { label: "Announcements", href: "/#announcements", to: "/" },
  { label: "Achievements", href: "/achievements", to: "/achievements" },
];


const PLANS = [
  {
    badge: "",
    title: "MONTHLY",
    price: "",
    note: "",
    desc: "This plan does not include strategy videos or mentorship resources. It gives you access to the community so you can observe how everything works, learn the process, and see real mentee results from inside.",
    cta: "Join Community",
    features: ["Community access", "Live trading observation", "Real mentee results visibility"],
    highlight: false,
    href: "https://whop.com/checkout/plan_bKLmEqoMjkuEp",
  },
  {
    badge: "",
    title: "6 MONTH",
    price: "",
    note: "",
    desc: "This plan includes full access to daily live sessions, weekly market outlooks, session recordings, and structured mentorship resources. You'll receive trading psychology guidance, emotional decision-making support, small-group mentorship, and monthly P&L reviews to help you build consistency and discipline over 6 months.",
    cta: "Join 6-Month Mentorship",
    features: ["Everything in Community", "Daily live + recordings", "Weekly market outlook", "Trading psychology", "Monthly P&L reviews"],
    highlight: false,
    href: "https://whop.com/checkout/plan_znpUyLrsLQmBl",
  },
  {
    badge: "",
    title: "LIFETIME",
    price: "",
    note: "",
    desc: "This plan gives lifetime access to the complete TNAT mentorship ecosystem. Includes everything in the 6-Month plan, priority access to future resources and upgrades, two private 1-on-1 coaching calls, eligibility for funded account opportunities based on consistency, and participation in monthly giveaways.",
    cta: "Get Lifetime Access",
    features: ["Everything in 6-Month", "Priority future access", "2× private 1-on-1 calls", "Funded account eligibility", "Monthly giveaways"],
    highlight: false,
    href: "https://whop.com/checkout/plan_0LHdF875VXuoa",
  },
];

const REVIEWS = [
  {
    name: "Sudip",
    when: "05/07/2025, 02:43",
    span: "md:col-span-2",
    quote:
      "It was a wonderful reflection session today where we all shared our history of trading and thank you for our mentor @Anonymous Trader, for continuous support — we successfully completed our first 6 months together and we'll go on stronger. For me, this is the longest I've stayed with one team in a month. Why? Because I feel this is the place I was looking for, and it took me years to find. Thank you @Anonymous Trader and TNAT for building this empire — this journey has been amazing and will continue.",
    reactions: [{ I: Heart, n: 7 }, { I: CheckCircle2, n: 3 }, { I: Flame, n: 5 }, { I: Megaphone, n: 2 }],
  },
  {
    name: "Niraj",
    when: "Today at 22:30",
    span: "md:col-span-2 md:row-span-2",
    quote:
      "Testimonial for my trading mentors — from confused beginner to (almost) disciplined trader. I was a total beginner when I started trading: zero knowledge, zero experience, just pure curiosity. I joined this group to learn from scratch, and at first I found it both fun and scary. Fun because, well, trading sounded exciting. Scary because my brain refused to process all the charts and candlesticks.\n\nWhen I first started trading, let's just say 'discipline' was not in my vocabulary. I was like a kid in a candy store — except instead of candy, it was trades, and instead of enjoying them, I was losing a lot of my precious (paper) money. Fake out? BOOM, enter! LYAMMAI CANDLE BOOM, enter again! And let's not forget my favourite mistake — revenge trading! Lose a trade? BOOM, enter again to get it back! Spoiler alert: that never worked. Instead, my losses kept piling up, and my frustration levels skyrocketed.\n\nBut thanks to my amazing mentor and the team, I started to actually learn instead of just YOLO-ing my trades. They taught me the importance of patience, key levels, and not throwing myself into the market without a plan. The best part? Learning was never boring — every class was fun, full of jokes, and explained in the simplest way possible. No overcomplicated nonsense, just real, practical knowledge.",
    reactions: [{ I: Heart, n: 11 }, { I: CheckCircle2, n: 9 }, { I: Flame, n: 9 }],
  },
  {
    name: "Gaurab",
    when: "05/07/2025, 01:29",
    span: "md:col-span-2",
    quote:
      "Before joining this group I was honestly lost. I had no idea when to move from demo to real trading, which strategy suited me, or how to build my own edge in the market. I felt stuck and confused. But after joining this group — undoubtedly the best trading community in Nepal — everything changed. I learned a simple, proven strategy that actually works, and I'm now building my edge with a clear and realistic goal in this field.\n\nI've gained true understanding of risk management, emotional control, discipline, and consistency. But more than all of that, this group feels like a family. We laugh over losses, support each other through everything, and grow together every day. ❤️",
    reactions: [{ I: Heart, n: 7 }, { I: CheckCircle2, n: 3 }, { I: Flame, n: 5 }],
  },
  {
    name: "Sanju baba",
    when: "05/07/2025, 23:56",
    span: "md:col-span-2",
    quote:
      "Our first psychology session in 6 months with The Nepalese Anonymous Trader (TNAT) and it was absolutely worth the wait. In just one session, he gave us insights that were deep, real, and incredibly powerful.\n\nHis words hit the core not just about trading, but about how we think, act, and respond to life. It reminded me that mastering the mind is more important than mastering the market. This wasn't just about gold or charts — it was about mindset, patience, and self-discipline. Truly grateful to be learning from someone who doesn't just speak from theory, but from lived experience.",
    reactions: [{ I: Heart, n: 6 }, { I: CheckCircle2, n: 2 }, { I: Flame, n: 4 }],
  },
];

const KPIS: [string, string][] = [
  ["4.05", "Profit Factor"],
  ["61.9%", "Trade Win"],
  ["90.65", "Zella Score"],
  ["80%", "Day Win"],
];

function Landing() {
  return (
    <div className="min-h-screen dark-page">
      <AnnouncementModal />
      <Header />
      <Hero />
      <Plans />
      <LiveSession />
      <Results />
      <Videos />
      <Announcements />
      <Transparency />
      <Footer />
    </div>
  );
}

function Header() {
  const isVisible = useHeaderScroll();

  return (
    <header
      className="sticky top-0 z-50 bg-black border-b border-white/10 transition-transform duration-300"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
          {NAV.map((n) =>
            n.href.startsWith("/#") ? (
              <a key={n.label} href={n.href.slice(1)} className="hover:text-white transition-colors">
                {n.label}
              </a>
            ) : (
              <Link key={n.label} to={n.href} className="hover:text-white transition-colors">
                {n.label}
              </Link>
            )
          )}
        </nav>
        <a
          href="#plans"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-highlight transition-colors"
        >
          Get Started <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center pt-20 pb-28 bg-[#000000]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#3E432E]/40 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#616F39]/20 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-8xl font-display uppercase leading-[0.9] tracking-tight text-white">
          Join the Nepali <br />
          <span className="text-[#FF2D2D]">Trading Brotherhood</span>
        </h1>

        <div className="relative mt-12 w-full max-w-5xl">
          <div className="relative rounded-2xl border border-[#616F39]/30 overflow-hidden">
            <img src={heroImg} alt="Anonymous traders" width={1920} height={1088} className="w-full h-auto rounded-2xl" />
          </div>
        </div>

        <p className="mt-10 text-lg text-white/70 max-w-xl">
          Daily live market sessions, structured guidance, and a serious community
          built to help Nepali traders grow with discipline — together.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href="#plans"
            className="inline-flex items-center gap-2 rounded-full bg-[#A7D129] text-black px-6 py-3 font-semibold hover:bg-[#c0e84a] transition-colors"
          >
            Choose Your Plan <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://form.jotform.com/anonymoustrader9999/the-nepali-anonymous-traders"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#616F39] bg-[#3E432E]/60 px-6 py-3 font-semibold text-white hover:bg-[#3E432E] transition-colors"
          >
            Book 1-on-1 Call
          </a>
        </div>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section id="plans" className="relative py-24 border-t border-border">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 1.8px, transparent 1.8px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {PLANS.map((p) => (
            <article
              key={p.title}
              className="relative rounded-2xl p-8 bg-[#111111] border border-white/10 green-fill-hover"
            >
              {p.badge && (
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {p.badge}
                  </span>
                  {p.price && <span className="text-xs text-muted-foreground">{p.price}</span>}
                </div>
              )}
              <h3 className="text-2xl font-bold">{p.title}</h3>
              {p.price && !p.badge && (
                <p className="text-sm text-muted-foreground">{p.price}</p>
              )}
              {p.note && (
                <p className="mt-2 text-xs uppercase tracking-widest text-primary">{p.note}</p>
              )}
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <ul className="mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 w-full rounded-full px-5 py-3 font-semibold text-sm transition-colors border border-border hover:bg-secondary"
              >
                {p.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://form.jotform.com/anonymoustrader9999/the-nepali-anonymous-traders"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Not sure? <span className="underline underline-offset-4">Book a 1-on-1 call →</span>
          </a>
        </div>
      </div>
    </section>
  );
}


function LiveSession() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-2xl overflow-hidden border border-border">
          <img src={liveSession} alt="Daily live trading session" loading="lazy" width={1280} height={800} className="w-full h-auto" />
          <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-3 py-1.5 text-xs font-bold text-[#FF2D2D]">
            <span className="h-2 w-2 rounded-full bg-[#FF2D2D] animate-pulse" />
            LIVE
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-primary">Daily Live Sessions</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Trade alongside the team — every market day.</h2>
          <p className="mt-6 text-muted-foreground">
            Real-time insights into market movements with actionable strategies & live trading
            together with the team. Watch decisions happen, hear the reasoning, and learn the
            craft from inside the room.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#plans" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-highlight transition-colors">
              Join Community (Monthly)
            </a>
            <a href="#plans" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-secondary transition-colors">
              Join 6-Month Mentorship
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground italic">
            Community monthly access does not include strategy or mentorship resources.
          </p>
        </div>
      </div>
    </section>
  );
}

function Results() {
  // Duplicate the list so the translate -50% loop is seamless
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <section id="results" className="py-24 border-t border-border bg-surface-2/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.06] pointer-events-none" />
      <style>{`
        @keyframes tnat-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .tnat-marquee-track {
          animation: tnat-marquee 80s linear infinite;
          width: max-content;
        }
        .tnat-marquee-mask {
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
      `}</style>
      <div className="relative tnat-marquee-mask">
        <div className="tnat-marquee-track flex gap-5 px-6">
          {loop.map((r, idx) => (
            <article
              key={`${r.name}-${idx}`}
              className="relative rounded-2xl glass p-6 flex flex-col w-[360px] md:w-[420px] shrink-0"
            >
              <header className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-surface flex items-center justify-center ring-1 ring-primary/30">
                  <div className="h-6 w-6 rounded-full bg-primary/20" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-primary">{r.name}</div>
                </div>
              </header>
              <blockquote className="mt-4 text-sm text-foreground/90 leading-relaxed whitespace-pre-line line-clamp-[10]">
                {r.quote}
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


function Videos() {
  return (
    <section id="videos" className="py-24 border-t border-border">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-primary">ON THE CHANNEL</p>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
            Watch the <span className="text-[#FF2D2D]">Anonymous Trader on YouTube</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            New uploads, trading insights, community topics, and educational content — available to watch instantly.
          </p>
        </div>
        <div className="grid grid-cols-12 auto-rows-[280px] md:auto-rows-[220px] gap-6">
          {VIDEO_ITEMS.map((v) => (
            <div
              key={v.id}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card/60 glass ${v.span} ${v.tilt} ${v.float} hover:rotate-0 hover:border-[#FF2D2D]/60 transition-all duration-500`}
            >
              {v.youtube ? (
                <iframe
                  src={v.youtube}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full bg-black"
                />
              ) : v.src ? (
                <video
                  controls
                  preload="metadata"
                  poster={v.poster}
                  className="absolute inset-0 h-full w-full object-cover bg-black"
                >
                  <source src={v.src} />
                </video>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-highlight/10" />
                  <div className="absolute inset-0 bg-grid opacity-[0.08]" />
                  <div className="relative h-full w-full flex flex-col items-center justify-center p-8 text-center">
                    <button
                      type="button"
                      aria-label={`Play ${v.title}`}
                      className="h-16 w-16 rounded-full bg-[#FF2D2D] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg"
                    >
                      <Play className="h-6 w-6 fill-current ml-0.5" />
                    </button>
                    <div className="mt-5 text-2xl md:text-3xl font-display font-bold tracking-tight">{v.title}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Video coming soon</div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Announcements() {
  return (
    <section id="announcements" className="py-24 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/20 blur-[140px] animate-pulse" />
        <div className="absolute -bottom-32 -right-32 h-[520px] w-[520px] rounded-full bg-highlight/20 blur-[160px] animate-pulse" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-primary inline-flex items-center gap-2 justify-center">
            <Megaphone className="h-3.5 w-3.5" /> Announcements
          </p>
          <h2 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
            The <span className="text-[#FF2D2D]">100K Giveaway</span> is Live
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            We're giving away NPR 100,000 to one of our community members. Mockup preview — full details dropping soon.
          </p>
        </div>

        <div className="mt-14 relative rounded-3xl glass border border-primary/30 p-10 md:p-14 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-highlight/15" />
          <div className="absolute inset-0 bg-grid opacity-[0.06]" />
          <div className="relative grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-primary">
                <Sparkles className="h-3 w-3" /> Mockup
              </div>
              <h3 className="mt-5 text-5xl md:text-7xl font-display font-bold tracking-tight">
                NPR <span className="text-[#FF2D2D]">100,000</span>
              </h3>
              <p className="mt-3 text-xl text-muted-foreground">Giveaway for the TNAT Brotherhood</p>
              <p className="mt-4 text-sm text-muted-foreground">Full details dropping soon.</p>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
              <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-full border border-primary/40 bg-background/40 backdrop-blur flex items-center justify-center">
                <Gift className="h-24 w-24 md:h-32 md:w-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Transparency() {
  const items = [
    { t: "Daily Journaling", d: "Detailed notes of market conditions, trade setups, and reasoning behind every decision." },
    { t: "Data Collection", d: "Consistent tracking of key performance metrics to measure and refine our strategies." },
    { t: "Track Record", d: "A complete, unfiltered history of our trading performance, updated regularly." },
  ];
  return (
    <section className="py-24 border-t border-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-primary">Transparency at the core</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Because results speak louder than promises.</h2>
          <p className="mt-6 text-muted-foreground">
            At TNAT, we believe in showing, not just telling. Every trade, every result, every
            lesson — it's all recorded and shared openly with our community.
          </p>
          <p className="mt-4 text-muted-foreground">
            You'll see real screenshots and photos straight from our journals and performance
            logs — no cherry-picking, no hidden numbers.
          </p>
        </div>
        <div className="space-y-4">
          {items.map((it, i) => (
            <div key={it.t} className="rounded-xl border border-border bg-card p-6 flex gap-5">
              <div className="text-3xl font-display font-bold text-primary/60 leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-semibold">{it.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Footer() {
  const socials = [
    { Icon: Instagram, label: "Instagram", href: "#" },
    { Icon: MessageCircle, label: "Discord", href: "#" },
    { Icon: Youtube, label: "YouTube", href: "#" },
    { Icon: Twitter, label: "X / Twitter", href: "#" },
  ];

  return (
    <footer id="contact" className="mt-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10 md:gap-8">
          <div>
            <h3 className="text-2xl font-bold">The Nepali Anonymous Traders</h3>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              A serious mentorship community for Nepali traders. Daily live sessions, structured guidance, and real results.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm text-white/70">
              <Mail className="h-4 w-4 shrink-0" />
              <span>contact@tnat.com</span>
            </div>
          </div>

          <FooterCol
            title="Community"
            links={[
              { label: "Home", to: "/" },
              { label: "Plans", href: "/#plans" },
              { label: "Results", href: "/#results" },
              { label: "Live Sessions", href: "/#home" },
            ]}
          />
          <FooterCol
            title="Content"
            links={[
              { label: "Videos", href: "/#videos" },
              { label: "Announcements", href: "/#announcements" },
              { label: "Achievements", to: "/achievements" },
              { label: "Transparency", href: "/#results" },
            ]}
          />
          <FooterCol
            title="Connect"
            links={[
              { label: "Instagram", href: "#" },
              { label: "Discord", href: "#" },
              { label: "YouTube", href: "#" },
              { label: "X / Twitter", href: "#" },
              { label: "Book 1-on-1 Call", href: "https://form.jotform.com/anonymoustrader9999/the-nepali-anonymous-traders" },
            ]}
          />
        </div>

        <div className="mt-14 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} The Nepali Anonymous Traders. Educational content only — not financial advice.</div>
          <div>Designed with discipline.</div>
        </div>
      </div>
    </footer>
  );
}

type FooterLink = { label: string; to?: string; href?: string };
function FooterCol({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      {title && <h4 className="text-sm font-semibold opacity-80">{title}</h4>}
      <ul className="space-y-4 text-sm">
        {links.map((l) =>
          l.to ? (
            <li key={l.label}>
              <Link to={l.to} className="hover:underline underline-offset-4">{l.label}</Link>
            </li>
          ) : (
            <li key={l.label}>
              <a
                href={l.href}
                className="hover:underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}


function SectionHead({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-primary">
        <Circle className="h-2 w-2 fill-primary text-primary" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
      <p className="mt-5 text-muted-foreground text-lg">{desc}</p>
    </div>
  );
}
