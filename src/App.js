import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Hari", age: 21 },
      { name: "Rekha", age: 18 },
      { name: "Harsha", age: 28 },
    ],
  };

  switchNameHandler = (newName) => {
    // this.state.persons[0].name = "hariprasadh";
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: "Rekha", age: 19 },
        { name: "Harsha", age: 18 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 22 },
        { name: "Rekha", age: 19 },
        { name: "Harsha", age: 18 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button onClick={this.switchNameHandler.bind(this, "Hari Govind")}>
          Name Change
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Hari")}
        >
          School
        </Person>
      </div>
    );
  }
}

export default App;
