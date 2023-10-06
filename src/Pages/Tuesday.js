import React from "react";
import { Link } from "react-router-dom";

const Tuesday =()=>{
    return(
        <div className="bodydiv1">
        <div className="maindiv1">
      <h3><b style={{color:'blue'}}>Today is Tuesday</b></h3>
     
   </div>
   <div className="maindiv">
      <h3><b style={{color:"blue"}}>And Blue is perfect colour for today</b></h3>
     
   </div>
       
        <div className="FormContainer4">

        </div>
        <div className="buttonsection"> 
            <Link to="/Dash" className="btn btn-primary">Back</Link>
        </div>
        </div>
    )
}
export default Tuesday;