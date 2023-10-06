import React from "react";
import { Link } from "react-router-dom";

const Thursday=()=>{
    return(
        <div className="bodydiv1">
        <div className="maindiv1">
      <h3><b style={{color:'violet'}}>Today is Thursday</b></h3>
     
   </div>
   <div className="maindiv">
      <h3><b style={{color:"violet"}}>And Voilet is perfect colour for today</b></h3>
     
   </div>
       
        <div className="FormContainer6">

        </div>
        <div className="buttonsection"> 
            <Link to="/Dash" className="btn btn-primary">Back</Link>
        </div>
        </div>
    )
}
export default Thursday;