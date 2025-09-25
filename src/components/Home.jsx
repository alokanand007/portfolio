import React from "react";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";
import dp from "../assets/dp.png";
import Myskills from "./MySkills";
import AboutMe from "./AboutMe";
import Works from "./Projects";

function Home() {
  return (
    <div className="scroll-mt-28" id="home-section">
      {/* navbar */}

      <div className="grid grid-cols-2 gap-12 mt-28 mx-12 ">
        <div className="flex justify-center">
          <div className="col-span-1 pt-20">
            <pre className="fontt">
              Hi,
              <br />
              <span>
                I'am{" "}
                <span
                  className="text-sky-600 relative w-[max-content]
                before:absolute before:inset-0 before:animate-typewriter
                before:bg-white
                after:absolute after:inset-0 after:w-[0.110em] after:animate-caret
                after:bg-black"
                >
                  Alok{" "}
                </span>
              </span>
              <br />
              Web Developer
            </pre>
            <div className="">
              <button
                className="bg-sky-600 justify-center items-center w-2/6 h-12 rounded-xl border-2 mt-16 flex text-sm font-roboto   active:bg-violet-400 focus:outline-none "
                type="button"
              >
                <p className="font-semibold text-2xl text-white ">Contact</p>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex justify-center">
            <img src={dp} alt="User" className=" w-4/5" />
          </div>
        </div>
      </div>

      {/* link */}

      {/* tools */}
      <div className="mt-32">
        <Myskills />
      </div>
      <div className="mt-32">
        <AboutMe />
      </div>
      <div className="mt-32">
        <Works />
      </div>
      <div className="mt-20">
        <div className="flex gap-x-6 justify-center	">
          <a href="http://www.instagram.com">
            <img className="h-8" src={instagram} alt="ww"></img>
          </a>
          <a href="http://www.linkedin.com">
            <img className="h-8" src={LinkedIn} alt="ww"></img>
          </a>

          <a href="http://www.github.com">
            <img className="h-8" src={github} alt="ww"></img>
          </a>
        </div>
      </div>

      {/* end */}
    </div>
  );
}

export default Home;
