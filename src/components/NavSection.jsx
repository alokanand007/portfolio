import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Navsection() {
  const [scroll, setScroll] = useState("");
  const [currentQueryParameters] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Adds shadow to navbar on scroll
  const onScroll = () => {
    if (window.scrollY < 15) {
      setScroll("");
    } else {
      setScroll("shadow-lg");
    }
  };

  // Handle scroll-to-section from URL param
  useEffect(() => {
    const param = currentQueryParameters.get("section");
    if (param) {
      setTimeout(() => {
        handleChangetosection(param);
      }, 100); // Delay ensures DOM is rendered
    }
  }, [location.search]);

  // Scroll to a section smoothly
  const handleChangetosection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100; // Adjust based on navbar height
      const top =
        section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  };

  // Handle nav link clicks
  const handleScrollTo = (section) => {
    if (location.pathname !== "/") {
      navigate(
        { pathname: "/", search: `?section=${section}` },
        { replace: true }
      );
    } else {
      navigate(`/?section=${section}`, { replace: true });
    }
  };

  // Attach scroll listener to add shadow to navbar
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`${scroll} w-full ${
        location.pathname === "/ContactUs" && !scroll
          ? "bg-transparent"
          : "bg-white"
      } z-10 fixed top-0 flex flex-row-reverse transition-colors duration-300`}
    >
      <div className="w-1/2 abt flex justify-between pb-4 pt-9 px-10">
        <span
          className="clo text-nav font-semibold relative cursor-pointer"
          onClick={() => handleScrollTo("home-section")}
        >
          Home
        </span>
        <span
          className="clo text-nav font-semibold relative cursor-pointer"
          onClick={() => handleScrollTo("skill-section")}
        >
          Skills
        </span>
        <span
          className="clo text-nav font-semibold relative cursor-pointer"
          onClick={() => handleScrollTo("about-section")}
        >
          About Me
        </span>
        <span
          className="clo text-nav font-semibold relative cursor-pointer"
          onClick={() => handleScrollTo("works-section")}
        >
          Projects
        </span>

        <Link
          to="/ContactUs"
          className="clo text-2xl font-semibold relative cursor-pointer"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}

export default Navsection;
