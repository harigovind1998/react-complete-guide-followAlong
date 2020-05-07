import React, { Component } from "react";
import Radium, { StyleRoot } from "radium";

import CSSclasses from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import WithClass from "../Hoc/WithClass";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: "1", name: "Hari", age: 21 },
      { id: "2", name: "Rekha", age: 18 },
      { id: "3", name: "Harsha", age: 28 },
    ],
    showPerson: false,
    showCockpit: true,
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
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <WithClass class={CSSclasses.App}>
        <button
          onClick={() => {
            this.setState((prevState, props) => {
              return { showCockpit: !prevState.showCockpit };
            });
          }}
        >
          Toggle Cockpit!
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            showButton={this.state.showPerson}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}
          />
        ) : null}

        <div>{persons}</div>
      </WithClass>
    );
  }
}

export default Radium(App);
