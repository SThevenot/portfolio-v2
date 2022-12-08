/** @format */

import React from "react";
import "../../styles/MyWork.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from "../../utils/queries";
import { Link } from "react-router-dom";

export default function MyWork() {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];

  console.log(projects.length);
  function iterateCategories() {
    let categories;
    for (let i = 0; i < projects.length; i++) {
      categories += projects[i].category;
    }
    return categories;
  }
  console.log(iterateCategories());

  return (
    <section id="myWork">
      {loading ? (
        <div className="mt-4">loading...</div>
      ) : (
        <Row sm="12" md="6" lg="4" xl="3">
          {projects.map((project) => (
            <Col sm="12" md="6" lg="4" xl="3" className="cardShadow">
              <Card key={project._id} className="m-3 cardStyle">
                <Card.Img variant="top" src={project.projectImg} />
                <Card.Body>
                  <Card.Title>
                    {project.projectName} - {project._id}
                  </Card.Title>
                  <Card.Text>{project.projectDescription}</Card.Text>
                  <Button href={project.projectGithub} target="_blank">
                    <FaGithub />
                  </Button>
                  {!project.projectDeploy ? (
                    <Button className="noDemoBtn"> No Demo Available</Button>
                  ) : (
                    <Button href={project.projectDeploy} target="_blank">
                      Demo
                    </Button>
                  )}
                  <div>
                    {project.category.map((tech) => (
                      <Link
                      to={`/projects/${tech}`}
                      className="links"
                    >{tech}</Link>
                    ))}
                    
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
}
