import React ,{useState} from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
 const [is,setis]=useState(false);
 const han = (e)=>{
e.prevenDefault();

 }
  return (
      
     
    <form className="forme" onSubmit={han}>
    <h1 style={{fontFamily:"fantasy" ,backgroundColor:"white ",marginBottom:"60px",fontSize:"40px",fontWeight:200}} >Sign In</h1>
    <button className="l" id="1" onMouseOver={()=>document.getElementById("1").style.backgroundColor="aliceblue"} onMouseOut={()=>document.getElementById("1").style.backgroundColor="white"} >Continue with Gmail</button>
    <button className="l" style={{color:"blue"}} id="2" onMouseOver={()=>document.getElementById("2").style.backgroundColor="aliceblue"} onMouseOut={()=>document.getElementById("2").style.backgroundColor="white"} >Continue with Facebook</button>
    
      <input
        type="text"
        placeholder="Enter your name"
        className="in"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="in"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button  style={is?{backgroundColor:"lightblue"}:{backgroundColor:""}} className="i" onMouseOver={()=>setis(true)} onMouseOut={()=>setis(false)} type="submit"><Link to="/">Submit</Link></button>
    </form>

  );
}

export default Signin
