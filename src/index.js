import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

import "./styles/index.css";

function WebPage() {
    return (
        <main>
            <Greetings />
            <CalcBase />
        </main>
    )
}

function Greetings() {
    return (
        <h1>Your school calc!</h1>
    )
}

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
        <div className = "calc-result">

        </div>
    )
}

function CalcNumpad() {
    
    
    return (
        <div className = "calc-numpad">
            <CalcInput />
            <CalcDeletions />
        </div>
    )
}

function CalcDeletions() {
    return (
        <div className = "calc-deletions">
            <CalcBack />
            <CalcClear />
        </div>
    )
}

function CalcInput() {
    return (
        <div className = "calc-input">
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
        <button className="calc-deletion calc-back">Back</button>
    )
}

function CalcClear() {
    return (
        <button className="calc-deletion calc-clear">Clear</button>
    )
}

// vanila js functions for the project
function drawButton(num) {
    return <CalcButton value = {num} />
}

ReactDOM.render(<WebPage />, document.querySelector("#root"));