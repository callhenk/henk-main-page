import { useEffect } from "react";

const BackgroundParallax = ({ speed = 0.2 }: { speed?: number }) => {
  useEffect(() => {
    let ticking = false;

    const update = () => {
      const offset = window.scrollY * speed;
      // Move background opposite to scroll for subtle parallax
      document.body.style.backgroundPosition = `center ${-offset}px`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    // Initial position
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return null;
};

export default BackgroundParallax;
