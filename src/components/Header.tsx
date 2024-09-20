import Link from "next/link";

const Header = () => {
  return (
    <div className="header border-b-[0.2px] border-[#434343] flex justify-between items-center h-20 p-4">
      <h4 className="text-[#3A3535]">Last updated 13-07-2024</h4>{" "}
      <div className="flex gap-9">
        <h4 className="hover:text-[#FF5C00] ease-in-out duration-500">
          <Link href="/contact" className="text-sm text-wrap">
            Contact Me
          </Link>
        </h4>
        <h4 className="hover:text-[#FF5C00] ease-in-out duration-500">
          <Link href="/hireme" className="text-sm ">
            Hire me
          </Link>
        </h4>
      </div>
    </div>
  );
};
export default Header;
