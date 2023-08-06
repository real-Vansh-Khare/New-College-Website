import { useEffect, useState, useRef } from "react";

export function useHeadsObserver() {
  const observer = useRef();
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: "0% 0% -49% 0%",
    });

    const elements = document.querySelectorAll("h2");
    elements.forEach((elem) => {
      observer.current.observe(elem);
    });
    return () => observer.current?.disconnect();
  }, []);
  return { activeId };
}
