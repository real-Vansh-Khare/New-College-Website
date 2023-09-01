
import TableOfContents from "../../../components/TableOfContents";
import Section from "../../../components/Section";
import Navbar from "../../../components/Navbar";
const courseHeadings = ["Course Structure","Fee Structure","Seat Matrix","Faculty"]
export default function Course({params}:{params:{slug: string}}) {
    
  return (
    <>
    <Navbar />
    <div className="grid grid-cols-4">
      <label htmlFor="mobile-table" className="md:hidden fixed top-2 left-0 w-8 h-8 flex justify-center items-center z-30 bg-[rgba(0,0,0,0.5)] text-white">
          &gt;
        </label>
      <TableOfContents hsize="large">
      <h1 className="text-4xl font-bold">Course-Name</h1>
      <h3 className="text-2xl font-semibold">UnderGraduate</h3>
      </TableOfContents>
      <div className="col-span-3 max-md:col-span-4 mt-12 ml-12">
        {courseHeadings.map((element,index) => {
          const id = `csh-${index+1}`
          return(
            <Section id={id} heading={element}>
              <div className="h-[50vw]"></div>
            </Section>
          );
        })}
      </div>
    </div>
    </>
  );
}
