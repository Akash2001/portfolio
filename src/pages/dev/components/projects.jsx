import { Cards } from "./cards";

export const Projects = ({ projects }) => {
  return (
    <div className="row my-12">
      {projects.map((project, index) => {
        return (
          <Cards
            key={index}
            name={project.name}
            img={project.img}
            link={project.link}
            description={project.description}
          />
        );
      })}
    </div>
  );
};
