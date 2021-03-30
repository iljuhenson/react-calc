import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

import "styles/index.css";

function CalcBase() {
    return (
        <div className = "calc-base">
            <CalcScreen />
            <CalcNumpad />
        </div>
    )
}

function CalcScreen() {
    return (
        <div className = "calc-screen">
            <CalcMarks />
            <CalcResult />
        </div>
    )
}

function CalcMarks(props) {
    return (
        <div className = "calc-marks">

        </div>
    )
}

function CalcResult() {
    return (
        <div className = "clac-result">

        </div>
    )
}

function CalcNumpad() {
    
    
    return (
        <div className = "calc-numpad">
            {drawButton(1)}
            {drawButton(2)}
            {drawButton(3)}
            {drawButton(4)}
            {drawButton(5)}
            {drawButton(6)}
            {drawButton(7)}
            {drawButton(8)}
            {drawButton(9)}
            {drawButton(10)}
            <CalcBack />
            <CalcClear />
        </div>
    )
}

function CalcButton(props) {
    return (
        <button className="calc-button">{props.value}</button>
    )
}

function CalcBack() {
    return (
        <button className="clac-button calc-back">Back</button>
    )
}

function CalcClear() {
    return (
        <button className="clac-button clac-clear">Clear</button>
    )
}

// vanila js functions for the project
function drawButton(num) {
    <CalcButton value = {num} />
}

ReactDOM.render(<CalcBase />, document.querySelector("#root"));