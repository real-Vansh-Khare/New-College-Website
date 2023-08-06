import Heading from "../components/Heading";

const Content = () => {
    return(
        <div className="flex justify-start h-full gap-10 mt-10 flex-wrap">
            <div className="w-1/3 max-lg:w-[35vw] max-md:w-full md:h-full flex flex-col justify-center text-justify text-2xl gap-10">
                <p>Indian Institute of Information Technology, Lucknow (IIIT Lucknow) is one of the 20 IIITs being set up by the Central Government in Public Private Partnership (PPP) mode.</p>
                <p>IIIT Lucknow currently offers all the amenities, academic and non-academic to its students that can help them flourish and serve the nation with all their apprehension in the various fields of technology. The admission is made through central counselling of candidates who qualify in JEE (Mains).</p>
            </div>
            <div className="w-1/2 max-md:w-full h-[80vh] bg-gray-300"></div>
        </div>
    );
}

export default function Club({name}) {
    return(
        <div className="min-h-[80vh] mt-[5vh] mx-[5vw]">
            <Heading>About {name}</Heading>
            <Content />
        </div>
    );
}