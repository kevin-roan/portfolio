interface ProjectCardProps {
  title: string;
  desc: string;
  imgUrl: string;
  tech: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  desc,
  imgUrl,
  tech,
}) => {
  return (
    <div className="projectcard  border-[0.5px] border-[#222222] p-3 sm:w-[50vmax] md:w-[40vmax] lg:w-[20vmax] my-4 rounded-md hover:translate-y-4 ease-out duration-300">
      <img src={"/projectPlaceholder.png"} className="h-40 w-full mx-auto" />
      <div className="py-4">
        <h5>{title}</h5>
        <p className="font-mono text-[#666666]">{desc}</p>
        <span className="flex flex-wrap">
          {tech.map((item, _) => (
            <ul className="border-[0.5px] border-[#222222]  px-2 my-1" key={_}>
              {item}
            </ul>
          ))}
        </span>
      </div>
      <div className="flex items-center justify-between my-2 flex-wrap">
        <button className="bg-white mx-4 text-black px-3 hover:bg-black ease-in-out  duration-300 hover:text-white border-2">
          Demo
        </button>
        <button className="border-2 mx-4 text-white px-3 hover:bg-white hover:text-black ease-in-out duration-300">
          SourceCode
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
