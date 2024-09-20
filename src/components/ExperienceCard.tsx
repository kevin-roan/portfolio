import React from "react";

interface Props {
  designation: string;
  duration: string;
  companyname: string;
  location: string;
}

const ExperienceCard: React.FC<Props> = ({
  designation,
  duration,
  companyname,
  location,
}: Props) => {
  return (
    <div className="border-[0.5px] border-[#222222] px-10  p-9 my-4">
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
