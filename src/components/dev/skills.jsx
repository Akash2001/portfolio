import { skillsData } from "../../data/skills";

export const Skills = () => {
  return (
    <div className="my-4" id="mySkills">
      My skills : <br />
      <ul>
        <li>
          <nobr className="mr-4">Languages</nobr>
          <img className="mr-4" src={skillsData.html} alt="html" />
          <img className="mr-4" src={skillsData.css} alt="css" />
          <img className="mr-4" src={skillsData.js} alt="js" />
        </li>
        <li className="mt-2">
          <nobr className="mr-4">Frameworks</nobr>
          <img className="mr-4" src={skillsData.react} alt="react" />
          <img className="mr-4" src={skillsData.next} alt="next" />
          <img className="mr-4" src={skillsData.angular} alt="angular" />
        </li>
        <li className="mt-2">
          <nobr>Databases</nobr> : Mysql, mongodb
        </li>
        <li className="mt-2">
          <nobr>Libraries</nobr> : Bootstrap, react-bootstrap, animate.css,
          material-ui, reduxjs toolkit
        </li>
        <li className="mt-2">
          <nobr className="mr-4">Other</nobr>
          <img className="mr-4" src={skillsData.git} alt="git" />
          Api integration, firebase, graphql
        </li>
      </ul>
    </div>
  );
};
