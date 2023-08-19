import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";

export default function Admissions() {
    return(
        <>
        <Navbar />
        <div className="p-24">
            <Heading>Admissions</Heading>
            <div className="w-[40vw] max-md:w-96 h-96 bg-gray-200 mx-auto mt-12">
            </div>
        </div>
        </>
    );
}