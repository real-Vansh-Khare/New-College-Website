import TableOfContents from "../../components/TableOfContents";
import Section from "../../components/Section";
import Navbar from "../../components/Navbar";
import SubSubheading from "../../components/SubSubheading";
import Link from "next/link";
const academicsHeadings = ["Administration", "Department of Management", "Department of Computer Science", "Department of Information Technology", "Department of Mathematics"]
const AcadPhotos = () => {
  return (
    <div className="flex justify-around py-8">
      <div className="bg-gray-300 w-1/5 aspect-square rounded-full flex">
        <Link href="/people/person" className="w-full h-full"></Link>
      </div>
      <div className="bg-gray-300 w-1/5 aspect-square rounded-full flex">
        <Link href="/people/person" className="w-full h-full"></Link>
      </div>
      <div className="bg-gray-300 w-1/5 aspect-square rounded-full flex">
        <Link href="/people/person" className="w-full h-full"></Link>
      </div>
    </div>
  );
}

export default function Academics() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4">
        <label htmlFor="mobile-table" className="md:hidden fixed top-2 left-0 w-8 h-8 flex justify-center items-center z-30 bg-[rgba(0,0,0,0.5)] text-white">
          &gt;
        </label>
        <TableOfContents hsize="large">
          {<h1 className="text-4xl font-bold">People</h1>}
        </TableOfContents>
        <div className="col-span-3 max-md:col-span-4 mt-12 ml-12">
          {
            academicsHeadings.map((value, index) => {
              const id = `ash-${index+1}`
              return (
                <Section id={id} heading={value}>
                  <div className="flex flex-col justify-between min-h-[50vh] pt-12 my-24">
                    <SubSubheading>Sub heading</SubSubheading>
                    <AcadPhotos />
                    <SubSubheading>Sub heading</SubSubheading>
                    <AcadPhotos />
                    <SubSubheading>Sub heading</SubSubheading>
                    <AcadPhotos />
                  </div>
                </Section>
              );
            })
          }
        </div>
      </div>
    </>
  );
}
