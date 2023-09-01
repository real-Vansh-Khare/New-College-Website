import Link from "next/link";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
type heading = {
    heading: string
}
const ExploreCourse = ({heading}:heading) => {
    return(
    <div className="mb-12 flex gap-4 justify-center items-center bg-gray-100 p-2 max-md:flex-col">
        <div className="w-24 aspect-square bg-gray-300 max-md:w-full"></div>
        <div className="flex flex-col gap-2">
            <div className="text-2xl">{heading}</div>
            <div className="font-light text-xl">Find details about our undergraduate and postgraduate courses here</div>
            <Link href="courses">
                <div className="text-bluel font-medium">Admissions</div>
            </Link>
        </div>
    </div>
    );
}

export default function Admissions() {
    return(
        <>
        <Navbar />
        <div className="p-24">
            <Heading>Admissions</Heading>
            <div className="w-[40vw] max-md:w-96 h-96 bg-gray-200 mx-auto mt-12">
            </div>
            <div className="mt-12 text-lg text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est enim quae, quos sed id porro fugiat, vitae officia assumenda perspiciatis nam laudantium. Odio, amet aliquam vitae incidunt totam veniam laboriosam quos reiciendis eligendi necessitatibus?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis itaque eius esse quas laboriosam, debitis vero consequatur fugiat hic enim sunt culpa eveniet iusto, fuga, optio atque! Minima, provident id in qui harum beatae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non numquam doloremque fuga nam ipsum! Laudantium maiores voluptatum, laboriosam unde iste iure quam at nisi natus labore odit, temporibus cum, error et accusantium enim ut.
            </div>
        </div>
        <div className="flex flex-col justify-around items-center p-12">
            <ExploreCourse heading="Undergraduate"/>
            <ExploreCourse heading="Postgraduate"/>
        </div>
        </>
    );
}