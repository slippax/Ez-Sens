import React from "react";
import classes from "./TitleHead.module.css";
import Typist from "react-typist";
import { FaBolt } from "react-icons/fa";

function navbar() {
  return (
    <div>
      <div className={classes.Title}>
        <div>Ez-Sens</div>
      </div>

      <Typist className={classes.Text}>
        <Typist.Delay ms={1000} />
        <span>made with react. </span>
        <Typist.Delay ms={500} />
        <Typist.Backspace count={17} delay={400} />
        <Typist.Delay ms={500} />
        <span>
          {" "}
          by slippa. <FaBolt />{" "}
        </span>
      </Typist>
    </div>
  );
}

export default navbar;
