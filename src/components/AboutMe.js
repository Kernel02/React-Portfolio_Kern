import React from "react";

function AboutMe() {
  return (
    <section id="aboutme">
      <h2>About Me</h2>
      <img
        className="cardImgTop"
        src={require("../images/1D656CF0-4CD9-4147-AEA5-14BB5C4A5A37_1_201_a.jpeg")}
        alt="Jacob Kern in a blue suit standing next to his wife."
      />
      <p className="cardText">
        I'm 21 years old and live in Buckingham, VA. I currently live on and
        work at Virginia Nazarene Retreat Center as a caretaker. I've been in
        the Air Force Reserve since October, 2021 as an aerospace propulsion
        apprentice. Throughout middle and high school I played the bassoon and
        saxophone, played in and was even the drum major of my high school
        marching band.
      </p>
    </section>
  );
}

export default AboutMe;
