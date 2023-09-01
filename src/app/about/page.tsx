import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import TableOfContents from "../../components/TableOfContents";

const aboutHeadings = ["Director's Desk", "At a Glance", "IIITL Coordination Forum", "Board of Governors", "Finance Committee", "Senate", "Building Works Committee", "Internal Complaints Committee(ICC)",
  "RajBhasha", "Incubation Cell", "Anti Ragging Committee & Squad", "Student Grievance Redressal Committee", "Reach Us", "Download"]

export default function FullAbout() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4">
        <label htmlFor="mobile-table" className="md:hidden fixed top-2 left-0 w-8 h-8 flex justify-center items-center z-30 bg-[rgba(0,0,0,0.5)] text-white">
          &gt;
        </label>
        <TableOfContents hsize="small">
          <h1 className="text-4xl font-bold">About Us</h1>
        </TableOfContents>
        <div className="col-span-3 max-md:cols-span-4 py-12 ml-12">
          {
            aboutHeadings.map((value, index) => {
              const id = `sh-${index+1}`
              return (
                <Section id={id} heading={value}>
                  <div className="w-1/2 max-md:w-3/4 mt-24 ml-12 max-md:mt-12 max-md:ml-6 text-lg bg-gray-300 mb-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                    ipsa enim optio aut deleniti! Laborum officia debitis dignissimos
                    dicta aliquam non incidunt molestias consequatur sapiente illum
                    quaerat deserunt perferendis culpa quae, nam suscipit tenetur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                    ipsa enim optio aut deleniti! Laborum officia debitis dignissimos
                    dicta aliquam non incidunt molestias consequatur sapiente illum
                    quaerat deserunt perferendis culpa quae, nam suscipit tenetur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                    ipsa enim optio aut deleniti! Laborum officia debitis dignissimos
                    dicta aliquam non incidunt molestias consequatur sapiente illum
                    quaerat deserunt perferendis culpa quae, nam suscipit tenetur.
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
