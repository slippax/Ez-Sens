import React, { useState, useEffect } from "react";
import Select from "react-select";

import classes from "./Item.module.css";

import TextField from "@material-ui/core/TextField";

import ClimbingBoxLadder from "react-spinners/PacmanLoader";

import { Wave } from "react-animated-text";

const Item = () => {
  const options = [
    { value: 1, label: "Valorant" },
    { value: 2, label: "CS:GO" },
    { value: 3, label: "Overwatch" },
  ];

  const [gameOne, setGameOne] = useState("game");
  const [gameTwo, setGameTwo] = useState("game");

  const [sensOne, setSensOne] = useState("1");

  const [dpiOne, setDpiOne] = useState("800");

  const [convertedValue, setConvertedValue] = useState(1);

  const [loading, setLoading] = useState(true);
  const toggle = React.useCallback(() => setLoading(!loading));

  useEffect(() => {
    console.log(gameOne.value + "" + gameTwo.value);
    console.log(dpiOne);
    console.log(sensOne);
    calculate();
    console.log(convertedValue);
  });

  const showConverted = () => {
    if (loading) {
      return <Wave iterations={1} text="Sensitivity: Waiting..." />;
    }
    if (!loading) {
      return <Wave iterations={1} text={'Sensitivity: ' + convertedValue.toFixed(3)} />;
    }
  };

  const handleChangeFrom = (selectionOne) => {
    setGameOne(selectionOne);
  };

  const handleChangeTo = (selectionTwo) => {
    setGameTwo(selectionTwo);
    if (loading) {
      toggle();
    }
  };

  const handleChangeFromDpi = (selectionOneDpi) => {
    setDpiOne(selectionOneDpi.target.value);
  };

  const handleChangeFromSens = (selectionOneSens) => {
    setSensOne(selectionOneSens.target.value);
  };

  const calculate = () => {
    if (gameOne.label == "Valorant") {
      if (gameTwo.label == "Valorant") {
        setConvertedValue(sensOne * 1);
      }
      if (gameTwo.label == "CS:GO") {
        setConvertedValue(sensOne * 3.18);
      }
      if (gameTwo.label == "Overwatch") {
        setConvertedValue(sensOne * 10.61);
      }
    }

    if (gameOne.label == "CS:GO") {
      if (gameTwo.label == "CS:GO") {
        setConvertedValue(sensOne * 1);
      }
      if (gameTwo.label == "Valorant") {
        setConvertedValue(sensOne / 3.18);
      }
      if (gameTwo.label == "Overwatch") {
        setConvertedValue(sensOne * 3.33);
      }
    }

    if (gameOne.label == "Overwatch") {
      if (gameTwo.label == "Overwatch") {
        setConvertedValue(sensOne * 1);
      }
      if (gameTwo.label == "Valorant") {
        setConvertedValue(sensOne / 10.61);
      }
      if (gameTwo.label == "CS:GO") {
        setConvertedValue(sensOne / 3.33);
      }
    }
  };

  return (
    <div>
      <div className={classes.From}>
        Select Game (from):
        <Select onChange={handleChangeFrom} options={options} />
      </div>
      <div className={classes.To}>
        Select Game (to):
        <Select onChange={handleChangeTo} options={options} />
      </div>
      <div>
        <div className={classes.SensDpiFrom}>
          <div>{gameOne.label} Sensitivity & DPI:</div>
          <div>
            <TextField
              id="standard-basic"
              label="Sensitivity"
              onChange={handleChangeFromSens}
              defaultValue={sensOne}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="DPI"
              defaultValue={dpiOne}
              onChange={handleChangeFromDpi}
            />
          </div>
        </div>
      </div>

      <div className={classes.ConvertedValue}>{showConverted()}</div>
      <div className={classes.WaitingLeft}>
        <ClimbingBoxLadder size={10} color={"gray"} loading={loading} />
      </div>
    </div>
  );
};

export default Item;
