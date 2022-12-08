/** @format */

import React  from "react";
import "../../styles/MyWork.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTSREACT } from "../../utils/queries";
// import { useLocation } from "react-router-dom";
//for url path

export default function ProjectFilter() {
  const { loading, data } = useQuery(QUERY_PROJECTSREACT);
  const projects = data?.projects || [];
  console.log(projects);

  return (
    <section id="myWork">
      {loading ? (
        <div className="mt-4">loading...</div>
      ) : (
        <Row sm="12" md="6" lg="4" xl="3">
          {projects.map((project) => (
            <Col sm="12" md="6" lg="4" xl="3" className="cardShadow">
              <Card key={project.id} className="m-3 cardStyle">
                <Card.Img variant="top" src={project.projectImg} />
                <Card.Body>
                  <Card.Title>{project.projectName}</Card.Title>
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
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
}
