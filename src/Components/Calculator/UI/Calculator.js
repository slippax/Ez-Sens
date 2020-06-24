import React from "react";
import classes from './Calculator.module.css'
import Item from "../Selections/Item/Item";
import TitleHead from "./TitleHead/TitleHead";

function calculator() {
  return (
    <div>
    <TitleHead/>
    <div className={classes.Items}>
      <Item/>
    </div>
    </div>
  );
}

export default calculator;
