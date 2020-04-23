import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: '1',name: "Hari", age: 21 },
      { id: '2',name: "Rekha", age: 18 },
      { id: '3',name: "Harsha", age: 28 },
    ],
    showPerson: false,
  };

  deletePersonHandler = (personIndex) =>{
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({persons: person})

  }

  nameChangedHandler = (event, id) => {
    const personToChangeIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })
    const personToChange = {
      ...this.state.persons[personToChangeIndex]
    }
    personToChange.name=event.target.value;
    const persons = [...this.state.persons];
    persons[personToChangeIndex] = personToChange;

    this.setState({
      persons: persons
    });
  };

  togglePersonHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson,
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index )=> {
            return (
              <Person 
              name={person.name}
              age={person.age}
              click={()=>this.deletePersonHandler(index)}
              key={person.id}
              changed={(event)=>this.nameChangedHandler(event,person.id)}/>
            )
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button onClick={this.togglePersonHandler} style={style}>
          Toggle show persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
