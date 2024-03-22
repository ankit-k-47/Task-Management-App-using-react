import React,{useState} from "react";
function Addt(props){
    const [is,setis]=useState(false);
    console.log(props);
    return <div  className="card">
        <h1>{props.title}</h1>
        <h3>{props.des}</h3>
        <p>{props.deadline}</p>
        <p>{props.priority}</p>
        <p><input type="checkbox" onChange={()=>setis(!is)}/><label htmlFor="">Completed</label></p>
        {is&&(<button onClick={()=>props.ond(props.id)}> Delete</button>)}
        
    </div>
}

export default Addt;