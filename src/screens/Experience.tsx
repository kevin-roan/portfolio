import ExperienceCard from "@/components/ExperienceCard";

const Experience = () => {
  return (
    <div className=" mx-10 ">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl">Experience</h2>
        <h2 className="text-[#3C3838]">2 year+</h2>
      </div>
      <div className="py-10 gap-3 ">
        <ExperienceCard
          companyname={"Adacode Solutions"}
          duration={"2024-Present"}
          location={"Calicut,Kerala | OnSite"}
          designation={"Full Stack Developer (React Native / NextJs)"}
        />
        <ExperienceCard
          companyname={"Freelance Developer"}
          duration={"2024-Present"}
          location={
            "Mumbai India, Eranakulam India, AL ZAHOUR RASTANURA Soudi Arabia | Remote"
          }
          designation={"Freelance Developer (ReactJs,NextJs,Sys Admin,Linux)"}
        />
      </div>
    </div>
  );
};
export default Experience;
