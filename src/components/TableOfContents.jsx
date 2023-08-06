import { useEffect, useState } from "react";
import { useHeadsObserver } from "../hooks/hooks";

export default function TableOfContents({ name }) {
  const [headings, setHeadings] = useState([]);
  const { activeId } = useHeadsObserver();
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2")).map(
      (elem) => ({
        id: elem.id,
        text: elem.innerText,
      })
    );
    setHeadings(elements);
  }, []);
  return (
    <>
      <input id="mobile-table" type="checkbox" className="hidden peer"></input>
      <div className="fixed w-[25%] col-span-1 bg-bluel text-white h-screen max-md:w-full max-md:top-0 max-md:left-0 max-md:hidden max-md:peer-checked:block z-10">
        <div className="h-36 flex justify-center items-center">
          <h1 className="text-4xl font-bold">{name}</h1>
        </div>
        <ul className="flex flex-col justify-start">
          {headings.map((heading) => {
            if (activeId === heading.id) {
              return (
                <li
                  key={heading.id}
                  className="text-center text-2xl font-medium py-6 bg-lightbg text-bluel"
                >
                  <a
                    href={`#${heading.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(`#${heading.id}`)
                        .scrollIntoView({ behavior: "smooth" });
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
                      document
                        .querySelector(`#${heading.id}`)
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {heading.text}
                  </a>
                </li>
              );
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
