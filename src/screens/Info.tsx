import Image from "next/image";

const Info = () => {
  return (
    <div className="flex items-center h-[100vh]">
      <div className="p-10">
        <h1 className="text-5xl">Kevin Roan</h1>
        <h3 className="border-l-white">Full Stack Developer</h3>
        <h3>UI/UX Designer</h3>
        <p>
          I am a 21 year old professional Web developer who earned a Bachelor of
          Computer Application Since then, I've been working as a Freelance
          Web-Developer Most of my projects involve developing frontend
          applications using React and Typescript.
        </p>
        <button className="bg-white text-black font-[600] px-2 my-4">
          Download Cv
        </button>
      </div>
      <div className="threejsobject">
        <Image
          height={540}
          width={540}
          src={"/threejscard.png"}
          alt="ThreeJs Card"
        />
      </div>
    </div>
  );
};

export default Info;
