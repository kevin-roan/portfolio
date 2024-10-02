import ProjectCard from "@/components/ProjectCard";
import projects from "@/contants/projects";

const Projects = () => {
  return (
    <div className="mx-10">
      <h3 className="text-4xl">Projects / My Works</h3>
      <div className="flex flex-wrap gap-10 justify-center">
        {projects.map((project, _) => (
          <ProjectCard
            imgUrl={project.imgUrl}
            title={project.title}
            desc={project.desc}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
};
export default Projects;
