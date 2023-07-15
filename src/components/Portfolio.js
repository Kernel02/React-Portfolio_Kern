import React, { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import AboutMe from "./AboutMe";
import ProjectList from "./ProjectList";
import ContactMe from "./ContactMe";
import Resume from "./Resume";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    } else if (currentPage === "Projects") {
      return <ProjectList />;
    } else if (currentPage === "ContactMe") {
      return <ContactMe />;
    } else {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <Nav handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
