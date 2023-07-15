import React from "react";

function ProjectList() {
  return (
    <main id="main">
      <section>
        <h2>Application #1</h2>
        <a href="#">
          <img
            src="https://placehold.jp/480x270.png"
            alt="placeholder image, 480 pixels by 270 pixels"
          />{" "}
        </a>
      </section>
      <section class="SmallApp">
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
