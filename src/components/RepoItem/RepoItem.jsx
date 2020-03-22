import React from "react";
import { Container, Row, Col } from "shards-react";
import getFormattedTime from '../../utils/getFormattedTime'


import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

const format = {
  textTransform: "capitalize"
};

const box = {
  borderStyle: "solid",
  width: 100,
  color: "black",
  textAlign: "center"
};

const RepoCard = (props) => (
  <div>
    <Container>
      <Row>
        <Col sm="12" md="1" lg="2">
          <img
            src={props.owner.avatar_url}
            alt="avatar"
            width="125"
            height="125"
            display="flex"
          />
        </Col>
        <Col>
          <h4 style={format}>{props.name}</h4>
          <p>
            <span style={format}>{props.description} </span>
            
          </p>
          <div>
            <p style={box}> Stars: {props.stargazers_count}</p>
              <p style={box}> Issues: {props.open_issues}</p>
              <p>
                Submitted {getFormattedTime(props.created_at)} by {props.name}
              </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default RepoCard;