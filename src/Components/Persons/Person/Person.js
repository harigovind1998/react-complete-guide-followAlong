import React from "react";
import cssClasses from "./Person.css";
import Radium from "radium";

const person = (props) => {
  const stylep = {
    "@media (min-width: 500 px)": {
      width: "450px",
    },
  };
  return (
    <div className={cssClasses.Person} style={stylep}>
      <p onClick={props.click}>
        I'm a {props.name} and I am {props.age}!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
export default Radium(person);
