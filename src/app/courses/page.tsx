import Link from "next/link";
import Navbar from "../../components/Navbar";
import Subheading from "../../components/Subheading";

const Program = ({heading}:any) => {
    return(
        <div>
            <Subheading>{heading}</Subheading>
            <div className="flex justify-between py-2 flex-wrap">
                <div className="w-2/5 max-md:w-full h-48 bg-gray-300"></div>
                <div className="w-2/5 max-md:w-full">
                    <h3 className="text-2xl text-bluedark font-bold">
                        Courses Offered
                    </h3>
                    <ul className="list-disc pl-6">
                        <li>
                            <Link href={`/courses/${heading}1`}>list1</Link>
                        </li>
                        <li>
                            <Link href={`/courses/${heading}2`}>list2</Link>
                        </li>
                        <li>
                            <Link href={`/courses/${heading}3`}>list3</Link>
                        </li>
                        <li>
                            <Link href={`/courses/${heading}4`}>list4</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default function Courses() {
    return(
        <>
        <Navbar />
        <div className="flex flex-col gap-10 p-20">
            <Program heading='Undergraduate' />
            <Program heading='Post Graduate' />
        </div>
        </>
    );
}