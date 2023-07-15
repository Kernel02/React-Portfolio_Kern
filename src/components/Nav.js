import React from "react";

function Nav({ handlePageChange }) {
  return (
    <nav>
      <h2>
        <a href="#aboutme" onClick={() => handlePageChange("AboutMe")}>
          About Me
        </a>
      </h2>
      <h2>
        <a href="#projects" onClick={() => handlePageChange("Projects")}>
          Projects
        </a>
      </h2>
      <h2>
        <a href="#contactme" onClick={() => handlePageChange("ContactMe")}>
          Contact Me
        </a>
      </h2>
      <h2>
        <a href="#resume" onClick={() => handlePageChange("Resume")}>
          Resume
        </a>
      </h2>
    </nav>
  );
}

export default Nav;
