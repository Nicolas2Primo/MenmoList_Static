import { FiMenu } from "react-icons/fi";
import { AiOutlineLoading } from "react-icons/ai";
import useScrollPosition from "../hooks/useScrollPosition";
import { Link, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import VideoLoadedContext from "../context/VideoLoadedContext";

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { isLoad } = useContext(VideoLoadedContext);

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
    <div className={`w-full h-auto   z-10 fixed   `}>
      <div
        className={`flex justify-between items-center text-white h-[65px] px-4 ${
          scrollPosition > 150 || open
            ? "backdrop-blur-sm bg-black bg-opacity-70"
            : ""
        } transition-all duration-500 ease-in z-20`}
      >
        <Link
          onClick={() => {
            setOpen(false);

            if (location.pathname == "/") {
            } else {
              setLoading(true);
              setTimeout(() => setLoading(false), 2200);
            }
          }}
          to={"/"}
          className=" text-2xl font-bold"
        >
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
      {open ? (
        <div
          onClick={() => {
            setOpen(false);
          }}
          className="h-screen w-screen  absolute   bg-opacity-0"
        />
      ) : null}

      <div
        className={`flex flex-col items-center justify-center gap-3 py-6 text-white transition-all duration-300 ease-in-out  ${
          open ? " opacity-100" : `mt-[-77.5%] opacity-0 `
        }  ${open ? "bg-black bg-opacity-70 backdrop-blur-sm" : ""}  z-[-5] `}
      >
        {links.map((link) => (
          <Link
            onClick={() => {
              setOpen(false);
            }}
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
      {isLoad ? (
        <div className="w-full h-screen bg-black flex items-center justify-center absolute z-30">
          <AiOutlineLoading
            size={60}
            color="white"
            className=" animate-spin"
          ></AiOutlineLoading>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
