/** @format */

import React, { useState } from "react";
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
  const [inputs, setInputs] = useState({
    searchCategory: "",
  });

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];
  console.log(projects);
  function displayCategories() {
    const arr = [];
    var next;
    projects.map((project) => {
      const categories = project.category;
      arr.push(categories);
      next = arr.toString().split(",");
      console.log(next);
    });
    var findDuplicate = (next) =>
      next.filter((item, index) => next.indexOf(item) === index);
    const filtered = findDuplicate(next);
    return filtered;
  }
  displayCategories();
  const displayCategoryBtn = displayCategories();

  return (
    <section id="myWork">
      {loading ? (
        <div className="mt-4">loading...</div>
      ) : (
        <div id="filterHeader">
          <h2>Please select a filter</h2>

          <div id="filterButtonsTop">
            {displayCategoryBtn.map((technology) => (
              <Link
                id="links"
                to={`/projects/${technology}`}
                name="searchCategory"
              >
                {technology}
              </Link>
            ))}
          </div>
        </div>
      )}
      {loading ? (
        <div className="mt-4">loading...</div>
      ) : (
        <Row sm="12" md="6" lg="4" xl="3">
          {projects.map((project) => (
            <Col sm="12" md="6" lg="4" xl="3" className="cardShadow">
              <Card key={project._id} className="m-3  cardStyle">
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
                  <hr></hr>
                  <div className="techBtnDiv">
                    {project.category.map((tech) => (
                      <Link
                        to={`/projects/${tech}`}
                        name="searchCategory"
                        onChange={handleChange}
                        id="links"
                      >
                        {tech}
                      </Link>
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
