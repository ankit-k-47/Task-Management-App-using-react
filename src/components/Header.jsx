import React from "react";
import { Link } from "react-router-dom";

function Header(){
   return <header style={{textAlign:"center"}} className="App-header">
        <h1>Task Management App<button ><Link style={{textDecoration:"none", color:"white"}} to='/'>Login</Link></button></h1>
    </header>
}
export default Header;