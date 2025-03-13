import React from "react";

export default function Statistics(props) {
    let totalScore = 0;
    let len = 0;
    let minScore = 101;
    let maxScore = -1;
    props.courseResults.forEach(student => {
        totalScore += student.score;
        if (minScore > student.score) {
            minScore = student.score;
        }
        if (maxScore < student.score) {
            maxScore = student.score;
        }
        len++;
    });
    let avgScore = totalScore/len;
    return (
        <>
        <p>avg: {avgScore.toPrecision(4)}</p>
        <p>min: {minScore}</p>
        <p>max: {maxScore}</p>
        </>
    )
}