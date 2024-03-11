
import React,{useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Task from "./components/Task";
import Addt from "./components/Addt";

function App() {
  const [tasks,addtasks]=useState([]);
  function add(task){
    addtasks(pre=>{
      return [...pre,task];
    });
    
  }
  
  function del(id){
    addtasks(pre=>{
      return pre.filter((task,index)=>{
      return index!==id;
    });
    });
    console.log(id);
  }
  function comparePriority(taskA, taskB) {
    return taskA.priority - taskB.priority;
  }
  return (
    <div className="App">
 
    <Header></Header>
    <div className="c">

    <Task onp={add}></Task>
    { 
      tasks.sort(comparePriority).map((ta,index)=>{return(<Addt key={index} ond={del} id={index} priority={ta.priority  } title={ta.title} des={ta.desc} deadline={ta.deadline}></Addt>)})
    }</div>
    <Footer></Footer>
    </div>
  );
}

export default App;
