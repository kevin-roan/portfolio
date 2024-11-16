import React from "react";
import Image from "next/image";

const TechStack = () => {
  return (
    <div className="mx-10">
      <h2 className="text-4xl">My Tech Stack</h2>
      <div className="flex gap-4 m-3 mx-auto justify-between sm:flex-col lg:flex-row flex-wrap">
        <div className="border-[0.5px] border-[#222222] px-9 py-4 max-w-[90vw]">
          <Stack
            stack="Front End"
            framework="ReactJs/NextJs"
            languages="TailwindCSS,ShadCn, Material Ui, Material Tailwind,SCSS, Chakra Ui"
          />
          <Stack
            stack="Back End"
            framework="NodeJs,Firebase,Socket.io,Mongoose"
            languages="TypeScript/JavaScript,Sql,Bash"
          />
          <Stack
            stack="DataBases"
            framework="MongoDB,MySql,Firebase"
            languages="NoSql,Sql,DBMS"
          />
        </div>
        <div>
          <h2 className="text-2xl">Social</h2>
          <div className="border-[0.5px] border-[#222222] my-4 p-4">
            <h4>Blogs: https://blogs.kevinroan.in</h4>
            <h4>LinkedIn: https://linkedin/in/kevinroan</h4>
            <h4>Twitter: https://x.com/kevinroan_</h4>
            <h4>Instagram: https://instagram.com/kevinroan_</h4>
          </div>
          <div className="border-[0.5px] border-[#222222] p-2">
            <h2 className="text-[#FF5C00] font-bold text-xl">Signature</h2>
            <p className="text-sm">~ Designed and Developed by Kevin Roan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface StackProps {
  stack: string;
  framework: string;
  languages: string;
}

const Stack: React.FC<StackProps> = ({
  stack,
  framework,
  languages,
}: StackProps) => {
  return (
    <div className="">
      <h4 className="my-4 font-[500] max-w-[90vw]">{stack}</h4>
      <p className="">{framework}</p>
      <p className="font-normal">{languages}</p>
    </div>
  );
};
export default TechStack;
