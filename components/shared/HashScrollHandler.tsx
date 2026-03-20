"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const HashScrollHandler = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };

    // Delay to ensure the content is rendered and layout is stable
    const timeoutId = setTimeout(handleScroll, 100);
    return () => clearTimeout(timeoutId);
  }, [pathname, searchParams]);

  return null;
};

export default HashScrollHandler;
