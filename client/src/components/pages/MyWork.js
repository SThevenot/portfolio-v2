/** @format */

import React, { useState, useEffect } from "react";
import "../../styles/MyWork.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getAllProjects } from "../../utils/api";

const MyWork = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProjectService.getProjects();
        setProjects(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(projects);

  return (
    <section id="myWork">
      <Row>
      {projects.map((project) => (
        <Col sm="12" md="6" lg="4" xl="3" className="cardShadow">
          <Card key={project.id} className="m-3 cardStyle">
            <Card.Img variant="top" src={project.projectImg}/>
            <Card.Body>
            <Card.Title>{project.projectName}</Card.Title>
            <Card.Text>{project.projectDescription}</Card.Text>
<Button
            href={project.projectGithub}
            target="_blank"
          >
            <FaGithub />
          </Button>
          {!project.projectDeploy
          ? <Button className="noDemoBtn"> No Demo Available</Button>
          :  <Button
          href={project.projectDeploy}
          target="_blank"
        >
          Demo
        </Button>
          }
         
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </section>
  );
}