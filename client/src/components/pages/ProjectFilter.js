/** @format */

import React, { useState } from "react";
import "../../styles/MyWork.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";
import { QUERY_PROJECTS } from "../../utils/queries";
import { filterData, SearchType } from "filter-data";
import { Link } from "react-router-dom";

//I need to figure out how to take currentCategory and assign it to the query filter as the regex

const ProjectFilter = () => {
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
  let location = useLocation();

  const searchConditions = [
    {
      key: "category",
      value: grabCategory(),
      type: SearchType.EQ,
    },
  ];

  const result = filterData(projects, searchConditions);

  function grabCategory() {
    const values = Object.values(location);
    const currentCateory = values[0].split("/").pop();
    return currentCateory;
  }

  function displayCategories() {
    const arr = [];
    var next;
    projects.map((project) => {
      const categories = project.category;
      arr.push(categories);
      next = arr.toString().split(",");
      return next;
    });
    var findDuplicate = (next) =>
      next.filter((item, index) => next.indexOf(item) === index);
    const filtered = findDuplicate(next);
    return filtered;
  }

  const displayCategoryBtn = displayCategories();

  return (
    <section id="myWork">
      <div id="filterHeader">
        <h2>Please select a filter</h2>
        <h4>
          Current category...<span>{grabCategory()}</span>
        </h4>
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
      <Row sm="12" md="6" lg="4" xl="3">
        {result.map((cat) => (
          <Col sm="12" md="6" lg="4" xl="3" className="cardShadow">
            <Card key={cat._id} className="m-3 cardStyle">
              <Card.Img variant="top" src={cat.projectImg} />
              <Card.Body>
                <Card.Title>{cat.projectName}</Card.Title>
                <Card.Text>{cat.projectDescription}</Card.Text>
                <Button href={cat.projectGithub} target="_blank">
                  <FaGithub />
                </Button>
                {!cat.projectDeploy ? (
                  <Button className="noDemoBtn"> No Demo Available</Button>
                ) : (
                  <Button href={cat.projectDeploy} target="_blank">
                    Demo
                  </Button>
                )}
                <hr></hr>
                <div className="techBtnDiv">
                  {cat.category.map((tech) => (
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
    </section>
  );
};

export default ProjectFilter;
