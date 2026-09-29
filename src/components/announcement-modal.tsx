import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import mentorshipImage from "@/assets/tgmg.png";

export function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl my-6 overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] shadow-2xl">

        {/* Image */}
        <div className="p-3 pb-0">
          <img
            src={mentorshipImage}
            alt="TNAT Mentorship"
            className="w-full h-48 sm:h-56 object-cover object-[center_30%] rounded-2xl"
          />
        </div>

        {/* Content */}
        <div className="px-6 sm:px-10 py-7 text-center">

          {/* Eyebrow */}
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#A7D129]">
            TNAT Mentorship
          </p>

          {/* Heading */}
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white">
            1:1 Introduction Call
          </h2>

          {/* Intro */}
          <p className="mt-3 mx-auto max-w-md text-sm text-white/60 leading-relaxed">
            Interested in TNAT but want to understand how it works before
            joining? Let's talk.
          </p>

          {/* Key points */}
          <div className="mt-6 mx-auto max-w-sm space-y-3 text-left">
            {[
              "Understand how TNAT Mentorship works",
              "See what to expect inside the community",
              "Discuss your trading journey & challenges",
              "Find out if TNAT is the right fit for you",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm text-white/80"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A7D129]/10">
                  <Check className="h-3 w-3 text-[#A7D129]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="mt-7">
            <p className="text-2xl font-bold text-white">
              $50 <span className="text-sm font-normal text-white/40">USD</span>
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest text-white/40">
              One-Time
            </p>
          </div>

          {/* Credit highlight */}
          <a
            href="/mentorship-call"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#A7D129] px-6 py-3.5 text-sm font-bold text-black transition-all hover:bg-[#c0e84a] hover:scale-[1.01]"
          >
            Book My 1:1 Call
          </a>

          <div className="mt-5 rounded-xl border border-[#A7D129]/20 bg-[#A7D129]/5 px-4 py-3">
            <p className="text-xs sm:text-sm text-white/70">
              {" "}
              <span className="font-semibold text-[#A7D129]">
                If you decide to join, $50 is credited toward your mentorship fee.
              </span>
            </p>
          </div>

          {/* Primary CTA */}


          {/* Secondary action */}
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 text-xs text-white/50 underline underline-offset-4 transition-colors hover:text-white"
          >
            Continue to website
          </button>

          {/* Small disclaimer */}
          <p className="mt-5 mx-auto max-w-md text-[10px] leading-relaxed text-white/30">
            Introduction and consultation only. Trading strategies, signals,
            mentorship resources and live sessions are not included in this call.
          </p>
        </div>
      </div>
    </div>
  );
}