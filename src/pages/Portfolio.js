import React from "react";
import { Row, Col, Container } from "../components/Grid";
import Project from "../components/Project";
import repos from "../util/repos.json";

function Portfolio() {
  return (
    <Container fluid>
      {repos.length ? (
        <Row>
          {repos.map((repo) => (
            <Col size="md-6 sm-12">
              <Project key={repo.id} props={repo} />
            </Col>
          ))}
        </Row>
      ) : (
        <h3>{"No Projects Found 😔"}</h3>
      )}
    </Container>
  );
}

export default Portfolio;
