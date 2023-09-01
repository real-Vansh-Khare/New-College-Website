"use client"
import { useEffect, useState } from "react";
import { useHeadsObserver } from "../hooks/hooks";

type Props= {
  children: string | JSX.Element | JSX.Element[],
  hsize: string
}

type Heading = {
  id: string,
  text: string | null
}
export default function TableOfContents({ children,hsize }:Props) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const { activeId } = useHeadsObserver();
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2")).map(
      (elem) => ({
        id: elem.id,
        text: elem.textContent,
      })
    );
    setHeadings(elements);
  }, []);
  return (
    <>
      <input id="mobile-table" type="checkbox" className="hidden peer"></input>
      <div className="sticky max-md:fixed top-0 col-span-1 bg-bluel text-white h-screen max-md:w-full max-md:top-0 max-md:left-0 max-md:hidden max-md:peer-checked:block z-10">
        <div className="min-h-[9rem] flex flex-col gap-4 justify-center items-center">
          {children}
        </div>
        <ul className="flex flex-col justify-start">
          {headings.map((heading) => {
            if(hsize==="large")
            {
              if (activeId === heading.id) {
                return (
                  <li
                    key={heading.id}
                    className="text-center text-2xl  font-medium py-6 bg-lightbg text-bluel"
                  >
                    <a
                      href={`#${heading.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(`#${heading.id}`)?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {heading.text}
                    </a>
                  </li>
                );
              } else {
                return (
                  <li
                    key={heading.id}
                    className="text-center text-2xl font-medium  py-6"
                  >
                    <a
                      href={`#${heading.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(`#${heading.id}`)?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {heading.text}
                    </a>
                  </li>
                );
              }
            }
            else {
              if (activeId === heading.id) {
                return (
                  <li
                    key={heading.id}
                    className="text-center text-xl  font-medium py-2 bg-lightbg text-bluel"
                  >
                    <a
                      href={`#${heading.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(`#${heading.id}`)?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {heading.text}
                    </a>
                  </li>
                );
              } else {
                return (
                  <li
                    key={heading.id}
                    className="text-center text-xl font-medium  py-2"
                  >
                    <a
                      href={`#${heading.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(`#${heading.id}`)?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {heading.text}
                    </a>
                  </li>
                );
              }
            }
          })}
          {/* <li className="text-center text-2xl font-medium  py-6 bg-lightbg text-bluedark">
          <a href="#">Selected</a>
        </li> */}
        </ul>
      </div>
    </>
  );
}
