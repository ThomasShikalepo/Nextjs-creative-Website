import React from "react";
import ProjectsLayout from "./ProjectsLayout";

const ProjectList = ({ projects }) => {
  return (
    <div className="w-full max-w-aut px-4 mx-auto xl:max-w-4xl space-y-6 lg:px-16 md:space-y-8 flex flex-col items-center">
      {projects.map((project, index) => {
        return <ProjectsLayout key={index} {...project} />;
      })}
    </div>
  );
};

export default ProjectList;
 