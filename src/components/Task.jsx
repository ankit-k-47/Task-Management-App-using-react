import React,{useState} from "react";

function Task(props){
    const options=["1","2","3","4"];
    const [task,sett]=useState({
        title:"",
        desc:"",
        deadline:"",
        priority:"",
      })
    function han(event){
        const {name,value}=event.target;
        sett(pre=>{
            return {
                ...pre,[name]:value,
            };
        });
  console.log(task.priority);
    }
    function hand(e){
        e.preventDefault();
        props.onp(task);    
        
       
    }
    
    return <form className="form">
        <input  name="title" value={task.title} onChange={han} placeholder="Task name"></input>
        <textarea name="desc" value={task.desc} onChange={han} placeholder="Task Description" rows="3"></textarea>
        <span>Deadline:<input name="deadline" type="date" style={{width:"max-content"}} value={task.deadline} onChange={han} placeholder="deadline"></input></span>
        <p>Priority <select name="priority" value={task.priority} onChange={han}>
                <option>Please choose one option</option>
                {options.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
            </select></p>
        <button onClick={hand}>Push</button>
    </form>
}
export default Task;