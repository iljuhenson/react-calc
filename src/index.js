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
    let [marks, setMarks] = useState({
        marksList: [],
        marksSum: 0,
        marksCounter: 0,
    })
    
    function handleClickInput(mark) {
        let arr = marks.marksList.slice();
        arr.push(mark);
        setMarks({marksList: arr, marksSum: marks.marksSum += mark, marksCounter: ++marks.marksCounter});
    }

    function handleClickDeletion() {
        if(!marks.marksCounter) {
            return;
        }
        let arr = marks.marksList;
        let deletedMark = arr.pop();
        setMarks({marksList: arr, marksSum: marks.marksSum -= deletedMark, marksCounter: --marks.marksCounter});
    }

    function handleClickClear() {
        setMarks({marksList: [], marksSum: 0, marksCounter: 0});
    }

    return (
        <div className = "calc-base">
            <CalcScreen marks={marks} />
            <CalcNumpad handleClickInput={handleClickInput} handleClickDeletion={handleClickDeletion} handleClickClear={handleClickClear}/>
        </div>
    )
}

function CalcScreen({ marks }) {
    return (
        <div className = "calc-screen">
            <CalcMarks marks={marks} />
            <CalcResult marks={marks} />
        </div>
    )
}

function CalcMarks({ marks }) {
    return (
        <div className = "calc-marks">
            {marks.marksList.map((mark, index) => <Mark key={index} mark={mark}/>)}
        </div>
    )
}

function Mark(props) {
    return (
        <div className="mark">{props.mark}</div>
    )
}

function CalcResult({ marks }) {

    console.log(marks.marksCounter)
    return (
        <div className = "calc-result">
            {marks.marksCounter ? (marks.marksSum / marks.marksCounter).toFixed(3) : ""}
        </div>
    )
}

function CalcNumpad(props) {
    return (
        <div className = "calc-numpad">
            <CalcInput handleClickInput={props.handleClickInput}/>
            <CalcDeletions handleClickClear={props.handleClickClear} handleClickDeletion={props.handleClickDeletion} />
        </div>
    )
}

function CalcDeletions(props) {
    return (
        <div className = "calc-deletions">
            <CalcBack handleClickDeletion={props.handleClickDeletion}/>
            <CalcClear handleClickClear={props.handleClickClear}/>
        </div>
    )
}

function CalcInput(props) {
    return (
        <div className = "calc-input">
            {drawButton(1, props)}
            {drawButton(2, props)}
            {drawButton(3, props)}
            {drawButton(4, props)}
            {drawButton(5, props)}
            {drawButton(6, props)}
            {drawButton(7, props)}
            {drawButton(8, props)}
            {drawButton(9, props)}
            {drawButton(10, props)}
        </div>
    )
}

function CalcButton(props) {
    return (
        <button className="calc-button" onClick={() => props.handleClickInput(props.value)}>{props.value}</button>
    )
}

function CalcBack(props) {
    return (
        <button className="calc-deletion calc-back" onClick={() => props.handleClickDeletion()}>Back</button>
    )
}

function CalcClear(props) {
    return (
        <button className="calc-deletion calc-clear" onClick={() => props.handleClickClear()}>Clear</button>
    )
}

// vanila js functions for the project
function drawButton(num, props) {
    return <CalcButton value={num} handleClickInput={props.handleClickInput} />
}

ReactDOM.render(<WebPage />, document.querySelector("#root"));