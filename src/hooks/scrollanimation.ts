import { useEffect, useState, useRef } from "react";

// provides animation on scroll to those elements of the page which have a scrollAnim class
export function useScrollObserver() {
  const observer = useRef<IntersectionObserver | null>(null);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          entry.target.classList.add('show')
          setActiveId(entry.target.id)
        }
        // else
        // {
        //     entry.target.classList.remove('show')
        // }
      });
    };

    observer.current = new IntersectionObserver(handleObserver,
    //      {
    //   rootMargin: "0% 0% 10% 0%",
    // }
    );

    const elements = document.querySelectorAll(".scrollAnim");
    elements.forEach((elem) => {
      observer.current?.observe(elem);
    });
    return () => observer.current?.disconnect();
  }, []);
  return { activeId };
}