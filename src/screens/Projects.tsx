import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <div className="mx-10">
      <h3 className="text-4xl">Projects / My Works</h3>
      <div className="flex flex-wrap gap-10 justify-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};
export default Projects;
