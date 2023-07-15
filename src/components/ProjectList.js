import React from "react";

function ProjectList() {
  return (
    <main id="main">
      <section>
        <h2>Assistant Manager</h2>
        <a href="https://dry-tor-49365.herokuapp.com/">
          <img
            src={require("../images/Screenshot 2023-07-15 at 17.02.45.png")}
            alt="Assistant Manager Application"
          />
        </a>
      </section>
      <section className="SmallApp">
        <div>
          <h3>Application #2</h3>
          <a href="#">
            <img
              src="https://placehold.jp/320x180.png"
              alt="placeholder image, 320 pixels by 180 pixels"
            />{" "}
          </a>
        </div>
        <div>
          <h3>Application #3</h3>
          <a href="#">
            <img
              src="https://placehold.jp/320x180.png"
              alt="placeholder image, 320 pixels by 180 pixels"
            />{" "}
          </a>
        </div>
      </section>
    </main>
  );
}

export default ProjectList;
