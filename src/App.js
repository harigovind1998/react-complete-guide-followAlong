import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personState, setPersonsState] = useState({
    persons: [
      { name: "Hari", age: 21 },
      { name: "Rekha", age: 18 },
      { name: "Harsha", age: 28 },
    ],
  });

  const switchNameHandler = () => {
    // this.state.persons[0].name = "hariprasadh";
    setPersonsState({
      persons: [
        { name: "Hari Govind", age: 22 },
        { name: "Rekha", age: 19 },
        { name: "Harsha", age: 18 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick={switchNameHandler}>Name Change</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      >
        School
      </Person>
    </div>
  );
};

export default app;

