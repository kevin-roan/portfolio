import ExperienceCard from "@/components/ExperienceCard";

const Experience = () => {
  return (
    <div className=" mx-10 ">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl">Experience</h2>
        <h2 className="text-[#3C3838] mx-3">2 year+</h2>
      </div>
      <div className="py-10 gap-3 ">
        <ExperienceCard
          companyname={"Adacode Solutions"}
          duration={"2024 Jan -Present"}
          location={"Calicut,Kerala | OnSite"}
          designation={
            "Full Stack Developer (React Native / NextJs,ElectronJs)"
          }
        />
        <ExperienceCard
          companyname={"Freelance Developer"}
          duration={"2023 March -Jan 2024 "}
          location={"Pixel Experience , Bluegen Solutions , Hsatco | Remote"}
          designation={
            "Freelance Developer (ReactJs,NextJs,Sys Admin,Linux,AOSP)"
          }
        />
      </div>
    </div>
  );
};
export default Experience;
