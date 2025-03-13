import React from "react";
import Statistics from "./Statistics";

export default function Scores(props) {
    return <>
        <div className="scores">
            <h1>{props.course}</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>    
                        <th>Last Name</th>    
                        <th>Score</th>    
                    </tr>            
                </thead>
                <tbody>
                    {props.courseResults.map((student, index)=>{
                        let checkScore = student.score <= 50 ? "warning" : "";
                        return(
                        <tr key={index}>
                            <td>{student.firstName}</td>    
                            <td>{student.lastName}</td>   
                            <td className={checkScore}>{student.score}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
            <Statistics courseResults={props.courseResults}/>
        </div>
    </>
}