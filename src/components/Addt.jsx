import React from "react";
function Addt(props){
    console.log(props);
    return <div  className="card">
        <h1>{props.title}</h1>
        <h3>{props.des}</h3>
        <p>{props.deadline}</p>
        <p>{props.priority}</p>
        <button onClick={()=>props.ond(props.id)}> Delete</button>
        
    </div>
}

export default Addt;