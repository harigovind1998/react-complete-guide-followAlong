import React, {useEffect, useRef} from "react";
import cssClasses from './Cockpit.css'

const cockpit = (props) => {
    const btnRef = useRef(null);

    useEffect(()=>{
        btnRef.current.click();
    }, []);
    const classes = [];
    let btnClass ='';
    if (props.showButton){
        btnClass = classes.red;
    }
    if (props.persons.length <= 2) {
      classes.push(cssClasses.red);
    }

    if (props.persons.length <= 1) {
      classes.push(cssClasses.bold);
    }
  return (
    <div className={cssClasses.Cockpit}>
      <h1 className={classes.join(" ")}>Hello World!</h1>
      <button ref={btnRef} onClick={props.clicked} >
        Toggle show persons
      </button>
    </div>
  );
};

export default cockpit;
