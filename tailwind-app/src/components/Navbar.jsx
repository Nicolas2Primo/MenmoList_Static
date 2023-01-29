import { FiMenu } from "react-icons/fi";
import useScrollPosition from "../hooks/useScrollPosition";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const [open, setOpen] = useState(false);

  const [links, setLinks] = useState([
    {
      nome: "Create List",
      link: "/create",
    },
    {
      nome: "Login",
      link: "/login",
    },
    {
      nome: "About",
      link: "/about",
    },
  ]);

  return (
    <div className={`w-full h-auto  z-10 fixed   `}>
      <div
        className={`flex justify-between items-center text-white h-[65px] px-4 ${
          scrollPosition > 150 || open
            ? "backdrop-blur-sm bg-black bg-opacity-70"
            : ""
        } transition-all duration-500 ease-in z-20`}
      >
        <Link to={"/"} className=" text-2xl font-bold">
          MenmoList
        </Link>
        <FiMenu
          onClick={() => {
            setOpen(!open);
            console.log(open);
          }}
          size={25}
          className="md:hidden"
        ></FiMenu>
        <div className="hidden md:flex md:gap-14 md:font-semibold">
          {links.map((link) => (
            <Link key={link.nome} to={link.link}>
              {link.nome}
            </Link>
          ))}
        </div>
      </div>
      <div
        onClick={() => {
          setOpen(false);
        }}
        className="h-screen w-screen  absolute   bg-opacity-0"
      ></div>
      <div
        className={`flex flex-col items-center justify-center gap-3 py-6 text-white transition-all duration-300 ease-in-out  ${
          open ? " opacity-100" : `mt-[-70%] opacity-0 `
        }  ${open ? "bg-black bg-opacity-70 backdrop-blur-sm" : ""}  z-[-5] `}
      >
        {links.map((link) => (
          <Link
            key={link.nome}
            to={link.link}
            className={`${
              link.nome == "About"
                ? ""
                : "border-b-2 border-gray-400 border-opacity-50"
            } pb-3`}
          >
            {link.nome}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
