/** @format */

import React from "react";
import "../../styles/MyWork.css";
import brewfinder from "../../images/brewfinder.png";
import fitTheMood from "../../images/signup-screenshot.png";
import hobbySpot from "../../images/hobbyspot.png";
import timedQuiz from "../../images/Screenshot (23).png";
import employeeTracker from "../../images/employee-tracker.png";
import noteTaker from "../../images/note-taker.png";
import randomPassword from "../../images/random-password.png";
import readmeGenerator from "../../images/readme-generator.png";
import socialNetwork from "../../images/social-network.png";
import teamGenerator from "../../images/team-generator.png";
import workScheduler from "../../images/work-scheduler.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function MyWork() {
  return (
    <section id="myWork">
      <Row>
        <Col sm="12" md="6" lg="4" xl="3" className="cardShadow">
          <Card className="m-3 cardStyle">
            <Card.Img variant="top" src={fitTheMood} />
            <Card.Body>
              <Card.Title>Fit The Mood</Card.Title>
              <Card.Text>
                This application is a one-stop website that allows the user to
                keep track of their emotions and workouts over time.
              </Card.Text>
              <Button
                href="https://github.com/halliemestas/FitTheMood"
                target="_blank"
              >
                <FaGithub />
              </Button>
              <Button
                href="https://limitless-river-86981.herokuapp.com/"
                target="_blank"
              >
                Demo
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="4" xl="3" className="cardShadow">
          <Card className="m-3 cardStyle">
            <Card.Img variant="top" src={hobbySpot} />
            <Card.Body>
              <Card.Title>HobbySpot</Card.Title>
              <Card.Text>
                This project is a blog style application where users can login
                and post about what they enjoy as hobbies.
              </Card.Text>
              <Button
                href="https://github.com/Ehren-Lewis/HobbySpot"
                target="_blank"
              >
                <FaGithub />
              </Button>
              <Button
                href="https://damp-reaches-02576.herokuapp.com/"
                target="_blank"
              >
                Demo
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="4" xl="3" className="cardShadow">
          <Card className="m-3 cardStyle">
            <Card.Img variant="top" src={brewfinder} />
            <Card.Body>
              <Card.Title>Brewfinder</Card.Title>
              <Card.Text>
                This is a group project that allows the user to type in a city
                and state to view local breweries and weather data using APIs.
              </Card.Text>
              <Button
                href="https://relero90.github.io/brewfinder/"
                target="_blank"
              >
                <FaGithub />
              </Button>
              <Button
                href="https://github.com/relero90/brewfinder"
                target="_blank"
              >
                Demo
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="4" xl="3" className="cardShadow">
          <Card className="m-3 cardStyle">
            <Card.Img variant="top" src={noteTaker} />
            <Card.Body>
              <Card.Title>Note-Taker</Card.Title>
              <Card.Text>
                This a functionional web application that allows the user to
                take notes and save them locally.
              </Card.Text>
              <Button
                href="https://sthevenot.github.io/note-taker/"
                target="_blank"
              >
                <FaGithub />
              </Button>
              <Button
                href="https://github.com/SThevenot/note-taker"
                target="_blank"
              >
                Demo
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="4" xl="3" className="cardShadow">
          <Card className="m-3 cardStyle">
            <Card.Img variant="top" src={employeeTracker} />
            <Card.Body>
              <Card.Title>Employee Tracker</Card.Title>
              <Card.Text>
                A mySQL application that will prompt the user if they want to
                view all of the employees, departments, or roles and if they
                want to edit them as well.
              </Card.Text>
              <Button
                href="https://github.com/SThevenot/employee-tracker"
                target="_blank"
              >
                <FaGithub />
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="4" xl="3" className="cardShadow">
          <Card className="m-3 cardStyle">
            <Card.Img variant="top" src={timedQuiz} />
            <Card.Body>
              <Card.Title>Timed Quiz</Card.Title>
              <Card.Text>
                This is a website that will take you through a timed quiz. Time
                will be deducted if you answer a question incorrectly. At the
                end you can save your score.
              </Card.Text>
              <Button
                href="https://github.com/SThevenot/timedQuiz"
                target="_blank"
              >
                <FaGithub />
              </Button>
              <Button
                href="https://sthevenot.github.io/timedQuiz/"
                target="_blank"
              >
                Demo
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="4" xl="3" className="cardShadow">
          <Card className="m-3 cardStyle">
            <Card.Img variant="top" src={readmeGenerator} />
            <Card.Body>
              <Card.Title>README.md Generator</Card.Title>
              <Card.Text>
                This is a program that prompts the user with questions about
                their project and creates a dynamic and concise markdown file.
              </Card.Text>
              <Button
                href="https://github.com/SThevenot/readme-generator"
                target="_blank"
              >
                <FaGithub />
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="4" xl="3" className="cardShadow">
          <Card className="m-3 cardStyle">
            <Card.Img variant="top" src={randomPassword} />
            <Card.Body>
              <Card.Title>Random Password Generator</Card.Title>
              <Card.Text>
                This website prompts the user for what specifications they'd
                like for their password and generates a random password based on
                that.
              </Card.Text>
              <Button
                href="https://github.com/SThevenot/random-password"
                target="_blank"
              >
                <FaGithub />
              </Button>
              <Button
                href="https://sthevenot.github.io/random-password/"
                target="_blank"
              >
                Demo
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="4" xl="3" className="cardShadow">
          <Card className="m-3 cardStyle">
            <Card.Img variant="top" src={socialNetwork} />
            <Card.Body>
              <Card.Title>Back-End Social Network</Card.Title>
              <Card.Text>
                This is a back-end application that allows the user to create
                thoughts, reactions, and add friends as well.
              </Card.Text>
              <Button
                href="https://github.com/SThevenot/social-network"
                target="_blank"
              >
                <FaGithub />
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="4" xl="3" className="cardShadow">
          <Card className="m-3 cardStyle">
            <Card.Img variant="top" src={teamGenerator} />
            <Card.Body>
              <Card.Title>Work Team Generator</Card.Title>
              <Card.Text>
                A website that allows the user to create a team of managers,
                engineers, and interns in the backend and display them on the
                frontend.
              </Card.Text>
              <Button
                href="https://github.com/SThevenot/team-generator"
                target="_blank"
              >
                <FaGithub />
              </Button>
              <Button
                href="https://sthevenot.github.io/team-generator/"
                target="_blank"
              >
                Demo
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="4" xl="3" className="cardShadow">
          <Card className="m-3 cardStyle">
            <Card.Img variant="top" src={workScheduler} />
            <Card.Body>
              <Card.Title>Work Scheduler</Card.Title>
              <Card.Text>
                A functional work scheduler using Boostrap 5 to style
                accordingly and moment.js for current timestamps.
              </Card.Text>
              <Button
                href="https://github.com/SThevenot/work-scheduler"
                target="_blank"
              >
                <FaGithub />
              </Button>
              <Button
                href="https://sthevenot.github.io/work-scheduler/"
                target="_blank"
              >
                Demo
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default MyWork;
