import Image from "next/image";

const Info = () => {
  return (
    <div className="flex items-center h-[70vh] justify-around">
      <div className="p-10 ">
        <h1 className="text-5xl lg:text-7xl">Kevin Roan</h1>
        <h3 className=" border-l-2 px-2 my-2 lg: text-2xl mx-1">
          Full Stack Developer
        </h3>
        <h3 className="border-l-2 px-2 my-2 lg:text-2xl mx-1">
          UI/UX Designer
        </h3>
        <p className="text-[#505050] leading-relaxed w-[50vmax] lg:text-xl text-left">
          I am a 22 year old professional Web developer who earned a Bachelor of
          Computer Application. Since then, I've been working as a Freelance
          Web-Developer Most of my projects involve developing frontend
          applications using React and Typescript.
        </p>
        <button className="bg-white text-black font-[600] px-3 my-4 py-1">
          Download Cv
        </button>
      </div>
      <div className="threejsobject">
        <Image
          height={400}
          width={200}
          src={"/threejscard.png"}
          alt="ThreeJs Card"
        />
      </div>
    </div>
  );
};

export default Info;
