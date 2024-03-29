import { skillsData } from "../../../data/skills";

export const Skills = () => {
  return (
    <div className="my-4" id="mySkills">
      My skills : <br />
      <ul>
        <li className="flex gap-1">
          <nobr>Languages</nobr>
          <img src={skillsData.html} alt="html" />
          <img src={skillsData.css} alt="css" />
          <img src={skillsData.js} alt="js" />
        </li>
        <li className="mt-2 flex gap-1">
          <nobr>Frameworks</nobr>
          <img src={skillsData.react} alt="react" />
          <img src={skillsData.next} alt="next" />
          <img src={skillsData.angular} alt="angular" />
        </li>
        <li className="mt-2">
          <nobr>Databases</nobr> : Mysql, mongodb
        </li>
        <li className="mt-2">
          <nobr>Libraries</nobr> : Bootstrap, react-bootstrap, animate.css,
          material-ui, reduxjs toolkit
        </li>
        <li className="mt-2 flex gap-1">
          <nobr>Other</nobr>
          <img src={skillsData.git} alt="git" />
          Api integration, firebase, graphql
        </li>
      </ul>
    </div>
  );
};
