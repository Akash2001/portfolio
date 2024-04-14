import { useState } from "react";
import { Intro } from "./components/intro";
import { Experience } from "./components/experience";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import {
  ajaxProjects,
  basicProjects,
  reactProjects,
  nextProjects,
} from "../../data";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/styles.css";
import { Education } from "./components/education";

const Home = () => {
  const [selectedProjectType, setSelectedProjectType] = useState("react");

  return (
    <div className="details">
      <Intro />
      <div id="intro">
        <Experience />
        <Education />
        <Skills />
        <div className="mt-8 bg-light-black text-center p-4">
          <a href="mailto:akashngadhave@gmail.com">Hire me !</a>
          <p>Following are some projects I worked on.</p>
        </div>
      </div>
      <div className="intro">
        <div className="flex justify-center">
          <select
            value={selectedProjectType}
            onChange={(e) => setSelectedProjectType(e.target.value)}
          >
            <option value={"react"}>React JS projects</option>
            <option value={"next"}>NextJS projects</option>
            {/* <option value={"angular"}>Angular projects</option> */}
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
              : selectedProjectType === "next"
              ? nextProjects
              : basicProjects
          }
        />
      </div>
    </div>
  );
};

export default Home;
