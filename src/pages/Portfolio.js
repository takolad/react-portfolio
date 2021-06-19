import React, { useEffect, useState } from "react";
import API from "../util/API";
import projectRepos from "../util/repos.json";
import { Col, Row, Container } from "../components/Grid";
import Project from "../components/Project";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const repos = projectRepos;
  // semantic, password, javascript, workday, weather
  // notes, techblog, small business, patient

  useEffect(() => {
    loadReadMes();
  }, []);

  // res.data.html_url
  function loadReadMes(repos) {
    // API.getReadMe(repoNames)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      {repos.length ? (
        <Row>
          <Col size="md-6 sm-12">
            {repos.map((repo) => (
              <Project key={repo.id} props={repo} />
            ))}
          </Col>
        </Row>
      ) : (
        <h3>{"No Projects Found :("}</h3>
      )}
    </Container>
  );
}

export default Portfolio;
