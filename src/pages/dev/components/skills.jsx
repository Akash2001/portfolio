import { skillsData } from "../../../data/skills";

export const Skills = () => {
  return (
    <div className="my-12 text-center bg-light-black p-4">
      <div className="my-2">My skills</div>
      <ul className="m-auto w-fit">
        <li className="flex gap-1 flex-wrap">
          <nobr>Languages</nobr>
          <img src={skillsData.html} alt="html" />
          <img src={skillsData.css} alt="css" />
          <img src={skillsData.js} alt="js" />
        </li>
        <li className="mt-2 flex gap-1 flex-wrap">
          <nobr>Frameworks</nobr>
          <img src={skillsData.react} alt="react" />
          <img src={skillsData.next} alt="next" />
          <img src={skillsData.angular} alt="angular" />
        </li>
        <li className="mt-2 text-left">
          <nobr>Databases</nobr> : Mysql, mongodb
        </li>
        <li className="mt-2">
          <nobr>Libraries</nobr> : Bootstrap, react-bootstrap, animate.css,
          material-ui, reduxjs toolkit
        </li>
        <li className="mt-2 flex gap-1 flex-wrap">
          <nobr>Other</nobr>
          <img src={skillsData.git} alt="git" />
          Api integration, firebase, graphql
        </li>
      </ul>
    </div>
  );
};
