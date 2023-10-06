import React from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
function Login() {
  const [inpVal, SetInpVal] = useState({
    email: "",
    password: "",
  });

  const setVal = (e) => {
    const { name, value } = e.target;

    SetInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };
  const history = useNavigate();
  const logindata = async (e) => {
    e.preventDefault();

    const { email, password } = inpVal;
    if (email === "") {
      alert("please enter email");
    } else if (password === "") {
      alert("please enter your password");
    } else {
      //
      const data = await fetch("https://daillydresscolorsuggestion.onrender.com/api/login", {
        method: "POST",

        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const res = await data.json();

      console.log(res);
      if (res.status === 201) {
        localStorage.setItem("usersdatatoken", res.result.token);
        history("/Dash");
        SetInpVal({ ...inpVal, email: "", password: "" });
      }else{
        alert("Password incorrect")
      }
    }
  };

  return (
    <div className="bodydiv">
      <div className="maindiv">
           <h3><b style={{color:"green"}}>Worry</b> <b style={{color:"yellow"}}>about</b> <b style={{color:"blue"}}>What</b> <b style={{color:"brown"}}>colour</b> <b style={{color:"black"}}> wear</b> <b style={{color:"gold"}}>today</b> <b style={{color:"red"}}>????</b> </h3>
          
        </div>
        <div className="maindiv">
           <h3><b style={{color:"blue"}}>Dont</b> <b style={{color:"red"}}>Worry</b> <b style={{color:"green"}}>we</b> <b style={{color:"brown"}}>suggest</b> <b style={{color:"black"}}>you </b> <b style={{color:"brown"}}>a</b>  <b style={{color:"pink"}}>perfect</b> <b style={{color:"black"}}> dress</b> <b style={{color:"gold"}}>colour</b> <b style={{color:"red"}}>everyday</b> </h3>
          
        </div>
      <section>
        <div className="FormContainer">
          <form>
          <h2>Log-in</h2>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={inpVal.email}
                required
                placeholder="Enter your Email"
                onChange={setVal}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <span className="FP">
                <Link to="/ForgotPassword" className="button">
                  ForgotPassword?
                </Link>
              </span>
              <input
                type="password"
                className="form-control"
                name="password"
                value={inpVal.password}
                required
                placeholder="Enter your Password"
                onChange={setVal}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary "
              onClick={logindata}
            >
              Login
            </button>
            <p className="Text"> Don't have account?</p>{" "}
            <Link to="/SignUp" type="submit" className="btn btn-primary">
              SignUp
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
