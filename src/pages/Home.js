import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { Container, Row } from "../components/Grid";

function Home() {
  const props = {
    heading: "Greetings!",
    body:
      "My name is John Hinojosa and I'm a full-stack developer " +
      "living in San Antonio, please have a look at my portfolio!",
  };
  return (
    <Container>
      <Card content={props} />
      <Row>
        <Link to="/portfolio">View Portfolio</Link>
      </Row>
    </Container>
  );
}

export default Home;
