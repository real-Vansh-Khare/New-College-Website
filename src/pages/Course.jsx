import TableOfContents from "../components/TableOfContents";
import Section from "../components/Section";

export default function Course() {
  return (
    <div className="grid grid-cols-4">
      <label for="mobile-table" className="md:hidden fixed top-2 left-0 w-8 h-8 flex justify-center items-center z-30 bg-[rgba(0,0,0,0.5)] text-white">
          &gt;
        </label>
      <TableOfContents name="Course"/>
      <div className="absolute left-[25%] max-md:left-0 max-md:col-span-4 col-span-3 mt-12 ml-12">
        <Section id="csh-1" heading="Section Heading">
          <div className="text-lg font-medium">
            <p>Course Structure</p>
            <p>Fee Structure</p>
            <p>Seat Matrix</p>
            <p>Faculty</p>
          </div>
        </Section>
        <Section id="csh-2" heading="Section Heading">
          <div className="text-lg font-medium">
            <p>Course Structure</p>
            <p>Fee Structure</p>
            <p>Seat Matrix</p>
            <p>Faculty</p>
          </div>
        </Section>
        <Section id="csh-3" heading="Section Heading">
          <div className="text-lg font-medium">
            <p>Course Structure</p>
            <p>Fee Structure</p>
            <p>Seat Matrix</p>
            <p>Faculty</p>
          </div>
        </Section>
        <Section id="csh-4" heading="Section Heading">
          <div className="text-lg font-medium">
            <p>Course Structure</p>
            <p>Fee Structure</p>
            <p>Seat Matrix</p>
            <p>Faculty</p>
          </div>
        </Section>
      </div>
    </div>
  );
}
