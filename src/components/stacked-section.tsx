import React, { useRef, ReactNode } from "react";
import { useStackedScroll, getStackedTransform } from "@/hooks/use-stacked-scroll";

interface StackedSectionProps {
  children: ReactNode;
  className?: string;
  sectionIndex: number;
  totalSections: number;
  id?: string;
}

export function StackedSection({
  children,
  className = "",
  sectionIndex,
  totalSections,
  id,
}: StackedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { progress } = useStackedScroll(sectionRef);

  const transform = getStackedTransform(sectionIndex, progress, totalSections);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative w-full transition-[box-shadow] duration-300 ${className}`}
      style={{
        // Use will-change sparingly for the animated properties
        willChange: "transform",
        // Apply the stacked transform
        ...transform,
        // Maintain GPU acceleration
        backfaceVisibility: "hidden",
        perspective: 1000,
      }}
    >
      {children}
    </section>
  );
}
