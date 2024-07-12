const ProjectCard = () => {
  return (
    <div className="projectcard  border-2 p-3 w-[40%] my-4 rounded-md ">
      <img src={"/projectPlaceholder.png"} className="h-40" />
      <h5>Adacode Solutions</h5>
      <p className="font-mono text-[#666666]">Full Stack Website</p>
      <p className="font-mono text-[#666666]">
        Razorpay and firebase Integrations
      </p>
      <div className="flex items-center justify-between">
        <button className="bg-white mx-4 text-black px-3">Demo</button>
        <button className="border-2 mx-4 text-white px-3">Github</button>
      </div>
    </div>
  );
};

export default ProjectCard;
