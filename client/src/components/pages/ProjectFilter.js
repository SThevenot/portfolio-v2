/** @format */

import React from "react";
import "../../styles/MyWork.css";
import Button from "react-bootstrap/Button";
import { useQuery } from "@apollo/client";
import { QUERY_FILTER } from "../../utils/queries";
import { useLocation, useParams } from "react-router-dom";
import { QUERY_PROJECTS } from "../../utils/queries";
import { filterData, SearchType } from "filter-data";

//I need to figure out how to take currentCategory and assign it to the query filter as the regex

const ProjectFilter = () => {
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
  console.log(result);

  function grabCategory() {
    const values = Object.values(location);
    const currentCateory = values[0].split("/").pop();
    return currentCateory;
  }

  return (
    <section id="myWork">
      {result.map((cat) => (
        <div>{cat.projectName}</div>
      ))}
    </section>
  );
};

export default ProjectFilter;
