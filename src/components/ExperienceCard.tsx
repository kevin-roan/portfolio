interface Props {
  designation: string;
  duration: string;
  companyname: string;
  location: string;
}

const ExperienceCard = ({ designation, duration, companyname, location }) => {
  return (
    <div className="border-[0.5px] px-10 border-color: rgb(82 82 91) p-9 rounded-md my-4">
      <h4 className="text-xl">{designation}</h4>
      <p className="text-[#464545]">{duration}</p>
      <div className="my-2">
        <p className="text-[#464545]">{companyname}</p>
        <p className="text-[#464545] text-sm">{location}</p>
      </div>
    </div>
  );
};
export default ExperienceCard;
