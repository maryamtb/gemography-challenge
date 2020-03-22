import React from "react";

const format = {
  textTransform: "capitalize"
};

const box = {
  borderStyle: "solid",
  width: 100,
  color: "black",
  textAlign: "center"
};

const RepoItem = props => (
  <div>
    <img src={props.owner.avatar_url} alt={props.name} width='150' height='150' />
    <h4 style={format}>{props.name}</h4>
    <p>
      <span style={format}>{props.description} </span>
    </p>
    <p style={box}> Stars: {props.stargazers_count}</p>
    <p style={box}> Issues: {props.open_issues}</p>
    <p>Submitted 30 days ago by {props.name}</p>
  </div>
);

export default RepoItem;