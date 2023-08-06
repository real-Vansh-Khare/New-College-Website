export default function Section({ heading, children, id }) {
    return (
      <div className="min-h-[60vh]">
        <h2 className="text-3xl text-bluedark font-bold" id={id}>{heading}</h2>
        <div className="w-1/2 max-md:w-3/4 mt-24 ml-12 max-md:mt-12 max-md:ml-6 text-lg bg-gray-300 mb-12">{children}</div>
      </div>
    );
  };