import "./App.css";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import Dash from "./Pages/Dash";
import Error from "./Pages/Error";
import Passwordreset from "./Pages/Passwordreset";
import Main from "./Pages/Main";
import Sunday from "./Pages/Sunday";
import Monday from "./Pages/Monday";
import Tuesday from "./Pages/Tuesday";
import Wednesday from "./Pages/Wednesday";
import Thursday from "./Pages/Thursday";
import Friday from "./Pages/Friday";
import Saturday from "./Pages/Saturday";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route exact path="/SignUp" Component={SignUp} />
        <Route exact path="/ForgotPassword" Component={ForgotPassword} />
        <Route exact path="/Dash" Component={Dash} />
        <Route exact path="/Main" Component={Main} />
        <Route exact path="/Sunday" Component={Sunday} />
        <Route exact path="/Monday" Component={Monday} />
        <Route exact path="/Tuesday" Component={Tuesday} />
        <Route exact path="/Wednesday" Component={Wednesday} />
        <Route exact path="/Thursday" Component={Thursday} />
        <Route exact path="/Friday" Component={Friday} />
        <Route exact path="/Saturday" Component={Saturday} />

        <Route
          exact
          path="/forgotpassword/:id/:token"
          Component={Passwordreset}
        />
        <Route exact path="*" Component={Error} />
      </Routes>
    </div>
  );
}

export default App;
