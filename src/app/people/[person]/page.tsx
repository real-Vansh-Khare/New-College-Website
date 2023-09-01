import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import TableOfContents from "@/components/TableOfContents";
const personHeadings = ["Sub Heading", "Sub Heading", "Sub Heading"]
export default function APerson() {
    return (
        <>
            <Navbar />
            <div className="grid grid-cols-4">
                <label htmlFor="mobile-table" className="md:hidden fixed top-2 left-0 w-8 h-8 flex justify-center items-center z-30 bg-[rgba(0,0,0,0.5)] text-white">
                    &gt;
                </label>
                <TableOfContents hsize="large">
                    <div className="w-1/2 aspect-square bg-gray-300 rounded-full mt-8"></div>
                    <h3 className="text-2xl font-bold">Name</h3>
                    <h3 className="text-2xl font-bold mb-8">Designation</h3>
                </TableOfContents>
                <div className="col-span-3 max-md:col-span-4 mt-12 ml-12">
                    {
                        personHeadings.map((value, index) => {
                            const id = `psh-${index + 1}`
                            return (
                                <Section id={id} heading={value}>
                                    <div className="h-[50vw]"></div>
                                </Section>
                            );
                        })
                    }
                </div>

            </div>
        </>
    );
}