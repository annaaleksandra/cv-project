import React from "react";

const Overview = (props) => {
  const { degrees } = props;
  console.log(props);
  console.log(props.degrees);
  return <p>{degrees}</p>;
};

export default Overview;
