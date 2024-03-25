import { useState } from "react";
import { Intro } from "./intro";
import { Experience } from "./experience";
import { Skills } from "./skills";
import { Projects } from "./projects";
import { ajaxProjects, basicProjects, reactProjects } from "../../data";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/styles.css";

const Home = () => {
  const [selectedProjectType, setSelectedProjectType] = useState("react");

  return (
    <div className="details">
      <Intro />
      <div id="intro">
        <Experience />
        <Skills />
        <a href="mailto:akashngadhave@gmail.com">Hire me !</a>
        <p>Following are some projects I worked on.</p>
      </div>
      <div className="d-flex justify-content-center">
        <select
          value={selectedProjectType}
          onChange={(e) => setSelectedProjectType(e.target.value)}
        >
          <option value={"react"}>React JS projects</option>
          <option value={"ajax"}>Ajax projects</option>
          <option value={"basic"}>Html, css and javascript projects</option>
        </select>
      </div>
      <Projects
        projects={
          selectedProjectType === "react"
            ? reactProjects
            : selectedProjectType === "ajax"
            ? ajaxProjects
            : basicProjects
        }
      />
    </div>
  );
};

export default Home;
