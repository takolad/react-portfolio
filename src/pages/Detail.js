import React from "react";
import { useLocation } from "react-router-dom";
import repositories from "../util/repos.json";
import { Row, Col, Container } from "../components/Grid";

function Detail() {
  const repos = repositories;
  const location = useLocation();
  const targetRepo = repos.filter(
    (repo) => repo.id === parseInt(location.pathname.slice(-1))
  );
  let imgAlt = targetRepo[0].name + " screenshot";
  return (
    <Container>
      <Row>
        <Col size="md-8 sm-12">
          <h3>{targetRepo[0].name}</h3>
          <div className="project-body">
            <img alt={imgAlt} src={targetRepo[0].img} />
          </div>
          <div className="project-links">
            <a href={targetRepo[0].deploy_url}>Deployed Site</a>
            <br />
            <a href={targetRepo[0].repo_url}>Repository Link</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
