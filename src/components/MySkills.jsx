import React from "react";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import js from "../assets/js.png";
import tailwind from "../assets/Tailwind.png";
import Reactpng from "../assets/React.png";

function Myskills() {
  return (
    <div className="scroll-mt-24" id="skill-section">
      <div className="flex justify-center mb-20 ">
        <h1 className="font-skill  skill-heading">My Skills</h1>
      </div>

      {/* icons */}
      <div className="grid grid-cols-4 mx-28 gap-y-10 justify-items-center">
        <img
          src={html}
          alt="HTML"
          className="w-1/2 rounded-lg p-3 transition-transform duration-300 hover:scale-110 hover:shadow-xl "
        />
        <img
          src={css}
          alt="CSS"
          className="w-1/2 rounded-lg p-3 transition-transform duration-300 hover:scale-110 hover:shadow-xl"
        />
        <img
          src={js}
          alt="JavaScript"
          className="w-1/2 rounded-lg p-3 transition-transform duration-300 hover:scale-110 hover:shadow-xl"
        />
        <img
          src={tailwind}
          alt="Tailwind CSS"
          className="w-1/2 rounded-lg p-3 transition-transform duration-300 hover:scale-110 hover:shadow-lg"
        />
        <img
          src={Reactpng}
          alt="Tailwind CSS"
          className="w-1/2 rounded-lg p-3 transition-transform duration-300 hover:scale-110 hover:shadow-lg"
        />

      </div>
    </div>
  );
}

export default Myskills;
