import { useEffect, useState } from "react";

interface ScrollData {
  progress: number; // 0 to 1, where section enters to exits viewport
  isActive: boolean; // true when section is near center of viewport
}

export function useStackedScroll(sectionRef: React.RefObject<HTMLElement>) {
  const [scrollData, setScrollData] = useState<ScrollData>({
    progress: 0,
    isActive: false,
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    let animationId: number;

    const updateScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress based on section position
      // -1: section is below viewport
      // 0: section top is at viewport bottom
      // 0.5: section is centered in viewport
      // 1: section top is at viewport top
      // 2: section is above viewport

      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const sectionHeight = rect.height;

      let progress: number;

      if (sectionBottom < 0) {
        // Section completely above viewport
        progress = 2;
      } else if (sectionTop > viewportHeight) {
        // Section completely below viewport
        progress = -1;
      } else {
        // Section is visible in viewport
        // Progress: 0 to 1 for visible range
        progress = Math.max(-0.2, Math.min(1.2, (viewportHeight - sectionTop) / (viewportHeight + sectionHeight * 0.2)));
      }

      // Section is active when it's near the center of viewport
      const isActive = progress > 0.2 && progress < 0.8;

      setScrollData({ progress, isActive });
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationId);
      animationId = requestAnimationFrame(updateScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, [sectionRef]);

  return scrollData;
}

export function getStackedTransform(
  index: number,
  progress: number,
  totalSections: number
) {
  // Calculate how many sections are "ahead" of this one that haven't come into view yet
  const sectionsAbove = totalSections - index - 1;

  // Base scale and offset values
  const baseScale = 0.96; // 4% scale reduction per layer
  const baseOffset = 16; // pixels between layers

  // Scale calculation: older sections (lower index) stay more scaled down
  // As the current section comes into view (progress increases), it scales up
  // Sections above scale down as they pass
  const scaleReduction = Math.max(0, Math.min(1, progress));
  const scale = Math.pow(baseScale, sectionsAbove) * (1 - scaleReduction * 0.02);

  // Y offset: creates the stacked card appearance
  // Sections below stay offset, sections above move away
  const offsetReduction = Math.max(0, Math.min(1, Math.max(0, progress - 0.2) * 1.5));
  const yOffset = Math.max(0, sectionsAbove - offsetReduction * 1.5) * baseOffset;

  // Add subtle opacity decrease for deeper layers (optional, for depth perception)
  const opacityReduction = Math.max(0, 0.02 * sectionsAbove);

  return {
    transform: `translateY(${yOffset}px) scale(${scale})`,
    transformOrigin: "center top",
    opacity: Math.max(0.8, 1 - opacityReduction),
  };
}
