import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className=" flex justify-between  ">
      <div className="flex items-center text-[20px]">
        <Link to={"/"}>
          <img src="/logo.svg" alt="" />
        </Link>
      </div>
    </nav>
  );
};
