import React, { Component } from "react";
import CSSclasses from "./App.css";
import Person from "./Person/Person";
import Radium, { StyleRoot } from "radium";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Hari", age: 21 },
      { id: "2", name: "Rekha", age: 18 },
      { id: "3", name: "Harsha", age: 28 },
    ],
    showPerson: false,
  };

  deletePersonHandler = (personIndex) => {
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({ persons: person });
  };

  nameChangedHandler = (event, id) => {
    const personToChangeIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const personToChange = {
      ...this.state.persons[personToChangeIndex],
    };
    personToChange.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personToChangeIndex] = personToChange;

    this.setState({
      persons: persons,
    });
  };

  togglePersonHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson,
    });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <StyleRoot>
        <div className={CSSclasses.App}>
          <h1 className={classes.join(" ")}>Hello World!</h1>
          <button onClick={this.togglePersonHandler} style={style}>
            Toggle show persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
