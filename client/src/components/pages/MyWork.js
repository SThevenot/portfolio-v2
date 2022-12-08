/** @format */

import React, { useState, useEffect } from "react";
import "../../styles/MyWork.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { split, useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from "../../utils/queries";
import { Link } from "react-router-dom";

export default function MyWork() {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];
  const keys = Object.keys(projects);

  function getObjKey() {
    var catArr = [];
    const iterator = catArr.values();
    for (var i = 0; i < projects.length; i++) {
      let projectCat = projects[i].category;
      catArr.push(projectCat).toString();
      for (const value of iterator) {
        var splitted = value.split(" ");
        console.log(splitted.length)
      }
      for (var j = 0; j < splitted.length; i++) {
        return <button>{splitted[i]}</button>
      }
    }

  }

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
                    <button>
                      <Link
                        to={`/projects/${project.category}`}
                        className="links"
                      ></Link>
                      <button>{getObjKey()}</button>;
                    </button>
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
