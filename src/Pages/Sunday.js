import React from "react";
import { Link } from "react-router-dom";

const Sunday=()=>{
    return(
        <div className="bodydiv1">
             <div className="maindiv1">
           <h3><b style={{color:'yellow'}}>Today is sunday</b></h3>
          
        </div>
        <div className="maindiv">
           <h3><b style={{color:"yellow"}}>And Yellow is perfect colour for today</b></h3>
          
        </div>
       
        <div className="FormContainer2">

        </div>
        <div className="buttonsection"> 
            <Link to="/Dash" className="btn btn-primary">Back</Link>
        </div>
        </div>
    )
}
export default Sunday;