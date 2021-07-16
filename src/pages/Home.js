import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";

function Home() {
  const props = {
    heading: "Greetings!",
    body:
      "My name is John Hinojosa and I'm a full-stack developer " +
      "living in San Antonio, please have a look at my portfolio!",
  };
  return (
    <Container fluid>
      <Card content={props} />
      <div className="bg-white bg-gradient w-50 text-center m-auto">
        <Link to="/react-portfolio/portfolio">View Portfolio</Link>
      </div>
    </Container>
  );
}

export default Home;
