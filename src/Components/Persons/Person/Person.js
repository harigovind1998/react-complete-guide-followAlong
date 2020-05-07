import React, { Component } from "react";
import cssClasses from "./Person.css";
import AuthContext from "../../../Context/Auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.Ref = React.createRef();
  }

  componentDidMount() {
    this.Ref.current.focus();
  }
  render() {
    return (
      <div className={cssClasses.Person}>
        <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? (
              <p>authenticated</p>
            ) : (
              <p>please login in</p>
            )
          }
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age}!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.Ref}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}
export default Person;
