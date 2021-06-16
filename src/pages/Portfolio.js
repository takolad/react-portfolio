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
  function loadReadMes(repoNames) {
    // API.getReadMe(repoNames)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    console.log("loadReadMes called");
  }

  return (
    <Container fluid>
      <Row>
        Projects
        <Col size="md-6">
          {"Projects Go Here!"}
          <Project></Project>
        </Col>
        <Col size="md-6 sm-12">
          Projects Go Here!
          <Project></Project>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
