import TableOfContents from "../../components/TableOfContents";
import Section from "../../components/Section";
import Navbar from "../../components/Navbar";
import SubSubheading from "../../components/SubSubheading";

export default function Academics() {
  return (
    <>
    <Navbar />
    <div className="grid grid-cols-4">
      <label htmlFor="mobile-table" className="md:hidden fixed top-2 left-0 w-8 h-8 flex justify-center items-center z-30 bg-[rgba(0,0,0,0.5)] text-white">
          &gt;
        </label>
      <TableOfContents>
      {<h1 className="text-4xl font-bold">People</h1>}
      </TableOfContents>
      <div className="col-span-3 max-md:col-span-4 mt-12 ml-12">
        <Section id="ash-1" heading="Administration">
          <div className="flex flex-col justify-between h-[50vh] pt-12">
          <SubSubheading>Sub heading</SubSubheading>
            <SubSubheading>Sub heading</SubSubheading>
            <SubSubheading>Sub heading</SubSubheading>
          </div>
        </Section>
        <Section id="ash-2" heading="Department of Management">
          <div className="flex flex-col justify-between h-[50vh]">
          <SubSubheading>Sub heading</SubSubheading>
            <SubSubheading>Sub heading</SubSubheading>
            <SubSubheading>Sub heading</SubSubheading>
          </div>
        </Section>
        <Section id="ash-3" heading="Department of Computer Science">
          <div className="flex flex-col justify-between h-[50vh]">
            <SubSubheading>Sub heading</SubSubheading>
            <SubSubheading>Sub heading</SubSubheading>
            <SubSubheading>Sub heading</SubSubheading>
          </div>
        </Section>
        <Section id="ash-4" heading="Department of Information Technology">
          <div className="flex flex-col justify-between h-[50vh]">
          <SubSubheading>Sub heading</SubSubheading>
            <SubSubheading>Sub heading</SubSubheading>
            <SubSubheading>Sub heading</SubSubheading>
          </div>
        </Section>
        <Section id="ash-5" heading="Department of Mathematics">
          <div className="flex flex-col justify-between h-[50vh]">
          <SubSubheading>Sub heading</SubSubheading>
            <SubSubheading>Sub heading</SubSubheading>
            <SubSubheading>Sub heading</SubSubheading>
          </div>
        </Section>
      </div>
    </div>
    </>
  );
}
