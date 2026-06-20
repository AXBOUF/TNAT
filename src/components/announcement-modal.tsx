import { useState, useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";
import tmgmImage from "@/assets/tgmg.jpg";

export function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal on first load (you can add localStorage to remember if closed)
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#A7D129]/40 bg-[#A7D129]/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[#A7D129] mb-4">
          <span className="h-2 w-2 rounded-full bg-[#A7D129]" />
          New Announcement
        </div>

        {/* Image */}
        <img
          src={tmgmImage}
          alt="TMGM TNAT Partnership"
          className="mt-4 w-full rounded-xl border border-white/10 object-cover"
        />

        {/* Content */}
        <h3 className="mt-4 text-xl font-bold text-white">
          TMGM x TNAT Partnership
        </h3>
        <p className="mt-2 text-xs text-white/70 leading-relaxed">
          We're proud to partner with TMGM, a globally trusted broker regulated by ASIC Australia.
        </p>

        {/* Features */}
        <ul className="mt-4 space-y-1.5">
          {[
            "ASIC Regulated",
            "Competitive Spreads",
            "Fast Execution",
            "Trusted by Traders Worldwide",
          ].map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-white/80">
              <CheckCircle2 className="h-3 w-3 text-[#A7D129] shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Footer note */}
        <p className="mt-4 text-xs text-white/60 leading-relaxed border-t border-white/10 pt-3">
          We only partner with companies we believe provide genuine value to our community. After extensive research and due diligence, we believe TMGM is a strong choice for traders seeking a regulated and reliable broker.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col gap-3">
          <a
            href="#announcements"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-[#A7D129] text-black px-6 py-2.5 text-sm font-semibold hover:bg-[#c0e84a] transition-colors"
          >
            Learn More
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Dismiss
          </button>
        </div>

        {/* Footer text */}
        <p className="mt-4 text-xs text-white/50 text-center">
          Exclusive benefits available for TNAT community members
        </p>
      </div>
    </div>
  );
}
