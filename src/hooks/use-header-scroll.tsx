import { useEffect, useState } from "react";

export function useHeaderScroll() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let animationId: number;

    const handleScroll = () => {
      cancelAnimationFrame(animationId);
      animationId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        // Show header if at top of page
        if (currentScrollY < 10) {
          setIsVisible(true);
          setLastScrollY(currentScrollY);
          return;
        }

        // Hide header when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, [lastScrollY]);

  return isVisible;
}
