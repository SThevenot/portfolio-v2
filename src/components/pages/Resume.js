/** @format */

import React from "react";
import "../../styles/Resume.css";
import myResume from "../../files/Sarah Thevenot's Resume-hackerresume (1).pdf";
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
              <dt>University of Denver Coding Bootcamp</dt>
              <dd>July 2022-October 2022</dd>
              <br />
              <dt>Lincoln Land Community College</dt>
              <dd>2018-2021</dd>
              <br />
              <dt>Rochester High School</dt>
              <dd>2016-2020</dd>
            </dl>
            <br />
          </div>
          <div id="skills">
            <h1 className="skillsH1">Skills</h1>
            <Table striped bordered hover className="table mt-0">
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
                <tr>
                  <td>React.js</td>
                  <td>Express.js</td>
                </tr>
                <tr>
                  <td>Javascript</td>
                  <td>MongoDB</td>
                </tr>
                <tr>
                  <td>NPM</td>
                  <td>PWA</td>
                </tr>
                <tr>
                  <td>Bootstrap</td>
                  <td>GraphQL</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div id="certificates">
            <dl>
              <h1>Certificates</h1>
              <dt>Full-Stack Coding Bootcamp </dt>
              <dd>University of Denver</dd>
              <dd>
                <span>Complete</span>
              </dd>
              <dt>The Complete Web Development Course</dt>
              <dd>The App Brewery, Angela Yu</dd>
              <dd>
                In Progress <span>(50%)</span>
              </dd>
              <dt>The Complete Machine Learning & Data Science Bootcamp</dt>
              <dd>The App Brewery, Philipp Muellauer</dd>
              <dd>
                In Progress<span> (10%)</span>
              </dd>
            </dl>
          </div>
        </Col>
        <Col xs={1} id="horizontalCol">
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
          <div id="activities">
          <h2>About Me</h2>
          <hr />
          <h3>DnD</h3>
          <h5>
            I only got into DnD several months ago but I have found myself
            really enjoting it. I love the character creation aspect and I have
            aslo been the Dungeon Master a couple of times. I really like
            expressing my creativity in that way as well!
          </h5>
          <hr className="smallHr" />
          <h3>Crafts</h3>
          <h5>
            Growing up my favorite time of year was Christmas. Not for the
            presents or the food, but because I got to make all of my close
            friends and family Christmas presents. I still do to this day and
            enjoy learning new skills and how to make different things.
            Currently I spend a lot of my time crotcheting or making candles.
          </h5>
          <hr className="smallHr" />
          <h3>Cooking</h3>
          <h5>
            I used to really hate cooking because I felt like it would be really
            hard. It's not always easy but I love trying new recipes out
            whenever I have the time. My favorite dishes I've made are gyoza
            from scratch, which takes a couple hours. I also have a huge sweet
            tooth so trying out new desserts is something I really enjoy doing.
          </h5>
          <hr className="smallHr" />
        </div>
        </Col>
      </Row>
    </div>
  );
}
