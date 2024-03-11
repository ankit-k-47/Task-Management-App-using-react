import React from "react";
function Footer(){
    const da=new Date().getFullYear();
    return <footer >
    <p>Copyright {da}</p>
  </footer>
}
export default Footer;