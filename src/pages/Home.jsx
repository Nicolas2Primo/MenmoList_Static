import React, { useContext, useRef, useEffect } from "react";
import VideoLoadedContext from "../context/VideoLoadedContext";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

const Home = () => {
  const { handleLoad, isLoaded, setIsLoaded } = useContext(VideoLoadedContext);
  const videoCurrent = useRef(HTMLVideoElement);
  useEffect(() => {
    if (videoCurrent.current) {
      videoCurrent.current.play().catch(() => {
        if (videoCurrent.current) videoCurrent.current.controls = true;
      });
    }
  }, []);
  return (
    <div className=" z-0">
      <div className="absolute flex justify-center md:justify-start items-center md:items-end w-full h-screen bg-black bg-opacity-40">
        <span className="text-white  w-[250px] md:w-[500px]  md:pl-16 md:pb-32 text-2xl md:text-4xl font-bold ">
          Welcome to the most innovative to-do list ever.
        </span>
      </div>
      <header className="h-screen">
        <video
          ref={videoCurrent}
          onContextMenu={(e) => {
            e.preventDefault();
          }}
          autoPlay={true}
          loop={true}
          onLoadedData={() => {
            handleLoad();
          }}
          muted={true}
          defaultMuted
          playsInline
          className=" h-screen w-screen object-cover"
        >
          <source src={"/BackgroundVideo.mp4"} type="video/mp4" />
        </video>
      </header>
      <footer className="bg-black  h-fit   text-white flex flex-col  justify-start items-start md:items-start gap-5   md:flex-col py-10 md:px-10 px-5   ">
        <h1 className=" text-xl font-bold">MenmoList</h1>
        <div className="grid grid-cols-2 grid-rows-2  w-full  gap-4 md:gap-0  py-10 md:grid-cols-4 md:grid-rows-1 md:w-full md:justify-between md:py-16  ">
          <div className="flex flex-col justify-start">
            <span className="pb-2 font-bold text-sm">FEATURED</span>
            <div className="flex flex-col gap-[2px]">
              <span className="">MenmoList</span>
              <span className="">Startup Fund</span>
            </div>
          </div>
          <div className="flex flex-col justify-start ">
            <span className="pb-2 font-bold text-sm">BLOG</span>

            <div className="flex flex-col gap-[2px]">
              <span>Index</span>
              <span>Research</span>
              <span>Announcements</span>
              <span>Events</span>
            </div>
          </div>
          <div className="flex flex-col justify-start  w-fit md:w-full">
            <span className="pb-2 font-bold text-sm">INFORMATION</span>
            <div className="flex flex-col gap-[2px]">
              <span>About Us</span>
              <span>Careers</span>
              <span>Publications</span>
              <span>Newsroom</span>
              <span>Our Charter</span>
            </div>
          </div>
          <div className="flex flex-col justify-start w-fit md:w-full">
            <span className="pb-2 font-bold text-sm">API</span>
            <div className="flex flex-col gap-[2px]">
              <span>Overview</span>
              <span>Pricing</span>
              <span>Examples</span>
              <span>Docs</span>
              <span>Log in</span>
              <span>Terms & Policies</span>
              <span>Status</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full items-center justify-between gap-6 md:gap-0">
          <div className="flex flex-wrap gap-2 md:gap-10">
            <span className="text-md font-bold">MenmoList © 2023</span>
            <span className="text-md font-bold">Privacy Policy</span>
            <span className="text-md font-bold">Terms of Use</span>
          </div>
          <div className="flex gap-7 md:gap-6 items-center">
            <BsTwitter size={24}></BsTwitter>
            <BsFacebook size={24}></BsFacebook>
            <BsYoutube size={24}></BsYoutube>
            <BsGithub size={24}></BsGithub>
            <BsLinkedin size={24}></BsLinkedin>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
