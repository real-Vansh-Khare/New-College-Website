import Section from "../components/Section";
import TableOfContents from "../components/TableOfContents";



export default function FullAbout() {
  return (
    <div className="grid grid-cols-4">
      <label for="mobile-table" className="md:hidden fixed top-2 left-0 w-8 h-8 flex justify-center items-center z-30 bg-[rgba(0,0,0,0.5)] text-white">
          &gt;
        </label>
      <TableOfContents name="About Us"/>
      <div className="absolute md:left-[25%] col-span-3 max-md:cols-span-4 py-12 ml-12">
        <Section id="sh-1" heading="Section heading">
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
        </Section>
        <Section id="sh-2" heading="Section heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          ipsa enim optio aut deleniti! Laborum officia debitis dignissimos
          dicta aliquam non incidunt molestias consequatur sapiente illum
          quaerat deserunt perferendis culpa quae, nam suscipit tenetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          ipsa enim optio aut deleniti! Laborum officia debitis dignissimos
          dicta aliquam non incidunt molestias consequatur sapiente illum
          quaerat deserunt perferendis culpa quae, nam suscipit tenetur.
        </Section>
        <Section id="sh-3" heading="Section heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          ipsa enim optio aut deleniti! Laborum officia debitis dignissimos
          dicta aliquam non incidunt molestias consequatur sapiente illum
          quaerat deserunt perferendis culpa quae, nam suscipit tenetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          ipsa enim optio aut deleniti! Laborum officia debitis dignissimos
          dicta aliquam non incidunt molestias consequatur sapiente illum
          quaerat deserunt perferendis culpa quae, nam suscipit tenetur.
        </Section>
        <Section id="sh-4" heading="Section heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          ipsa enim optio aut deleniti! Laborum officia debitis dignissimos
          dicta aliquam non incidunt molestias consequatur sapiente illum
          quaerat deserunt perferendis culpa quae, nam suscipit tenetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          ipsa enim optio aut deleniti! Laborum officia debitis dignissimos
          dicta aliquam non incidunt molestias consequatur sapiente illum
          quaerat deserunt perferendis culpa quae, nam suscipit tenetur.
        </Section>
        <Section id="sh-5" heading="Section heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          ipsa enim optio aut deleniti! Laborum officia debitis dignissimos
          dicta aliquam non incidunt molestias consequatur sapiente illum
          quaerat deserunt perferendis culpa quae, nam suscipit tenetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          ipsa enim optio aut deleniti! Laborum officia debitis dignissimos
          dicta aliquam non incidunt molestias consequatur sapiente illum
          quaerat deserunt perferendis culpa quae, nam suscipit tenetur.
        </Section>
      </div>
    </div>
  );
}
