import React from "react";

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
                    {props.courseResults.map((student, index)=>(
                        <tr key={index}>
                            <td>{student.firstName}</td>    
                            <td>{student.lastName}</td>    
                            <td>{student.score}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
}