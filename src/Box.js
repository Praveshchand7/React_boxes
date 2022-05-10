import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <div>
        <h2>{props.name}</h2>
        <p>title : {props.title}</p>
        <p>age: {props.age}</p>
        <ul>{props.lang}</ul>
      </div>
    </div>
  );
};

export default Box;
