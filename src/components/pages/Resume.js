/** @format */

import React from "react";
import "../../styles/Resume.css";
import myResume from "../../files/sarah-thevenot-resume.pdf";
import { Table, Row, Col } from "react-bootstrap";

export default function Resume() {
  return (
    <div id="resume">
      <div>
        <h1>Resume</h1>
        <button>
          <a href={myResume} download="sarah_resume.pdf">
            Download here
          </a>
        </button>
      </div>
      <Row>
        <Col>
          <div id="education">
            <dl>
              <h1>Education</h1>
              <dt>Rochester High School</dt>
              <dd>2016-2020</dd>
              <br />
              <dt>Lincoln Land Community College</dt>
              <dd>2018-2021</dd>
              <br />
              <dt>University of Denver Coding Bootcamp</dt>
              <dd>July 2022-October 2022</dd>
            </dl>
            <br />
          </div>
          <div id="skills">
            <Table striped bordered hover className="table">
              <thead>
                <tr>
                  <th>Front-end</th>
                  <th>Back-end</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HTML</td>
                  <td>mySQL</td>
                </tr>
                <tr>
                  <td>CSS</td>
                  <td>Node.js</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
        <Col xs={1}>
          <div className="horizontal"></div>
        </Col>
        <Col>
          <div id="experience">
            <dl>
              <h1>Experience</h1>
              <dt>Assistant Manager</dt>
              <dd>Jersey Mike's Subs</dd>
              <dd>2020-2021</dd>
              <dd>
                ● Dedicated time to take stock and order trucks as needed to
                keep up with dynamic sales
              </dd>
              <dd>
                ● Remained motivated during shifts and created a positive
                environment for staff
              </dd>
              <dd>
                ● Ensured that shifts went smoothly and everyone stayed on task
              </dd>
              <br />
              <dt>Shift Lead</dt>
              <dd>Jersey Mike's Subs</dd>
              <dd>2020-2021</dd>
              <dd>
                ● Dedicated time to take stock and order trucks as needed to
                keep up with dynamic sales
              </dd>
              <dd>
                ● Remained motivated during shifts and created a positive
                environment for staff
              </dd>
              <dd>
                ● Ensured that shifts went smoothly and everyone stayed on task
              </dd>
              <br />
              <dt>Crew Member</dt>
              <dd>Jersey Mike's Subs</dd>
              <dd>2019-2020</dd>
              <dd>
                ● Dedicated time to take stock and order trucks as needed to
                keep up with dynamic sales
              </dd>
              <dd>
                ● Remained motivated during shifts and created a positive
                environment for staff
              </dd>
              <dd>
                ● Ensured that shifts went smoothly and everyone stayed on task
              </dd>
            </dl>
          </div>
        </Col>
      </Row>
    </div>
  );
}
