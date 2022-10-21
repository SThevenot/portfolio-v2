/** @format */

import React from "react";
import "../../styles/MyWork.css";
import brewfinder from "../../images/brewfinder.png";
import fitTheMood from "../../images/signup-screenshot.png";
import hobbySpot from "../../images/hobbyspot.png";
import timedQuiz from "../../images/Screenshot (23).png";
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
        <Col m={6}>
          <Card style={{ width: "18rem" }} className="mt-2 mb-2">
            <Card.Img variant="top" src={fitTheMood} />
            <Card.Body>
              <Card.Title>Fit The Mood</Card.Title>
              <Card.Text>
                This application is a one-stop website that allows the user to
                keep track of their emotions and workouts over time.
              </Card.Text>
              <Button
                href="https://limitless-river-86981.herokuapp.com/"
                target="_blank"
              >
                <FaGithub />
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col m={6}>
          <Card style={{ width: "18rem" }} className="mt-2 mb-2">
            <Card.Img variant="top" src={fitTheMood} />
            <Card.Body>
              <Card.Title>Fit The Mood</Card.Title>
              <Card.Text>
                This application is a one-stop website that allows the user to
                keep track of their emotions and workouts over time.
              </Card.Text>
              <Button
                href="https://limitless-river-86981.herokuapp.com/"
                target="_blank"
              >
                <FaGithub />
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col m={6}>
          <Card style={{ width: "18rem" }} className="mt-2 mb-2">
            <Card.Img variant="top" src={fitTheMood} />
            <Card.Body>
              <Card.Title>Fit The Mood</Card.Title>
              <Card.Text>
                This application is a one-stop website that allows the user to
                keep track of their emotions and workouts over time.
              </Card.Text>
              <Button
                href="https://limitless-river-86981.herokuapp.com/"
                target="_blank"
              >
                <FaGithub />
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col m={6}>
        <Card style={{ width: "18rem" }} className="mt-2 mb-2">
          <Card.Img variant="top" src={fitTheMood} />
          <Card.Body>
            <Card.Title>Fit The Mood</Card.Title>
            <Card.Text>
              This application is a one-stop website that allows the user to
              keep track of their emotions and workouts over time.
            </Card.Text>
            <Button
              href="https://limitless-river-86981.herokuapp.com/"
              target="_blank"
            >
              <FaGithub />
            </Button>
          </Card.Body>
        </Card>
        </Col>
        <Col m={6}>
        <Card style={{ width: "18rem" }} className="mt-2 mb-2">
          <Card.Img variant="top" src={fitTheMood} />
          <Card.Body>
            <Card.Title>Fit The Mood</Card.Title>
            <Card.Text>
              This application is a one-stop website that allows the user to
              keep track of their emotions and workouts over time.
            </Card.Text>
            <Button
              href="https://limitless-river-86981.herokuapp.com/"
              target="_blank"
            >
              <FaGithub />
            </Button>
          </Card.Body>
        </Card>
        </Col>
        <Col m={6}>
        <Card style={{ width: "18rem" }} className="mt-2 mb-2">
          <Card.Img variant="top" src={fitTheMood} />
          <Card.Body>
            <Card.Title>Fit The Mood</Card.Title>
            <Card.Text>
              This application is a one-stop website that allows the user to
              keep track of their emotions and workouts over time.
            </Card.Text>
            <Button
              href="https://limitless-river-86981.herokuapp.com/"
              target="_blank"
            >
              <FaGithub />
            </Button>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </section>
  );
}

export default MyWork;
