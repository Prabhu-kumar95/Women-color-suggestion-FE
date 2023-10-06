import React from "react";
import { Link } from "react-router-dom";

const Saturday=()=>{
    return(
        <div className="bodydiv1">
             <div className="maindiv1">
           <h3><b style={{color:'lightgreen'}}>Today is Saturday</b></h3>
          
        </div>
        <div className="maindiv">
           <h3><b style={{color:"lightgreen"}}>And lightgreen is perfect colour for today</b></h3>
          
        </div>
       
        <div className="FormContainer7">

        </div>
        <div className="buttonsection"> 
            <Link to="/Dash" className="btn btn-primary">Back</Link>
        </div>
        </div>
    )
}
export default Saturday;