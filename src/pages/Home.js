import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";

function Home() {
  const props = {
    heading: "Hello there!",
    body:
      "My name is John Hinojosa and I'm a Full-Stack Developer " +
      "living in San Antonio. I enjoy learning new technologies " +
      "and get a kick out of solving problems! Have a look at my portfolio " +
      "and please feel free to connect with me on LinkedIn!"
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
