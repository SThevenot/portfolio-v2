import React from "react";


const MyWorkList = ({
    projects,
    }) => {
      if (!projects.length) {
        return <h3>No Name</h3>;
      }
      return (
        <section>
          {projects &&
        projects.map((project) => (
          <div key={project._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">{project.projectName}
                </h4>
                <div>
                    {project.projectDescription}
                </div>
                </div>
                ))}

        </section>
      )
    }

    export default MyWorkList;