import React from "react";
import { Link } from "react-router-dom";

const Monday =()=>{
    return(
        <div className="bodydiv1">
             <div className="maindiv1">
           <h3><b style={{color:'green'}}>Today is Monday</b></h3>
          
        </div>
        <div className="maindiv">
           <h3><b style={{color:"green"}}>And Green is perfect colour for today</b></h3>
          
        </div>
       
        <div className="FormContainer3">

        </div>
        <div className="buttonsection"> 
            <Link to="/Dash" className="btn btn-primary">Back</Link>
        </div>
        </div>
    )
}
export default Monday;