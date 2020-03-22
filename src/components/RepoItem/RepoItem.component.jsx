import React from "react";
import { Container, Row, Col } from "shards-react";

import getFormattedTime from "../../utils/getFormattedTime";

import "./RepoItem.styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

const border = {
  borderStyle: "solid",
  width: 100,
  textAlign: "center"
};

const RepoItem = props => (
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
          <h4 className="format">{props.name}</h4>
          <p>
            <span className="format">{props.description} </span>
          </p>
          <table
            className="table table-borderless"
            style={{ width: "50%", marginLeft: -12, marginTop: -12 }}
          >
            <tbody>
              <tr>
                <td>
                  <p style={border}>Stars: {props.stargazers_count}</p>
                </td>
                <td>
                  <p style={border}>Issues: {props.open_issues}</p>
                </td>
                <td>
                  <p style={{ width: "250%" }}>
                    Submitted {getFormattedTime(props.created_at)} by{" "}
                    {props.name}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  </div>
);

export default RepoItem;