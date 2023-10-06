import React from "react";
import { Link } from "react-router-dom";

const Wednesday=()=>{
    return(
        <div className="bodydiv1">
        <div className="maindiv1">
      <h3><b style={{color:'orange'}}>Today is Wednesday</b></h3>
     
   </div>
   <div className="maindiv">
      <h3><b style={{color:"orange"}}>And Orange is perfect colour for today</b></h3>
     
   </div>
       
        <div className="FormContainer5">

        </div>
        <div className="buttonsection"> 
            <Link to="/Dash" className="btn btn-primary">Back</Link>
        </div>
        </div>
    )
}
export default Wednesday;