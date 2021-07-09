import React from "react";
import { useLocation, Redirect } from "react-router-dom";
import repositories from "../util/repos.json";
import { Row, Col, Container } from "../components/Grid";

function Detail() {
  const repos = repositories;
  const location = useLocation();
  const targetRepo = repos.filter(
    (repo) => repo.id === parseInt(location.pathname.slice(-1))
  );
  try {
    let imgAlt = targetRepo[0].name + " screenshot";
    return (
      <Container>
        <Row>
          <Col size="12">
            <h3>{targetRepo[0].name}</h3>
            <div className="project-body">
              <img alt={imgAlt} src={targetRepo[0].img} />
            </div>
            <div className="project-links">
              {targetRepo[0].deploy_url ? (
                <a
                  href={targetRepo[0].deploy_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed Site
                </a>
              ) : (
                "No deployed link yet available"
              )}
              <br />
              <a href={targetRepo[0].repo_url} target="_blank" rel="noreferrer">
                Repository Link
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    );
  } catch (err) {
    return <Redirect to="/portfolio" />;
  }
}

export default Detail;
