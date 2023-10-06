import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
    return(
        <div className="bodydiv">
           
        <div className="maindiv">
           <h3><b style={{color:"green"}}>Worry</b> <b style={{color:"yellow"}}>about</b> <b style={{color:"blue"}}>What</b> <b style={{color:"brown"}}>colour</b> <b style={{color:"black"}}> wear</b> <b style={{color:"gold"}}>today</b> <b style={{color:"red"}}>????</b> </h3>
          
        </div>
        <div className="maindiv">
           <h3><b style={{color:"blue"}}>Dont</b> <b style={{color:"red"}}>Worry</b> <b style={{color:"green"}}>we</b> <b style={{color:"brown"}}>suggest</b> <b style={{color:"black"}}>you </b> <b style={{color:"brown"}}>a</b>  <b style={{color:"pink"}}>perfect</b> <b style={{color:"black"}}> dress</b> <b style={{color:"gold"}}>colour</b> <b style={{color:"red"}}>everyday</b> </h3>
          
        </div>
        
         <div className="maindiv">
         <h3><b>What's a day?</b></h3>
        </div>
        <div >
        
        <div className="buttonsection"> 
            <Link to="/Monday" className="btn btn-success">Monday</Link>
        </div>
        <div className="buttonsection">
        <Link to="/Tuesday" className="btn btn-success">Tuesday</Link>
        </div>
        <div className="buttonsection">
        <Link to="/Wednesday" className="btn btn-success">Wednseday</Link>
       </div>  
       <div className="buttonsection">
       <Link to="/Thursday" className="btn btn-success">Thursday</Link>
        </div>
        <div className="buttonsection">
        <Link to="/Friday" className="btn btn-success">Friday</Link>
        </div>
        <div className="buttonsection">
        <Link to="/Saturday" className="btn btn-success">Saturday</Link>
        </div>
        <div className="buttonsection">
            <Link to="/Sunday" className="btn btn-success">Sunday</Link>
        </div>
        </div>
           
        
        
      
        </div>
    )
}
export default Main;